function SearchBar({
  searchText,
  onSearchChange,
  totalCount,
  filteredCount,
  pendingMeaningCount,
  onRecognizeMeanings,
  isLookuping,
  onDedupe,
  onClearAll,
}) {
  return (
    <section className="panel">
      <h2>搜索与管理</h2>

      <div className="search-row">
        <input
          className="search-input"
          type="text"
          placeholder="输入英文、音标或中文意思进行过滤"
          value={searchText}
          onChange={(event) => onSearchChange(event.target.value)}
        />

        <button className="btn btn-secondary" type="button" onClick={onDedupe} disabled={totalCount === 0}>
          去重
        </button>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={onRecognizeMeanings}
          disabled={totalCount === 0 || isLookuping}
        >
          {isLookuping ? '识别中...' : '识别中文'}
        </button>
        <button className="btn btn-danger" type="button" onClick={onClearAll} disabled={totalCount === 0}>
          清空全部
        </button>
      </div>

      <p className="section-tip">
        显示 {filteredCount} / {totalCount} 条记录，待识别中文：{pendingMeaningCount}
      </p>
    </section>
  )
}

export default SearchBar
