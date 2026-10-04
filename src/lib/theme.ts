"use client";
import { useSyncExternalStore } from "react";
const key='atar-theme';const event='atar-theme-change';
function snapshot(){try{return localStorage.getItem(key)==='light';}catch{return false;}}
function subscribe(callback:()=>void){window.addEventListener('storage',callback);window.addEventListener(event,callback);return()=>{window.removeEventListener('storage',callback);window.removeEventListener(event,callback);};}
export function useTheme(){const light=useSyncExternalStore(subscribe,snapshot,()=>false);function toggle(){try{localStorage.setItem(key,light?'dark':'light');}catch{}window.dispatchEvent(new Event(event));}return{light,toggle};}
