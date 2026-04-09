function PageHeader({ totalCount }) {
  return (
    <header className="panel page-header">
      <h1>英语单词导入学习工具</h1>
      <p>支持手动录入与 txt/csv 导入，自动去重、搜索、发音与本地缓存。</p>
      <div className="count-badge">当前单词数：{totalCount}</div>
    </header>
  )
}

export default PageHeader
