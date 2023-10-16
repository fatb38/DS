const TJS = require('typescript-json-schema');
const resolve = require('path').resolve;
const fs = require('fs');

const settings = {
    required: true
};

const compilerOptions = {
    strictNullChecks: true,
    esModuleInterop: true,
    skipLibCheck: true
};

// optionally pass a base path
const basePath = './';

const program = TJS.getProgramFromFiles([resolve('src/theme/types/index.d.ts')], compilerOptions, basePath);

const schema = TJS.generateSchema(program, 'IKitTheme', settings);

function _parseItem(item, defaultLabel, path) {
    let data = {};
    if (!item) {
        return;
    }

    if (item.$ref) {
        let def = item.$ref.split('/').pop();
        return _parseItem(schema.definitions[def], defaultLabel, '' + path);
    } else if (item.allOf) {
        item.allOf.forEach(subItem => {
            data = {
                ...data,
                ..._parseItem(subItem, defaultLabel, path)
            };
        });
    } else if (item.type === 'object') {
        data['_label'] = defaultLabel;
        data['_path'] = path;
        if (item.description) {
            data['_description'] = item.description;
        }
        Object.entries(item.properties).map(entry => {
            data[entry[0]] = _parseItem(entry[1], entry[0], `${path}.${entry[0]}`);
        });
    } else {
        data = {
            _label: defaultLabel,
            _path: path,
            _type: item.type,
            _min: item.minimum,
            _max: item.maximum
        };
        if (item.description) {
            data['_description'] = item.description;
        }
    }
    return data;
}

let formDatas = {
    _label: 'tree',
    general: {
        _label: 'General',
        ..._parseItem(schema.properties.general, 'General', 'general')
    },
    components: {
        _label: 'components',
        ..._parseItem(schema.properties.components, 'Components', 'components')
    }
};

const fileContents = `
const forms = ${JSON.stringify(formDatas, null, 4)};

export default forms;
`;

fs.writeFile('stories/tokens.tsx', fileContents, () => {});
