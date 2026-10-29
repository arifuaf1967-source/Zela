"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const nav = [{href:"/", label:"Home"},{href:"/services",label:"Services"},{href:"/work",label:"Work"},{href:"/about",label:"About"}];
export default function Navigation(){
  const path=usePathname(); const [open,setOpen]=useState(false);
  return <header className="site-header"><div className="container nav-inner"><Link href="/" aria-label="Zela Boost homepage" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark">z<span>.</span></span><span className="brand-name">ZELA<span>BOOST</span><small>CREATIVE GROWTH STUDIO</small></span></Link>
  <nav className={open?"nav-links open":"nav-links"} aria-label="Primary navigation">{nav.map(item=><Link key={item.href} href={item.href} className={path===item.href?"active":""} onClick={()=>setOpen(false)}>{item.label}</Link>)}<Link className="mobile-contact" href="/contact" onClick={()=>setOpen(false)}>Start a Project ↗</Link></nav>
  <Link className="btn btn-small nav-cta" href="/contact">Let's talk <span>↗</span></Link><button aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)} className="menu-toggle"><span/><span/></button></div></header>
}
