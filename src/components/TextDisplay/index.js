import React from 'react';
import propTypes from 'prop-types';
import 'draft-js/dist/Draft.css';
import style from './index.css';
import { convertToRaw, convertFromRaw, Editor, EditorState, RichUtils } from 'draft-js';

class TextDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {editorState, className} = this.props;
    return (
      <div className={`RichDisplay-root ${className}`}>
        <Editor
          editorState={editorState}
          ref="editor"
          readOnly={true}
        />
      </div>
    );
  }
}

export default TextDisplay;
