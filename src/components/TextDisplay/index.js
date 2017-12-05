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
    const {editorState} = this.props;
    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div className="RichEditor-root">
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
