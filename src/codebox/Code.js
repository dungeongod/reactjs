import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    
    this.setState({
      code: newValue
    },()=>{
      console.log(this.state.code,e);
    });
  }
  render() {
    return (
      <div className = "Code">
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={this.state.code}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
      
      </div>
    );
  }
}

export default Code;
