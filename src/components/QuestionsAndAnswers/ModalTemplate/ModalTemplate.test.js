
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, within } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import ModalTemplate from './ModalTemplate';

describe('Modal Template Component', () => {

  var props = {}

  beforeEach(() => {
  })

  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement("div");
    div.setAttribute('id', 'active-modal');
    render( <ModalTemplate open={false}>
      <div>Hi there</div>
      </ModalTemplate>, div )
  })
});