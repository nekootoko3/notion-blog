import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>nekootoko3 のほのぼの日記</h1>
      <h2>nekootoko3 の毎日</h2>

      <div className="explanation">
        <p>ハイパーな猫です。</p>

        <p>旅行とバスケが好きな猫エンジニアです。</p>
      </div>
    </div>
  </>
)
