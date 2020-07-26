import createElement from '../helpers/helper.dom';

class Button {
  constructor(type, label, props) {
    this.type = this.getType(type);
    this.props = this.createProperties(props);
    this.label = label || '';

    this.el = this.createButtonElement();
  }

  createProperties(props) {
    const opts = {};

    opts.size = this.getSize(props.size);
    opts.varient = this.getVarient(props.varient);

    opts.disableShadow = props.disableShadow || false;
    opts.disabled = props.disabled || false;

    opts.startIcon = props.startIcon || '';
    opts.endIcon = props.endIcon || '';

    return opts;
  }

  createButtonElement() {
    const cls = ['jwl-btn'];
    const attr = {};
    const children = [];

    cls.push(this.type);
    cls.push(this.props.size);
    cls.push(this.varient);

    if (this.props.disableShadow) {
      cls.push('disableShadow');
    }

    if (this.props.disabled) {
      cls.push('disabled');
      attr.disabled = true;
    }

    if (this.props.startIcon) {
      children.push(createElement('i', { class: `material-icons ${this.props.size}` }, this.props.startIcon));
    }

    children.push(this.label);

    if (this.props.endIcon) {
      children.push(createElement('i', { class: `material-icons ${this.props.size}` }, this.props.endIcon));
    }

    return createElement('button', {
      class: cls.join(' '),
      ...attr,
    }, ...children);
  }

  getType(type) {
    const types = ['default', 'primary', 'secondary', 'danger'];

    return types.includes(type) ? type : types[0];
  }

  getSize(size) {
    const sizes = ['sm', 'md', 'lg'];

    return sizes.includes(size) ? size : size[1];
  }

  getVarient(varient) {
    const varients = ['outline', 'text'];

    return varients.includes(varients) ? varient : '';
  }
}

export default Button;
