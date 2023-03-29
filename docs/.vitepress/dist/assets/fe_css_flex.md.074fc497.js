import{_ as e,c as a,o as s,a as t}from"./app.01cb2cff.js";const b=JSON.parse('{"title":"flex 布局","description":"","frontmatter":{},"headers":[{"level":2,"title":"flex 布局原理","slug":"flex-布局原理","link":"#flex-布局原理","children":[]},{"level":2,"title":"flex 布局父盒子常见属性","slug":"flex-布局父盒子常见属性","link":"#flex-布局父盒子常见属性","children":[{"level":3,"title":"flex-direction","slug":"flex-direction","link":"#flex-direction","children":[]},{"level":3,"title":"justify-content","slug":"justify-content","link":"#justify-content","children":[]},{"level":3,"title":"flex-wrap","slug":"flex-wrap","link":"#flex-wrap","children":[]},{"level":3,"title":"align-items","slug":"align-items","link":"#align-items","children":[]},{"level":3,"title":"align-content","slug":"align-content","link":"#align-content","children":[]},{"level":3,"title":"flex-flow","slug":"flex-flow","link":"#flex-flow","children":[]}]},{"level":2,"title":"flex 布局子盒子常见属性","slug":"flex-布局子盒子常见属性","link":"#flex-布局子盒子常见属性","children":[{"level":3,"title":"flex","slug":"flex","link":"#flex","children":[]},{"level":3,"title":"align-self","slug":"align-self","link":"#align-self","children":[]},{"level":3,"title":"order","slug":"order","link":"#order","children":[]}]}],"relativePath":"fe/css/flex.md","lastUpdated":1678519968000}'),l={name:"fe/css/flex.md"},n=t(`<h1 id="flex-布局" tabindex="-1">flex 布局 <a class="header-anchor" href="#flex-布局" aria-hidden="true">#</a></h1><h2 id="flex-布局原理" tabindex="-1">flex 布局原理 <a class="header-anchor" href="#flex-布局原理" aria-hidden="true">#</a></h2><p>全称 flexible box，弹性布局。</p><p>如何开启：为元素添加 <code>display: flex</code>。</p><p>开启 flex 布局的元素，称为 flex 容器（flex container），其子元素成为容器成员，称为 flex 项目。</p><p>flex 布局原理：通过给父盒子添加 <code>display: flex</code>，来控制盒子的位置和排列方式。</p><h2 id="flex-布局父盒子常见属性" tabindex="-1">flex 布局父盒子常见属性 <a class="header-anchor" href="#flex-布局父盒子常见属性" aria-hidden="true">#</a></h2><h3 id="flex-direction" tabindex="-1"><code>flex-direction</code> <a class="header-anchor" href="#flex-direction" aria-hidden="true">#</a></h3><p>设置主轴方向</p><table><thead><tr><th>属性值</th><th>含义</th></tr></thead><tbody><tr><td>row</td><td>默认值，从左到右</td></tr><tr><td>row-reverse</td><td>从右到左</td></tr><tr><td>column</td><td>从上到下</td></tr><tr><td>column-reverse</td><td>从下到上</td></tr></tbody></table><h3 id="justify-content" tabindex="-1"><code>justify-content</code> <a class="header-anchor" href="#justify-content" aria-hidden="true">#</a></h3><p>设置主轴子元素排列方式</p><table><thead><tr><th>属性值</th><th>含义</th></tr></thead><tbody><tr><td>flex-start</td><td>默认值，从头开始</td></tr><tr><td>flex-end</td><td>从尾部开始</td></tr><tr><td>center</td><td>居中</td></tr><tr><td>space-around</td><td>平分剩余空间</td></tr><tr><td>space-between</td><td>两侧子元素贴边，再平分剩余空间</td></tr></tbody></table><h3 id="flex-wrap" tabindex="-1"><code>flex-wrap</code> <a class="header-anchor" href="#flex-wrap" aria-hidden="true">#</a></h3><p>设置子元素是否换行</p><p>默认不换行，若子盒子宽度和大于父盒子，则会收缩！</p><table><thead><tr><th>属性值</th><th>含义</th></tr></thead><tbody><tr><td>wrap</td><td>换行</td></tr><tr><td>nowrap</td><td>默认值，不换行</td></tr></tbody></table><h3 id="align-items" tabindex="-1"><code>align-items</code> <a class="header-anchor" href="#align-items" aria-hidden="true">#</a></h3><p>设置子元素在侧轴上的排列方式（子元素单行）</p><table><thead><tr><th>属性值</th><th>含义</th></tr></thead><tbody><tr><td>flex-start</td><td>侧轴头部开始</td></tr><tr><td>flex-end</td><td>侧轴尾部开始</td></tr><tr><td>center</td><td>侧轴居中</td></tr><tr><td>stretch</td><td>默认值，拉伸（拉满整个侧轴），若子元素设置了高度则失效</td></tr></tbody></table><h3 id="align-content" tabindex="-1"><code>align-content</code> <a class="header-anchor" href="#align-content" aria-hidden="true">#</a></h3><p>设置子元素在侧轴上的排列方式（子元素多行）</p><table><thead><tr><th>属性值</th><th>含义</th></tr></thead><tbody><tr><td>flex-start</td><td>默认值，侧轴头部开始</td></tr><tr><td>flex-end</td><td>侧轴尾部开始</td></tr><tr><td>center</td><td>侧轴居中</td></tr><tr><td>stretch</td><td>子元素高度平分父元素高度（需要子元素没有设置高度）</td></tr><tr><td>space-around</td><td>平分侧轴空间</td></tr><tr><td>space-between</td><td>侧轴两侧贴边再平分剩余空间</td></tr></tbody></table><h3 id="flex-flow" tabindex="-1"><code>flex-flow</code> <a class="header-anchor" href="#flex-flow" aria-hidden="true">#</a></h3><p><code>flex-direction</code> 与 <code>flex-wrap</code> 属性的复合写法</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">son </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex-flow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> row wrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="flex-布局子盒子常见属性" tabindex="-1">flex 布局子盒子常见属性 <a class="header-anchor" href="#flex-布局子盒子常见属性" aria-hidden="true">#</a></h2><h3 id="flex" tabindex="-1"><code>flex</code> <a class="header-anchor" href="#flex" aria-hidden="true">#</a></h3><p><code>flex</code> 属性其实是 <code>flex-grow</code>、<code>flex-shrink</code>、<code>flex-basis</code> 三个属性的简写。</p><p><code>flex-grow</code> 属性值为一个数字，用于设置弹性盒子的扩展比例，即盒子占剩余空间的份数，默认为 0。常见的 <code>flex: 1</code> 是 <code>flex-grow</code> 为 1。</p><p><code>flex-shrink</code> 属性值为一个数字，用于设置盒子的收缩比例，当子盒子的宽度之和大于父盒子时才会收缩。</p><p><code>flex-basis</code> 用于设置子盒子的初始长度。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">span</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">son</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">33.33%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="align-self" tabindex="-1"><code>align-self</code> <a class="header-anchor" href="#align-self" aria-hidden="true">#</a></h3><p>单独设置某个子盒子在侧轴的排列方式，它会覆盖 <code>align-items</code> 属性。默认值为 <code>auto</code>，表示继承父盒子的 <code>align-items</code> 属性，其余属性值与 <code>align-items</code> 相同。</p><h3 id="order" tabindex="-1"><code>order</code> <a class="header-anchor" href="#order" aria-hidden="true">#</a></h3><p>定义子盒子在<strong>主轴</strong>上的排列顺序。默认值为 0，值越小越靠前，可以为负数。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">son</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">order</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,38),d=[n];function r(o,c,p,i,h,f){return s(),a("div",null,d)}const u=e(l,[["render",r]]);export{b as __pageData,u as default};
