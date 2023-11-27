/// <reference lib="dom" />
import { estimate_read_time_html__new } from '@btakita/domain--all--blog'
import { has_dom, id__dom__handler_ } from '@ctx-core/dom'
export const Main_post__onbind = id__dom__handler_(
	'Main_post__onbind',
	(Main_post:HTMLDivElement)=>{
		browser__Main_post__onbind(Main_post)
	})
function browser__Main_post__onbind(Main_post:HTMLDivElement) {
	if (!has_dom) return
	const estimate_read_time_E =
		Main_post.querySelector<HTMLDivElement>('.estimate_read_time')
	if (!estimate_read_time_E || !estimate_read_time_E.classList.contains('hidden')) return
	const article_E = Main_post.querySelector<HTMLDivElement>('article')
	if (!article_E) return
	estimate_read_time_E.querySelector<HTMLSpanElement>('.estimate_read_time_val')!.innerHTML =
		estimate_read_time_html__new(article_E.innerText)
	estimate_read_time_E.classList.remove('hidden')
}