import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';

import { appSetFullName, appSetEmail } from '../../actions/app';
import { configureStore } from '../../store/index';

import { FullName } from '../../FullName';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {
  @Prop({ context: 'store' }) store: Store;

  @State() fullName: FullName;
  @State() email: string;

  appSetFullName: Action;
  appSetEmail: Action;

  componentWillLoad() {
    // Only do this once, in the root component
    this.store.setStore(configureStore({}));

    this.store.mapStateToProps(this, (state) => {
      const {
        app: { fullName, email }
      } = state;

      return {
        fullName, email
      }
    });

    this.store.mapDispatchToProps(this, {
      appSetFullName, appSetEmail
    });
  }

  render() {
    console.log(this.fullName);
    return (
      <div>
        Hello, my full name is {this.fullName.toString()}, and my email is {this.email}
        <p>
          <input type="text" onInput={(e: any) => this.appSetFullName(e.target.value)} value={this.fullName.toString()}/>
        </p>
        <p>
          <input type="text" onInput={(e: any) => this.appSetEmail(e.target.value)} value={this.email.toString()}/>
        </p>
      </div>
    );
  }
}
