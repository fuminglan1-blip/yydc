function WordTable({ words, onSpeak, onDelete, speechSupported }) {
  return (
    <section className="panel">
      <h2>单词列表</h2>

      <div className="table-wrapper">
        <table className="word-table">
          <thead>
            <tr>
              <th>#</th>
              <th>英文单词</th>
              <th>英语发音</th>
              <th>中文意思</th>
              <th>播放</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {words.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td className="word-cell">{item.word}</td>
                <td>{item.phonetic}</td>
                <td>{item.meaning}</td>
                <td>
                  <button
                    className="btn btn-small btn-secondary"
                    type="button"
                    onClick={() => onSpeak(item.word)}
                    disabled={!speechSupported}
                  >
                    播放
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-small btn-danger"
                    type="button"
                    onClick={() => onDelete(item.id)}
                  >
                    删除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default WordTable
