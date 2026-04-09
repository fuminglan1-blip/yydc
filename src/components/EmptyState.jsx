function EmptyState({ hasWords }) {
  return (
    <section className="panel empty-state">
      <h2>{hasWords ? '没有匹配的单词' : '还没有单词数据'}</h2>
      <p>
        {hasWords
          ? '请尝试修改搜索关键词，或清空搜索后查看完整列表。'
          : '请在上方手动输入单词，或上传 txt/csv 文件开始学习。'}
      </p>
    </section>
  )
}

export default EmptyState
