'use babel';

import { CompositeDisposable } from 'atom';
import moment from 'moment';

export default {
  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'test-plugin:toggle': () => this.replace()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
  },

  replace() {
    console.log("replace");
    let editor;
    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.scan(/lastmod:.*/, (obj) => {
        obj.replace('lastmod: ' + moment().format());
      });
    }
  }
};
