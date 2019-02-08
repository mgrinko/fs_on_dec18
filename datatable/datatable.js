class Datatable {
  constructor({ element, items, columnConfig }) {
    this._element = element;
    this._defaultItems = items;
    this._items = [];
    this._columnConfig = columnConfig;

    this._sortKey = '';
    this._sortOrder = '';
    this._currentQuery = '';

    this._render();

    this._element.addEventListener('click', (event) => {
      const th = event.target.closest('[data-sort-key]');

      if (!th) {
        return;
      }

      this._sortKey = th.dataset.sortKey;
      this._render();
    });
  }

  _renderHeader() {
    return `
      <thead>
        <tr>
          ${ Object.entries(this._columnConfig).map(([key, config]) => `

            <th 
              ${ config.isSortable ? `data-sort-key="${key}"` : '' }
            >
              ${ config.title }
            </th>
            
          `).join('') }
        </tr>
      </thead>
    `;
  }

  _renderItem(item) {
    return `
      <tr>
        ${ Object.keys(this._columnConfig).map(key => `
          <td>${ item[key] }</td>
        `).join('') }
      </tr>
    `;
  }

  _render() {
    this._items = this._defaultItems
      .filter(() => this._currentQuery)
      .sort(() => this._sortKey);


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
