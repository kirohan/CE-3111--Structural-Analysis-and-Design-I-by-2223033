
(function(){
 const D=window.CE3111_DATA||{};
 const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
 const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
 // theme
 const root=document.documentElement, saved=localStorage.getItem('ce3111-theme');
 if(saved) root.dataset.theme=saved;
 const themeBtn=$('#themeToggle');
 if(themeBtn){themeBtn.onclick=()=>{const next=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=next;localStorage.setItem('ce3111-theme',next);themeBtn.textContent=next==='dark'?'☀':'◐';}; themeBtn.textContent=root.dataset.theme==='dark'?'☀':'◐';}
 // mobile nav
 const menu=$('#menuToggle'), nav=$('#mainNav'); if(menu&&nav)menu.onclick=()=>nav.classList.toggle('open');
 // active nav
 const file=location.pathname.split('/').pop()||'index.html'; $$('.nav a').forEach(a=>{if((a.getAttribute('href')||'').split('#')[0]===file)a.classList.add('active')});
 // back top
 const bt=$('#backTop'); if(bt){addEventListener('scroll',()=>bt.classList.toggle('show',scrollY>500));bt.onclick=()=>scrollTo({top:0,behavior:'smooth'})}
 // progress
 const key='ce3111-progress-v1'; let prog={}; try{prog=JSON.parse(localStorage.getItem(key)||'{}')}catch(e){}
 function updateProgress(){const boxes=$$('[data-progress-id]');boxes.forEach(b=>b.checked=!!prog[b.dataset.progressId]);const setDone=[1,2,3,4,5,6,7,8].filter(n=>prog['set-'+n]).length;$$('[data-progress-count]').forEach(e=>e.textContent=setDone+'/8');$$('[data-progress-percent]').forEach(e=>e.textContent=Math.round(setDone/8*100)+'%');$$('.progress-ring').forEach(e=>e.style.setProperty('--p',(setDone/8*100)+'%'));$$('.progress-bar span').forEach(e=>e.style.width=(setDone/8*100)+'%')}
 document.addEventListener('change',e=>{if(e.target.matches('[data-progress-id]')){prog[e.target.dataset.progressId]=e.target.checked;localStorage.setItem(key,JSON.stringify(prog));updateProgress()}});
 // render set cards
 function setCard(s){return `<article class="card set-card"><div class="set-num">Section ${s.section} · Set ${s.n}</div><h3>${esc(s.title)}</h3><div class="meta"><span class="chip core">Annual Core</span><span class="chip">${esc(s.tag)}</span></div><p>${esc(s.summary)}</p><label class="check"><input type="checkbox" data-progress-id="set-${s.n}"><span>Mark Set ${s.n} exam-ready</span></label><div class="actions"><a class="btn" href="class-notes.html#set-${s.n}">Study note</a><a class="btn" href="qb-solutions.html#set-${s.n}">Solution path</a></div></article>`}
 $$('[data-set-grid]').forEach(el=>{let section=el.dataset.setGrid; el.innerHTML=(D.sets||[]).filter(s=>s.section===section).map(setCard).join('')});
 // detailed notes
 function tableRows(arr){return arr.map(r=>`<tr><td>${esc(r[0])}</td><td class="formula">${esc(r[1])}</td></tr>`).join('')}
 function detail(s){return `<section class="set-detail" id="set-${s.n}"><div class="set-detail-head"><div class="set-num">Section ${s.section} · Set ${s.n}</div><h2>${esc(s.title)}</h2><div class="meta"><span class="chip core">${esc(s.frequency)}</span><span class="chip">${esc(s.tag)}</span></div><p class="muted">${esc(s.summary)}</p></div><div class="set-detail-body"><div class="cols"><div><div class="subcard"><h3>Learning targets</h3><ul class="compact-list">${s.goals.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="subcard"><h3>Master formula table</h3><div class="table-scroll"><table class="formula-table"><thead><tr><th>Use</th><th>Formula / rule</th></tr></thead><tbody>${tableRows(s.formulas)}</tbody></table></div></div><div class="subcard"><h3>Theory essentials</h3><ul class="compact-list">${s.theory.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></div><div><div class="subcard"><h3>Shortcut / memory technique</h3><ul class="compact-list">${s.shortcuts.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="subcard"><h3>Common exam traps</h3><ul class="compact-list">${s.traps.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="subcard"><h3>Matching QB pattern</h3><div class="year-grid">${s.years.map(x=>`<span class="year-pill">${esc(x)}</span>`).join('')}</div></div><label class="check"><input type="checkbox" data-progress-id="set-${s.n}"><span><b>Set ${s.n} checkpoint:</b> I can solve this family without looking at the note.</span></label></div></div><div class="actions"><a class="btn primary" href="qb-solutions.html#set-${s.n}">Open solution workflow</a><a class="btn" href="docs/question-bank-solution-complete.pdf#page=${s.pdf_page}" target="_blank">Worked archive ↗</a></div></div></section>`}
 const notes=$('#classNotesContainer'); if(notes) notes.innerHTML=(D.sets||[]).map(detail).join('');
 // solutions
 function solDetail(s){return `<section class="set-detail" id="set-${s.n}"><div class="set-detail-head"><div class="set-num">Section ${s.section} · Set ${s.n}</div><h2>${esc(s.title)}</h2><p class="muted">Most-repeated pattern first. Use this as the method skeleton, then open the worked archive for full year-specific calculations.</p></div><div class="set-detail-body"><div class="cols"><div><div class="subcard"><h3>Master solving sequence</h3><ol class="step-list">${s.steps.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></div></div><div><div class="subcard"><h3>Formula checkpoint</h3><table class="formula-table"><tbody>${tableRows(s.formulas.slice(0,6))}</tbody></table></div><div class="subcard"><h3>Worked resources</h3>${s.docs.map(d=>`<a class="btn" style="margin:4px 4px 4px 0" href="${d[1]}" target="_blank">${esc(d[0])} ↗</a>`).join('')}<a class="btn primary" style="margin:4px" href="docs/question-bank-solution-complete.pdf#page=${s.pdf_page}" target="_blank">Open complete Set ${s.n} worked pages ↗</a></div></div></div><div class="notice warn"><strong>Do not skip explanation.</strong> In the exam, show the FBD/assumptions, governing equations and intermediate results. A final numerical answer without method is not treated as a complete structural-analysis solution.</div></div></section>`}
 const sols=$('#solutionsContainer'); if(sols) sols.innerHTML=(D.sets||[]).map(solDetail).join('');
 // theory
 const theory=$('#theoryTable'); if(theory) theory.innerHTML=D.theoryQuestions.map((q,i)=>`<tr><td>${i+1}</td><td><span class="priority ${q[0]==='Very High'?'vh':q[0]==='High'?'h':q[0]==='Recent'?'r':''}">${esc(q[0])}</span></td><td>${esc(q[1])}</td></tr>`).join('');
 const proofs=$('#proofList'); if(proofs) proofs.innerHTML=D.proofs.map((p,i)=>`<article class="card"><div class="kicker">${esc(p[0])}</div><h3>${i+1}. ${esc(p[1])}</h3><p>${esc(p[2])}</p></article>`).join('');
 // backlog
 const btb=$('#backlogTable'); if(btb) btb.innerHTML=D.backlog.map(r=>`<tr><td><b>${r.printed}</b></td><td>${r.q}</td><td>Set ${r.set}</td><td>${esc(r.topic)}</td><td>${esc(r.note)}</td></tr>`).join('');
 // downloads
 $$('[data-download-grid]').forEach(el=>el.innerHTML=D.downloads.map(d=>`<article class="card download-card"><div class="kicker">PDF Resource</div><h3>${esc(d[0])}</h3><p>${esc(d[2])}</p><a class="btn" href="${d[1]}" target="_blank">Open / download ↗</a></article>`).join(''));
 // Search
 const search=$('#siteSearch'), results=$('#searchResults');
 const idx=[]; (D.sets||[]).forEach(s=>{idx.push({title:`Set ${s.n}: ${s.title}`,url:`class-notes.html#set-${s.n}`,text:[s.summary,...s.goals,...s.theory,...s.years].join(' ')});idx.push({title:`Set ${s.n} Solution: ${s.title}`,url:`qb-solutions.html#set-${s.n}`,text:s.steps.join(' ')})});
 idx.push({title:'Question Bank Analysis',url:'qb-analysis.html',text:'set distribution annual core theory proof repeated questions 2016 2024'});idx.push({title:'Backlog Preparation',url:'backlog.html',text:'2024 backlog reversed section order three of four strategy'});idx.push({title:'Formula + Theory + Proof Hub',url:'formula-hub.html',text:'formula theory derivation proof unit load three moment cable wind earthquake'});
 if(search&&results){const run=()=>{const q=search.value.trim().toLowerCase();if(q.length<2){results.classList.remove('open');return}const hits=idx.map(x=>({...x,score:(x.title+' '+x.text).toLowerCase().split(q).length-1})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,8);results.innerHTML=hits.length?hits.map(h=>`<a class="search-hit" href="${h.url}"><b>${esc(h.title)}</b><small>${esc(h.text.slice(0,105))}…</small></a>`).join(''):'<div class="search-hit muted">No match. Try “arch”, “ILD”, “cable”, “wind”, or “proof”.</div>';results.classList.add('open')};search.addEventListener('input',run);search.addEventListener('focus',run);document.addEventListener('click',e=>{if(!e.target.closest('.search-wrap'))results.classList.remove('open')})}
 updateProgress();
})();
