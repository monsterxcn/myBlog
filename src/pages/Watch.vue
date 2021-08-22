<template>
  <div>
    <div class="post-title">
      <h1 class="post-title__text">剧</h1>
      <!-- <PostMeta :post="$page.post" /> -->
    </div>

    <div class="post content-box">
      <div class="post__content">
        <div class="md-content">
          <h3 style="margin-top: 0" id="最近在看">
            <a href="#最近在看"></a>最近在看
          </h3>
          <div class="watch-collection">
            <a
              class="watch-item"
              v-for="witem in wow"
              :href="witem.url"
              target="_blank"
            >
              <div class="watch-item-thumb" :style="witem.style"></div>
              <div class="watch-item-info">
                <span class="watch-item-title forei">{{ witem.name }}</span>
                <span class="watch-item-title">{{ witem.namecn }}</span>
              </div>
            </a>
          </div>

          <h3 id="次元碰撞の壹"><a href="#次元碰撞の壹"></a>次元碰撞の壹</h3>
          <p>
            <a
              class="watch"
              href="https://book.douban.com/subject/34815132/"
              target="_blank"
              >圆圈正义</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://book.douban.com/subject/26990639/"
              target="_blank"
              >带上她的眼睛</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://book.douban.com/subject/3834938/"
              target="_blank"
              >与神对话 第一卷</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://book.douban.com/subject/26352270/"
              target="_blank"
              >「三体」中的物理学</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://book.douban.com/subject/26831786/"
              target="_blank"
              >中国震撼：一个「文明型国家」的崛起</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://book.douban.com/subject/5363767/"
              target="_blank"
              >三体 III：死神永生</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://book.douban.com/subject/3066477/"
              target="_blank"
              >三体 II：黑暗森林</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://book.douban.com/subject/2567698/"
              target="_blank"
              >三体</a
            >
          </p>

          <h3 id="次元碰撞の贰"><a href="#次元碰撞の贰"></a>次元碰撞の贰</h3>
          <p>
            <a
              class="watch"
              href="https://bgm.tv/subject/218713"
              target="_blank"
              >Promare</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/320224"
              target="_blank"
              >时光代理人</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/268279"
              target="_blank"
              >漫画 电锯人</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/271687"
              target="_blank"
              >虚构推理</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/314518"
              target="_blank"
              >圣女的魔力是万能的</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/292969"
              target="_blank"
              >打了三百年的史莱姆，不知不觉就练到了满等</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/302189"
              target="_blank"
              >86 -不存在的战区-</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/303864"
              target="_blank"
              >异世界魔王与召唤少女的奴隶魔术 OMEGA</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/317614"
              target="_blank"
              >辉夜大小姐想让我告白？～天才们的恋爱头脑战～ OVA</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a class="watch" href="https://bgm.tv/subject/8491" target="_blank"
              >漫画 进击的巨人</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/316607"
              target="_blank"
              >奇蛋物语</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/282000"
              target="_blank"
              >五等分的新娘∬</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/277554"
              target="_blank"
              >无职转生 ～在异世界认真地活下去～</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/285666"
              target="_blank"
              >进击的巨人 最终季 Part1</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/294993"
              target="_blank"
              >咒术回战 Part1</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/278031"
              target="_blank"
              >关于我转生变成史莱姆这档事 第二季 Part1</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/292527"
              target="_blank"
              >弱角友崎同学</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/295017"
              target="_blank"
              >&#5074; 回复术士的重来人生</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/301469"
              target="_blank"
              >我立于百万生命之上</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/292970"
              target="_blank"
              >魔女之旅</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/306429"
              target="_blank"
              >成神之日</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/301541"
              target="_blank"
              >总之就是非常可爱</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/289101"
              target="_blank"
              >天官赐福</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/218711"
              target="_blank"
              >DARLING in the FRANXX</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/290426"
              target="_blank"
              >在魔王城说晚安</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a class="watch" href="https://bgm.tv/subject/94244" target="_blank"
              >斩·赤红之瞳！</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/291494"
              target="_blank"
              >鬼灭之刃 无限列车篇</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/185762"
              target="_blank"
              >政宗君的复仇</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/291286"
              target="_blank"
              >姜子牙</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/168891"
              target="_blank"
              >漫画 鬼灭之刃</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/292222"
              target="_blank"
              >魔王学院的不适任者</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/291195"
              target="_blank"
              >&#5074; 彼得·格里尔的贤者时间</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/277954"
              target="_blank"
              >我的青春恋爱物语果然有问题。完</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/296076"
              target="_blank"
              >租借女友</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/29648"
              target="_blank"
              >中二病也要谈恋爱！</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/305515"
              target="_blank"
              >雾山五行</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/181354"
              target="_blank"
              >齐木楠雄的灾难</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/10440"
              target="_blank"
              >我们仍未知道那天所看见的花的名字。</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/179949"
              target="_blank"
              >小林家的龙女仆</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/269090"
              target="_blank"
              >HELLO WORLD</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/265708"
              target="_blank"
              >女高中生的虚度日常</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/262111"
              target="_blank"
              >&#5074; 为什么老师会在这里！？</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/275371"
              target="_blank"
              >只要可爱即使是变态你也会喜欢我吧？</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/280837"
              target="_blank"
              >紫罗兰永恒花园 外传 - 永远与自动手记人偶 -</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/183878"
              target="_blank"
              >紫罗兰永恒花园</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a class="watch" href="https://bgm.tv/subject/7157" target="_blank"
              >&#5074; 缘之空</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/208754"
              target="_blank"
              >徒然 Children</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a class="watch" href="https://bgm.tv/subject/93714" target="_blank"
              >&#5074; 东京喰种 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/110049"
              target="_blank"
              >进击的巨人 无悔的选择</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/55770"
              target="_blank"
              >进击的巨人 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a class="watch" href="https://bgm.tv/subject/54433" target="_blank"
              >我的青春恋爱物语果然有问题 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/200704"
              target="_blank"
              >烟花</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/231261"
              target="_blank"
              >哪吒之魔童降世</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/165829"
              target="_blank"
              >在下坂本，有何贵干？</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/240038"
              target="_blank"
              >青春笨蛋少年不做兔女郎学姐的梦</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/264089"
              target="_blank"
              >转生成为了只有乙女游戏破灭 Flag 的邪恶大小姐</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/274646"
              target="_blank"
              >公主连结 Re:Dive</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/100448"
              target="_blank"
              >&#5074; 和谐</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a class="watch" href="https://bgm.tv/subject/43557" target="_blank"
              >我女友与青梅竹马的惨烈修罗场</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a class="watch" href="https://bgm.tv/subject/41488" target="_blank"
              >樱花庄的宠物女孩</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/117777"
              target="_blank"
              >声之形</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/299202"
              target="_blank"
              >想哭的我戴上了猫的面具</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/269235"
              target="_blank"
              >天气之子</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/160209"
              target="_blank"
              >你的名字。</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a class="watch" href="https://bgm.tv/subject/927" target="_blank"
              >秒速 5 厘米</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/221736"
              target="_blank"
              >我想吃掉你的胰脏</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/231497"
              target="_blank"
              >路人女主的养成方法 Fine</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/100403"
              target="_blank"
              >路人女主的养成方法 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/285776"
              target="_blank"
              >ID:INVADED 异度侵入</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/108438"
              target="_blank"
              >龙珠 Z：复活的弗利萨</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/293049"
              target="_blank"
              >辉夜大小姐想让我告白？～天才们的恋爱头脑战～</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/193282"
              target="_blank"
              >猫咪日常</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/240287"
              target="_blank"
              >龙珠超：布罗利</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/127563"
              target="_blank"
              >一拳超人 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/271145"
              target="_blank"
              >理科生坠入情网，故尝试证明。</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/172498"
              target="_blank"
              >埃罗芒阿老师</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/262943"
              target="_blank"
              >喜欢本大爷的竟然就你一个？</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/266157"
              target="_blank"
              >慎重勇者 ～这个勇者明明超强却过分慎重～</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/238962"
              target="_blank"
              >我，不是说了能力要平均值么！</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/249637"
              target="_blank"
              >天使降临到了我身边</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/239816"
              target="_blank"
              >关于我转生变成史莱姆这档事</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/248175"
              target="_blank"
              >辉夜大小姐想让我告白～天才们的恋爱头脑战～</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/256114"
              target="_blank"
              >五等分的新娘</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/245665"
              target="_blank"
              >鬼灭之刃</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/120187"
              target="_blank"
              >干物妹！小埋 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://bgm.tv/subject/265554"
              target="_blank"
              >白蛇：缘起</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/226256"
              target="_blank"
              >贤者之孙</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/153197"
              target="_blank"
              >斗破苍穹 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/199425"
              target="_blank"
              >斗罗大陆 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/176509"
              target="_blank"
              >武庚纪之逆天之决</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://bgm.tv/subject/127448"
              target="_blank"
              >天行九歌 × 2</a
            >
          </p>

          <h3 id="次元碰撞の叁"><a href="#次元碰撞の叁"></a>次元碰撞の叁</h3>
          <p>
            <a
              class="watch good"
              href="https://movie.douban.com/subject/1303173/"
              target="_blank"
              >甲方乙方</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/1292895/"
              target="_blank"
              >精武英雄</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/1298909/"
              target="_blank"
              >魔鬼代言人</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1308338/"
              target="_blank"
              >蜀山传</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26741632/"
              target="_blank"
              >X 特遣队：全员集结</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/30206311/"
              target="_blank"
              >寂静之地 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/27668250/"
              target="_blank"
              >南方车站的聚会</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/3006772/"
              target="_blank"
              >第九区</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1292226/"
              target="_blank"
              >2001 太空漫游</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/1889243/"
              target="_blank"
              >星际穿越</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26703121/"
              target="_blank"
              >黑白魔女库伊拉</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26825664/"
              target="_blank"
              >修女</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/1296078/"
              target="_blank"
              >断头谷</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/1467044/"
              target="_blank"
              >魔术师</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/25828589/"
              target="_blank"
              >黑寡妇</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/30331432/"
              target="_blank"
              >洛基 第一季</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1652592/"
              target="_blank"
              >阿丽塔：战斗天使</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/27073752/"
              target="_blank"
              >神奇女侠 1984</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/21328095/"
              target="_blank"
              >科洛弗悖论</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/2977957/"
              target="_blank"
              >科洛弗道 10 号</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/2144242/"
              target="_blank"
              >科洛弗档案</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/32493124/"
              target="_blank"
              >悬崖之上</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/27077479/"
              target="_blank"
              >招魂 3：鬼使神差</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1417598/"
              target="_blank"
              >电锯惊魂 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/34954336/"
              target="_blank"
              >砍人快乐</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26389321/"
              target="_blank"
              >X 战警：新变种人</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26613692/"
              target="_blank"
              >哥斯拉大战金刚</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26826330/"
              target="_blank"
              >刺杀小说家</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/30331433/"
              target="_blank"
              >旺达幻视</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26816519/"
              target="_blank"
              >逃避虽可耻但有用</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/34841067/"
              target="_blank"
              >你好，李焕英</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/24697949/"
              target="_blank"
              >半泽直树 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/20452350/"
              target="_blank"
              >9 号秘事 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/35076714/"
              target="_blank"
              >扎克·施奈德版正义联盟</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1966182/"
              target="_blank"
              >霍比特人 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/1291571/"
              target="_blank"
              >指环王 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/34896140/"
              target="_blank"
              >老师，你不知道吗？</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/30122633/"
              target="_blank"
              >快把我哥带走</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/4135710/"
              target="_blank"
              >Hello！树先生</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/4237879/"
              target="_blank"
              >人在囧途</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/3075287/"
              target="_blank"
              >源代码</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1767042/"
              target="_blank"
              >潘神的迷宫</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch cinema"
              href="https://movie.douban.com/subject/27619748/"
              target="_blank"
              >唐人街探案 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26366496/"
              target="_blank"
              >邪不压正</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/1307914/"
              target="_blank"
              >无间道 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/33400537/"
              target="_blank"
              >我是大哥大！！剧场版</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1766086/"
              target="_blank"
              >太阳照常升起</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/3742360/"
              target="_blank"
              >让子弹飞</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/30444960/"
              target="_blank"
              >信条</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1309115/"
              target="_blank"
              >帝国的毁灭</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/30318116/"
              target="_blank"
              >利刃出鞘</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/3569911/"
              target="_blank"
              >全面回忆 2012</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/26754233/"
              target="_blank"
              >八佰</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/30207919/"
              target="_blank"
              >安娜贝尔 3：回家</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/4301224/"
              target="_blank"
              >沉睡魔咒 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/27009869/"
              target="_blank"
              >永生守卫</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/3569910/"
              target="_blank"
              >自杀小队</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/3718279/"
              target="_blank"
              >死侍 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/30160393/"
              target="_blank"
              >猛禽小队和哈莉·奎茵</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/4160540/"
              target="_blank"
              >机械姬</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/25932065/"
              target="_blank"
              >睡眠医生</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/26726261/"
              target="_blank"
              >丛林</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/27202819/"
              target="_blank"
              >反贪风暴 4</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/3543318/"
              target="_blank"
              >傲慢与偏见与僵尸</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1329950/"
              target="_blank"
              >达·芬奇密码</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/3205624/"
              target="_blank"
              >社交网络</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/1293544/"
              target="_blank"
              >沉默的羔羊</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/27060077/"
              target="_blank"
              >绿皮书</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/27611498/"
              target="_blank"
              >王者天下</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1479864/"
              target="_blank"
              >灵幻至尊</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/22265687/"
              target="_blank"
              >星球大战 9：天行者崛起</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26214079/"
              target="_blank"
              >切尔诺贝利·禁区 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/30391241/"
              target="_blank"
              >切尔诺贝利·禁区 电影版</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/30394535/"
              target="_blank"
              >被光抓走的人</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/34925587/"
              target="_blank"
              >这个男人是我人生最大的错误</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/30183785/"
              target="_blank"
              >我是大哥大！！</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/25931446/"
              target="_blank"
              >爱情公寓 第五季</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1294362/"
              target="_blank"
              >星球大战 × 8</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/27073800/"
              target="_blank"
              >德古拉</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch cinema"
              href="https://movie.douban.com/subject/30176393/"
              target="_blank"
              >误杀 2019</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/10485647/"
              target="_blank"
              >X 战警：逆转未来</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/25765735/"
              target="_blank"
              >金刚狼 3：殊死一战</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/25786060/"
              target="_blank"
              >X 战警：天启</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/3168089/"
              target="_blank"
              >X 战警：第一战</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1792928/"
              target="_blank"
              >金刚狼 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1295250/"
              target="_blank"
              >X 战警 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26908002/"
              target="_blank"
              >天赋异禀 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/1292213/"
              target="_blank"
              >西游记大结局之仙履奇缘</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1299398/"
              target="_blank"
              >西游记第一百零一回之月光宝盒</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/20514871/"
              target="_blank"
              >幽冥</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/25741475/"
              target="_blank"
              >康斯坦丁 2014</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/1309021/"
              target="_blank"
              >康斯坦丁 2005</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/25986662/"
              target="_blank"
              >疯狂的外星人</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/4824515/"
              target="_blank"
              >诸神之怒</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/2131654/"
              target="_blank"
              >诸神之战</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1309184/"
              target="_blank"
              >恐怖蜡像馆</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26644205/"
              target="_blank"
              >安娜贝尔 2：诞生</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/27119724/"
              target="_blank"
              >小丑 Joker</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/3604148/"
              target="_blank"
              >小丑回魂 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26997663/"
              target="_blank"
              >寂静之地</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/25853071/"
              target="_blank"
              >庆余年 第一季</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/2244426/"
              target="_blank"
              >雷霆沙赞！</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/3793023/"
              target="_blank"
              >三傻大闹宝莱坞</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/32659890/"
              target="_blank"
              >我和我的祖国</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/26877434/"
              target="_blank"
              >从前有座灵剑山</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/6517421/"
              target="_blank"
              >惊天魔盗团 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/1291843/"
              target="_blank"
              >黑客帝国 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/3541415/"
              target="_blank"
              >盗梦空间</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1432146/"
              target="_blank"
              >钢铁侠 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26931786/"
              target="_blank"
              >蜘蛛侠：英雄远征</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/24753477/"
              target="_blank"
              >蜘蛛侠：英雄归来</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/2129132/"
              target="_blank"
              >超凡蜘蛛侠 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1306612/"
              target="_blank"
              >蜘蛛侠 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/2049435/"
              target="_blank"
              >超人：钢铁之躯</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1297970/"
              target="_blank"
              >蝙蝠侠 × 7</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/1292225/"
              target="_blank"
              >闪灵</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/34809105/"
              target="_blank"
              >小丑 Clown 2019</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26374197/"
              target="_blank"
              >蜘蛛侠：平行宇宙</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch cinema"
              href="https://movie.douban.com/subject/26885074/"
              target="_blank"
              >叶问 4：完结篇</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch cinema"
              href="https://movie.douban.com/subject/27109633/"
              target="_blank"
              >终结者：黑暗命运</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/24879839/"
              target="_blank"
              >道士下山</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/19976810/"
              target="_blank"
              >屌丝男士 × 4</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch cinema"
              href="https://movie.douban.com/subject/30295905/"
              target="_blank"
              >中国机长</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26816076/"
              target="_blank"
              >“大”人物</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/30282387/"
              target="_blank"
              >银河补习班</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/10794042/"
              target="_blank"
              >叶问：终极一战</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/3041806/"
              target="_blank"
              >叶问 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/26796664/"
              target="_blank"
              >叶问外传：张天志</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26667010/"
              target="_blank"
              >X 战警：黑凤凰</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/25882296/"
              target="_blank"
              >狄仁杰之四大天王</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/1295038/"
              target="_blank"
              >哈利·波特 × 8</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26584183/"
              target="_blank"
              >权力的游戏 第八季</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch cinema"
              href="https://movie.douban.com/subject/26100958/"
              target="_blank"
              >复仇者联盟 4：终局之战</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/27663742/"
              target="_blank"
              >老师·好</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/25865815/"
              target="_blank"
              >倚天屠龙记 2019</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/3025375/"
              target="_blank"
              >奇异博士</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/6390825/"
              target="_blank"
              >黑豹</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch cinema"
              href="https://movie.douban.com/subject/26213252/"
              target="_blank"
              >惊奇队长</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26266893/"
              target="_blank"
              >流浪地球</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1297447/"
              target="_blank"
              >倩女幽魂 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26662193/"
              target="_blank"
              >前任 3：再见前任</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/4840388/"
              target="_blank"
              >新喜剧之王</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/30163509/"
              target="_blank"
              >飞驰人生</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch cinema"
              href="https://movie.douban.com/subject/26394152/"
              target="_blank"
              >大黄蜂</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26384741/"
              target="_blank"
              >湮灭</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/3274505/"
              target="_blank"
              >猩球崛起 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/3168101/"
              target="_blank"
              >毒液</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch cinema"
              href="https://movie.douban.com/subject/3878007/"
              target="_blank"
              >海王</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/27102569/"
              target="_blank"
              >悲伤逆流成河</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/27110296/"
              target="_blank"
              >无名之辈</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/27133303/"
              target="_blank"
              >超时空同居</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26985127/"
              target="_blank"
              >一出好戏</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/26752088/"
              target="_blank"
              >我不是药神</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26311973/"
              target="_blank"
              >唐人街探案 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/27038183/"
              target="_blank"
              >羞羞的铁拳</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/27605698/"
              target="_blank"
              >西虹市首富</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/25964071/"
              target="_blank"
              >夏洛特烦恼</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/4864908/"
              target="_blank"
              >影</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/11625097/"
              target="_blank"
              >澳门风云</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/21350556/"
              target="_blank"
              >三少爷的剑</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/24745500/"
              target="_blank"
              >绣春刀 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/26641716/"
              target="_blank"
              >大群 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1306809/"
              target="_blank"
              >生化危机 × 6</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/4920389/"
              target="_blank"
              >头号玩家</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/24404677/"
              target="_blank"
              >超体</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/27180959/"
              target="_blank"
              >猎毒人</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/25884801/"
              target="_blank"
              >记忆大师</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26606743/"
              target="_blank"
              >嫌疑人 X 的献身</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26667056/"
              target="_blank"
              >逆时营救</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26910820/"
              target="_blank"
              >灵魂摆渡·黄泉</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/25800263/"
              target="_blank"
              >灵魂摆渡 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1295644/"
              target="_blank"
              >这个杀手不太冷</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/27135558/"
              target="_blank"
              >哦！我的皇帝陛下 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/26235354/"
              target="_blank"
              >权力的游戏 第七季</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1866479/"
              target="_blank"
              >复仇者联盟 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/25820460/"
              target="_blank"
              >美国队长 3：内战</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1866471/"
              target="_blank"
              >雷神 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26897025/"
              target="_blank"
              >芸汐传</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1794171/"
              target="_blank"
              >变形金刚 × 5</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1300656/"
              target="_blank"
              >终结者 × 5</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch cinema"
              href="https://movie.douban.com/subject/24852545/"
              target="_blank"
              >爱情公寓 电影版</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26035290/"
              target="_blank"
              >悟空传</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/5317291/"
              target="_blank"
              >西游记之大闹天宫</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26363254/"
              target="_blank"
              >战狼 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/25723907/"
              target="_blank"
              >捉妖记</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1304624/"
              target="_blank"
              >旺角卡门</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/6982558/"
              target="_blank"
              >长城</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/10512661/"
              target="_blank"
              >银翼杀手 2049</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/26387939/"
              target="_blank"
              >摔跤吧！爸爸</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1895120/"
              target="_blank"
              >死寂</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/3804629/"
              target="_blank"
              >招魂 × 2</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/25812885/"
              target="_blank"
              >安娜贝尔</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/2132932/"
              target="_blank"
              >星际迷航 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26718838/"
              target="_blank"
              >异星觉醒</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/21324900/"
              target="_blank"
              >降临</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/3793783/"
              target="_blank"
              >地心引力</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1300868/"
              target="_blank"
              >异形 × 4</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/3771562/"
              target="_blank"
              >普罗米修斯</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch good"
              href="https://movie.douban.com/subject/11526817/"
              target="_blank"
              >刺客信条</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1298070/"
              target="_blank"
              >加勒比海盗 × 5</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/4724373/"
              target="_blank"
              >死神来了 5</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1295229/"
              target="_blank"
              >木乃伊 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/1929463/"
              target="_blank"
              >少年派的奇幻漂流</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/19944106/"
              target="_blank"
              >美人鱼</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/24904361/"
              target="_blank"
              >万万没想到 × 3</a
            >
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              class="watch"
              href="https://movie.douban.com/subject/26320029/"
              target="_blank"
              >万万没想到：西游篇</a
            >
          </p>

          <blockquote>
            <p>
              *&nbsp;&nbsp;基本按观看时间顺序排列 <br />
              *&nbsp;&nbsp;<code class="language-text">× N</code>
              表示连续观看多集 <br />
              *&nbsp;&nbsp;<a class="watch">这是看过的</a>&nbsp;/&nbsp;<a
                class="watch cinema"
                >这是影院观看的</a
              >&nbsp;/&nbsp;<a class="watch good">这是好剧推荐</a>
            </p>
          </blockquote>

          <p></p>
        </div>
      </div>
    </div>

    <div class="artalk-cards">
      <details class="admonition admonition-warning">
        <summary>
          <div class="admonition-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="16"
              viewBox="0 0 12 16"
            >
              <path
                fill-rule="evenodd"
                d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
              ></path>
            </svg>
          </div>
          Comment on Monstx's Blog<!-- 评论区施工中... -->
        </summary>
        <p>
          评论发表后 UA 信息、IP
          地址会被记录，分别用于评论区展示和垃圾评论拦截。<br />
          无特殊原因评论不会被删除，你应该懂得如何发表适当的言论并对其负责。
        </p>
      </details>
      <div id="LetsArtalk"></div>
    </div>

    <transition name="fade">
      <div
        id="back-to-top"
        v-scroll-to="{ el: '#app' }"
        v-if="scrolledDist > 400"
      >
        <font-awesome id="back-to-top-icon" :icon="['fas', 'arrow-up']" />
      </div>
    </transition>

    <Author class="post-author" />
  </div>
</template>

<script>
import 'artalk/dist/Artalk.css'
import Author from '~/components/Author.vue'
export default {
  components: {
    Author,
  },
  metaInfo() {
    return {
      title: '观',
      meta: [
        { key: 'og:type', property: 'og:type', content: 'website' },
        {
          key: 'og:title',
          property: 'og:title',
          content: "观 - Monstx's Blog",
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: '异次元什么的实在令人无法自拔',
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: 'https://blog.monsterx.cn/watch',
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: 'https://blog.monsterx.cn/screen.png',
        },
        { key: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { key: 'twitter:site', name: 'twitter:site', content: '@monsterxcn' },
        {
          key: 'twitter:creator',
          name: 'twitter:creator',
          content: '@monsterxcn',
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: "观 - Monstx's Blog",
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: '异次元什么的实在令人无法自拔',
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://blog.monsterx.cn/screen.png',
        },
        {
          key: 'description',
          name: 'description',
          itemprop: 'description',
          content: '异次元什么的实在令人无法自拔',
        },
        { key: 'name', itemprop: 'name', content: "观 - Monstx's Blog" },
        {
          key: 'image',
          itemprop: 'image',
          content: 'https://blog.monsterx.cn/screen.png',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'CollectionPage',
            description: '异次元什么的实在令人无法自拔',
            datePublished: '2020-08-15',
            author: { name: 'monsterxcn' },
            headline: "观 - Monstx's Blog",
            image: 'https://blog.monsterx.cn/screen.png',
          },
        },
      ],
    }
  },
  data() {
    return {
      wow: [
        {
          name: '小林さんちのメイドラゴンS',
          namecn: '小林家的龙女仆 S',
          url: 'https://bgm.tv/subject/274234',
          style:
            'background-image:url(https://rmt.dogedoge.com/fetch/tingle/storage/274234_iZ22k.jpg?w=1280&fmt=webp)',
        },
        {
          name: '死神坊ちゃんと黒メイド',
          namecn: '死神少爷与黑女仆',
          url: 'https://bgm.tv/subject/327055',
          style:
            'background-image:url(https://rmt.dogedoge.com/fetch/tingle/storage/327055_K0hyk.jpg?w=1280&fmt=webp)',
        },
        {
          name: '不滅のあなたへ',
          namecn: '致不灭的你',
          url: 'https://bgm.tv/subject/297954',
          style:
            'background-image:url(https://rmt.dogedoge.com/fetch/tingle/storage/297954_NyA7J.jpg?w=1280&fmt=webp)',
        },
        {
          name: '転生したらスライムだった件 第2期 2',
          namecn: '关于我转生变成史莱姆这档事 第二季 2',
          url: 'https://bgm.tv/subject/302523',
          style:
            'background-image:url(https://rmt.dogedoge.com/fetch/tingle/storage/302523_t8Iir.jpg?w=1280&fmt=webp)',
        },
        {
          name: '乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった…Ｘ',
          namecn: '转生恶役只好拔除破灭旗标…Ｘ',
          url: 'https://bgm.tv/subject/309056',
          style:
            'background-image:url(https://rmt.dogedoge.com/fetch/tingle/storage/309056_s0q03.jpg?w=1280&fmt=webp)',
        },
        {
          name: '100万の命の上に俺は立っている 第2シーズン',
          namecn: '我立于百万生命之上 第二季',
          url: 'https://bgm.tv/subject/322859',
          style:
            'background-image:url(https://rmt.dogedoge.com/fetch/tingle/storage/322859_ZYoxI.jpg?w=1280&fmt=webp)',
        },
        {
          name: '探偵はもう、死んでいる。',
          namecn: '侦探已经死了。',
          url: 'https://bgm.tv/subject/325727',
          style:
            'background-image:url(https://rmt.dogedoge.com/fetch/tingle/storage/325727_U1eEj.jpg?w=1280&fmt=webp)',
        },
        {
          name: '呪術廻戦',
          namecn: '咒术回战漫画',
          url: 'https://bgm.tv/subject/238887',
          style:
            'background-image:url(https://rmt.dogedoge.com/fetch/tingle/storage/238887_mohh8.jpg?w=1280&fmt=webp)',
        },
      ],
      scrolledDist: 0,
    }
  },
  methods: {
    handleScroll() {
      if (process.isClient) {
        this.scrolledDist = window.scrollY
      }
    },
  },
  created() {
    if (process.isClient) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.isClient) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  mounted() {
    // Initialize post comment by Artalk
    if (process.env.NODE_ENV === 'production') {
      let Artalk = require('artalk')
      var artalk = new Artalk({
        el: '#LetsArtalk',
        placeholder: '说点什么 (づ￣ 3￣)づ',
        defaultAvatar: 'mp',
        maxNest: 2,
        pageKey: 'https://blog.monsterx.cn/watch/',
        serverUrl: 'https://lab.monsterx.cn/ArtalkServer',
        readMore: {
          pageSize: 10,
          autoLoad: false,
        },
      })
    }
  },
}
</script>

<style lang="scss">
.artalk-cards {
  background: var(--at-bg-main);
  border-radius: var(--radius);
  max-width: var(--content-width);
  margin: 20px auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  details {
    margin: 0 auto;
    text-align: center;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    font-weight: 600;
    outline: none;
    summary {
      list-style: none;
      margin: 4px auto !important;
      color: var(--cb-admonition-icon-color) !important;
      margin: 2.75rem 0 1rem;
      font-family: var(--title-font-family);
      line-height: 1.5;
      outline: none;
    }
    summary::-webkit-details-marker {
      display: none;
    }
    p {
      color: var(--at-font-color);
      margin-bottom: 0;
    }
  }
  #LetsArtalk {
    padding: 20px;
  }
  @media screen and (max-width: 767.5px) {
    details > p {
      text-align: left;
    }
    #LetsArtalk {
      padding: 0;
    }
  }
}
.watch-collection {
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  margin-left: -20px;
  width: calc(100% + 20px);
}
.watch-item {
  display: block;
  opacity: 1 !important;
  margin-left: 20px;
  margin-bottom: 20px;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease !important;
  border: none !important;
  text-decoration: none !important;
  &:hover {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 767.5px) {
    & {
      width: calc(33.33333333333% - 20px);
    }
  }
  @media screen and (max-width: 450px) {
    & {
      width: calc(50% - 20px);
    }
  }
  @media screen and (min-width: 767.5px) {
    & {
      width: calc(25% - 20px);
    }
  }
}
.watch-item-thumb {
  width: 100%;
  padding-top: 120%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.watch-item-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  overflow: hidden;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  > * {
    display: block;
    text-align: center;
    margin: 0 auto;
    max-width: 100%;
  }
}
.watch-item-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  color: #333;
  &:not(.forei) {
    color: #5e5b5c;
  }
  &.forei {
    font-size: 0.9rem;
    padding-top: 0;
  }
}

body[data-theme='dark'] {
  .watch-item-title.forei {
    color: #5e5b5c;
  }
  .watch-item-title:not(.forei) {
    color: #bbb;
  }
  .watch-item-info {
    color: #b0b0b0;
    background: #222;
  }
}

.post-title {
  padding: var(--space) 0 var(--space);
  text-align: center;
  &__publish-icon {
    vertical-align: top;
    background-color: #f7b955;
    display: inline-block;
    font-size: 14px;
    height: 18px;
    line-height: 18px;
    border-radius: 3px;
    padding: 0 6px;
    color: #fff;
  }
}
.post-meta {
  font-family: var(--base-font-family);
}
.post {
  p span {
    font-size: 0.85rem;
    font-family: var(--monospace-font-family);
    &::after {
      content: ' ';
    }
  }
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    img {
      width: 100%;
    }
    &:empty {
      display: none;
    }
  }
  &__content {
    h2:first-child {
      margin-top: 0;
    }
    // p:first-of-type {
    //   // font-size: 1.2em;
    //   color: var(--title-color);
    // }
    p {
      line-height: 1.8;
    }
    img {
      // width: calc(100% + var(--space) * 2);
      // margin-left: calc(var(--space) * -1);
      display: block;
      max-width: 100%;
      margin: 0 auto;
    }
    a.watch {
      color: var(--body-color);
      box-shadow: inset 0 -6px 0 rgba(26, 188, 156, 0.3);
      transition: box-shadow 0.3s, opacity 0.3s;
      text-decoration: none;
      &.cinema {
        box-shadow: inset 0 -6px 0 rgba(156, 39, 176, 0.3);
      }
      &.cinema:hover {
        box-shadow: inset 0 -20px 0 rgba(156, 39, 176, 0.3);
      }
      &.good {
        box-shadow: inset 0 -6px 0 rgba(255, 87, 34, 0.3);
      }
      &.good:hover {
        box-shadow: inset 0 -20px 0 rgba(255, 87, 34, 0.3);
      }
      &:hover {
        box-shadow: inset 0 -20px 0 rgba(26, 188, 156, 0.3);
      }
    }
  }
}
.footnotes {
  p {
    display: inline;
  }
  hr {
    padding: calc(var(--space) / 2) 0 0 0;
    border: none;
    border-top: 1px solid var(--border-color);
    margin: 0 0;
  }
  .footnote-backref {
    display: inline;
  }
}
.post-comments {
  font-family: var(--base-font-family);
  padding: calc(var(--space) / 2);
  max-width: var(--content-width);
  margin: 0 auto;
}
.post-author {
  margin-top: 100px;
}
#back-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 100;
  cursor: pointer;
}
#back-to-top-icon {
  font-size: 1.1em;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
