"use client";
import {useState} from "react";
import {projects,categories} from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";
export default function WorkGrid(){const [active,setActive]=useState("All Projects");const visible=projects.filter(p=>active==="All Projects"||p.category===active);return <><div className="filter-row" aria-label="Filter projects">{categories.map(c=><button className={active===c?"filter active":"filter"} onClick={()=>setActive(c)} key={c}>{c}</button>)}</div><div className="projects-grid">{visible.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div></>}
