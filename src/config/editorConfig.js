import BraftEditor from 'braft-editor';
import Table from "braft-extensions/dist/table";
import CodeHighlighter from "braft-extensions/dist/code-highlighter";
import 'prismjs/components/prism-python';
import HeaderId from 'braft-extensions/dist/header-id';

const CodeHighlighterOptions = {
  syntaxs: [
    {
      name: 'JavaScript',
      syntax: 'javascript'
    }, {
      name: 'HTML',
      syntax: 'html'
    }, {
      name: 'CSS',
      syntax: 'css'
    }, {
      name: 'Python',
      syntax: 'python',
    },
    {
      name: 'Bash',
      syntax: 'bash'
    },
    {
      name: 'JSON',
      syntax: 'json'
    }, {
      name: 'React JSX ',
      syntax: 'jsx'
    },
  ]
};


BraftEditor.use([Table(), CodeHighlighter(CodeHighlighterOptions), HeaderId()]);

export default BraftEditor;
