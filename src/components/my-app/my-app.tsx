import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';

import { appSetFullName } from '../../actions/app';
import { configureStore } from '../../store/index';

import { FullName } from '../../FullName';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {
  @Prop({ context: 'store' }) store: Store;

  @State() fullName: FullName;

  appSetFullName: Action;

  componentWillLoad() {
    // Only do this once, in the root component
    this.store.setStore(configureStore({}));

    this.store.mapStateToProps(this, (state) => {
      const {
        app: { fullName }
      } = state;

      return {
        fullName
      }
    });

    this.store.mapDispatchToProps(this, {
      appSetFullName
    });
  }

  render() {
    console.log(this.fullName);
    return (
      <div>
        Hello, my full name is {this.fullName.toString()}
        <p>
          <input type="text" onInput={(e: any) => this.appSetFullName(e.target.value)} value={this.fullName.toString()}/>
        </p>
      </div>
    );
  }
}
