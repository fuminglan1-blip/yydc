function ImportPanel({
  manualInput,
  onManualInputChange,
  onManualAdd,
  onFileImport,
}) {
  const handleFileChange = async (event) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    try {
      await onFileImport(file)
    } catch (error) {
      console.error('文件读取失败:', error)
      alert('文件读取失败，请确认文件格式是否正确。')
    } finally {
      event.target.value = ''
    }
  }

  return (
    <section className="panel">
      <h2>导入区域</h2>
      <p className="section-tip">
        手动输入支持换行、逗号或分号分隔，导入时会自动转小写并去重，且自动识别中文意思。
      </p>

      <div className="import-grid">
        <textarea
          className="text-input"
          rows={6}
          placeholder="例如：apple&#10;banana&#10;computer"
          value={manualInput}
          onChange={(event) => onManualInputChange(event.target.value)}
        />

        <div className="action-column">
          <button
            className="btn btn-primary"
            type="button"
            onClick={onManualAdd}
            disabled={!manualInput.trim()}
          >
            添加输入单词
          </button>

          <label className="btn btn-secondary file-btn">
            上传 txt/csv 文件
            <input type="file" accept=".txt,.csv,text/plain,text/csv" onChange={handleFileChange} />
          </label>
        </div>
      </div>
    </section>
  )
}

export default ImportPanel
