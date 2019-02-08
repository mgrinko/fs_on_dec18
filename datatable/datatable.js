class Datatable {
  constructor({ element, items, columnConfig }) {
    this._element = element;
    this._items = items;
    this._columnConfig = columnConfig;

    this._render();
  }

  _renderHeader() {
    return `
      <thead>
        <tr>
          ${ Object.values(this._columnConfig).map(config => `

            <th>${ config.title }</th>
            
          `).join('') }
        </tr>
      </thead>
    `;
  }

  _renderItem() {
    return `
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    `;
  }

  _render() {
    this._element.innerHTML = `
      <table>
        ${ this._renderHeader() }
        <tbody>
          ${ this._items.map(
            item => this._renderItem(item)
          ).join('') }
        </tbody>
      </table>
    `;
  }
}


Object.values(this._columnConfig).map(config => `

  <th>${ config.title }</th>
  
`).join('')
