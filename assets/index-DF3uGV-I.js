var x0=Object.defineProperty;var y0=(r,e,t)=>e in r?x0(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ze=(r,e,t)=>y0(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="177",S0=0,wd=1,M0=2,ng=1,T0=2,nr=3,qr=0,zn=1,Ui=2,Gt=0,fr=1,xh=2,bd=3,Ad=4,E0=5,or=100,w0=101,b0=102,A0=103,R0=104,C0=200,P0=201,D0=202,L0=203,ba=204,Aa=205,U0=206,I0=207,N0=208,O0=209,F0=210,z0=211,B0=212,k0=213,V0=214,yh=0,Sh=1,Mh=2,Mo=3,Th=4,Eh=5,wh=6,bh=7,ig=0,H0=1,G0=2,Hr=0,W0=1,X0=2,q0=3,Y0=4,$0=5,J0=6,K0=7,rg=300,To=301,Eo=302,wc=303,Ah=304,Xc=306,bc=1e3,xn=1001,Rh=1002,yt=1003,Z0=1004,ja=1005,sn=1006,iu=1007,Ir=1008,gr=1009,sg=1010,og=1011,wo=1012,If=1013,As=1014,vi=1015,yn=1016,Nf=1017,Of=1018,Ra=1020,ag=35902,lg=1021,cg=1022,xi=1023,Ca=1026,Pa=1027,ug=1028,Ff=1029,hg=1030,zf=1031,Bf=1033,uc=33776,hc=33777,fc=33778,dc=33779,Ch=35840,Ph=35841,Dh=35842,Lh=35843,Uh=36196,Ih=37492,Nh=37496,Oh=37808,Fh=37809,zh=37810,Bh=37811,kh=37812,Vh=37813,Hh=37814,Gh=37815,Wh=37816,Xh=37817,qh=37818,Yh=37819,$h=37820,Jh=37821,pc=36492,Kh=36494,Zh=36495,fg=36283,jh=36284,Qh=36285,ef=36286,j0=3200,Q0=3201,kf=0,ev=1,Ur="",pi="srgb",Rs="srgb-linear",Ac="linear",St="srgb",Os=7680,Rd=519,tv=512,nv=513,iv=514,dg=515,rv=516,sv=517,ov=518,av=519,Cd=35044,Pd="300 es",ur=2e3,Rc=2001;class No{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=Math.PI/180,tf=180/Math.PI;function qa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function ct(r,e,t){return Math.max(e,Math.min(t,r))}function lv(r,e){return(r%e+e)%e}function su(r,e,t){return(1-t)*r+t*e}function Vo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Ya=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const w=Math.sqrt(S),T=Math.atan2(w,p*M);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const v=a*M;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$=class pg{constructor(e=0,t=0,n=0){pg.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ou.copy(this).projectOnVector(e),this.sub(ou)}reflect(e){return this.sub(ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const ou=new $,Dd=new Ya;let it=class mg{constructor(e,t,n,i,s,o,a,l,c){mg.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],S=i[4],v=i[7],w=i[2],T=i[5],E=i[8];return s[0]=o*_+a*M+l*w,s[3]=o*m+a*S+l*T,s[6]=o*p+a*v+l*E,s[1]=c*_+u*M+h*w,s[4]=c*m+u*S+h*T,s[7]=c*p+u*v+h*E,s[2]=f*_+d*M+g*w,s[5]=f*m+d*S+g*T,s[8]=f*p+d*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(au.makeScale(e,t)),this}rotate(e){return this.premultiply(au.makeRotation(-e)),this}translate(e,t){return this.premultiply(au.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const au=new it;function gg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Da(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function cv(){const r=Da("canvas");return r.style.display="block",r}const Ld={};function po(r){r in Ld||(Ld[r]=!0,console.warn(r))}function uv(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function hv(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fv(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ud=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Id=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dv(){const r={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(i.r=dr(i.r),i.g=dr(i.g),i.b=dr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(i.r=mo(i.r),i.g=mo(i.g),i.b=mo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ur?Ac:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return po("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return po("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Rs]:{primaries:e,whitePoint:n,transfer:Ac,toXYZ:Ud,fromXYZ:Id,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:n,transfer:St,toXYZ:Ud,fromXYZ:Id,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),r}const ft=dv();function dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function mo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Fs;class pv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fs===void 0&&(Fs=Da("canvas")),Fs.width=e.width,Fs.height=e.height;const i=Fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Da("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=dr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dr(t[n]/255)*255):t[n]=dr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mv=0;class Vf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=qa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(lu(i[o].image)):s.push(lu(i[o]))}else s=lu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function lu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gv=0;const cu=new $;class un extends No{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,n=xn,i=xn,s=sn,o=Ir,a=xi,l=gr,c=un.DEFAULT_ANISOTROPY,u=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=qa(),this.name="",this.source=new Vf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cu).x}get height(){return this.source.getSize(cu).y}get depth(){return this.source.getSize(cu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bc:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bc:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=rg;un.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,i=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(d+1)/2,w=(p+1)/2,T=(u+f)/4,E=(h+_)/4,b=(g+m)/4;return S>v&&S>w?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=T/n,s=E/n):v>w?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=b/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=E/s,i=b/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _v extends No{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new un(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Vf(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends _v{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _g extends un{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vv extends un{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $a{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ri):Ri.fromBufferAttribute(s,o),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),el.subVectors(this.max,Ho),zs.subVectors(e.a,Ho),Bs.subVectors(e.b,Ho),ks.subVectors(e.c,Ho),xr.subVectors(Bs,zs),yr.subVectors(ks,Bs),jr.subVectors(zs,ks);let t=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-jr.z,jr.y,xr.z,0,-xr.x,yr.z,0,-yr.x,jr.z,0,-jr.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-jr.y,jr.x,0];return!uu(t,zs,Bs,ks,el)||(t=[1,0,0,0,1,0,0,0,1],!uu(t,zs,Bs,ks,el))?!1:(tl.crossVectors(xr,yr),t=[tl.x,tl.y,tl.z],uu(t,zs,Bs,ks,el))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qi=[new $,new $,new $,new $,new $,new $,new $,new $],Ri=new $,Qa=new $a,zs=new $,Bs=new $,ks=new $,xr=new $,yr=new $,jr=new $,Ho=new $,el=new $,tl=new $,Qr=new $;function uu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Qr.fromArray(r,s);const a=i.x*Math.abs(Qr.x)+i.y*Math.abs(Qr.y)+i.z*Math.abs(Qr.z),l=e.dot(Qr),c=t.dot(Qr),u=n.dot(Qr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const xv=new $a,Go=new $,hu=new $;class qc{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const t=Go.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Go,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(hu)),this.expandByPoint(Go.copy(e.center).sub(hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yi=new $,fu=new $,nl=new $,Sr=new $,du=new $,il=new $,pu=new $;let vg=class{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fu.copy(e).add(t).multiplyScalar(.5),nl.copy(t).sub(e).normalize(),Sr.copy(this.origin).sub(fu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(nl),a=Sr.dot(this.direction),l=-Sr.dot(nl),c=Sr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(fu).addScaledVector(nl,f),d}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);const n=Yi.dot(this.direction),i=Yi.dot(Yi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,n,i,s){du.subVectors(t,e),il.subVectors(n,e),pu.crossVectors(du,il);let o=this.direction.dot(pu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sr.subVectors(this.origin,e);const l=a*this.direction.dot(il.crossVectors(Sr,il));if(l<0)return null;const c=a*this.direction.dot(du.cross(Sr));if(c<0||l+c>o)return null;const u=-a*Sr.dot(pu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class nf{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){nf.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nf().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Vs.setFromMatrixColumn(e,0).length(),s=1/Vs.setFromMatrixColumn(e,1).length(),o=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yv,e,Sv)}lookAt(e,t,n){const i=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Mr.crossVectors(n,$n),Mr.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Mr.crossVectors(n,$n)),Mr.normalize(),rl.crossVectors($n,Mr),i[0]=Mr.x,i[4]=rl.x,i[8]=$n.x,i[1]=Mr.y,i[5]=rl.y,i[9]=$n.y,i[2]=Mr.z,i[6]=rl.z,i[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],S=n[7],v=n[11],w=n[15],T=i[0],E=i[4],b=i[8],x=i[12],y=i[1],C=i[5],L=i[9],N=i[13],F=i[2],z=i[6],O=i[10],H=i[14],V=i[3],j=i[7],P=i[11],te=i[15];return s[0]=o*T+a*y+l*F+c*V,s[4]=o*E+a*C+l*z+c*j,s[8]=o*b+a*L+l*O+c*P,s[12]=o*x+a*N+l*H+c*te,s[1]=u*T+h*y+f*F+d*V,s[5]=u*E+h*C+f*z+d*j,s[9]=u*b+h*L+f*O+d*P,s[13]=u*x+h*N+f*H+d*te,s[2]=g*T+_*y+m*F+p*V,s[6]=g*E+_*C+m*z+p*j,s[10]=g*b+_*L+m*O+p*P,s[14]=g*x+_*N+m*H+p*te,s[3]=M*T+S*y+v*F+w*V,s[7]=M*E+S*C+v*z+w*j,s[11]=M*b+S*L+v*O+w*P,s[15]=M*x+S*N+v*H+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,S=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,v=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,w=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,T=t*M+n*S+i*v+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=M*E,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*E,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*E,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*E,e[4]=S*E,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*E,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*E,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*E,e[8]=v*E,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*E,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*E,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*E,e[12]=w*E,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*E,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,M=l*c,S=l*u,v=l*h,w=n.x,T=n.y,E=n.z;return i[0]=(1-(_+p))*w,i[1]=(d+v)*w,i[2]=(g-S)*w,i[3]=0,i[4]=(d-v)*T,i[5]=(1-(f+p))*T,i[6]=(m+M)*T,i[7]=0,i[8]=(g+S)*E,i[9]=(m-M)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Vs.set(i[0],i[1],i[2]).length();const o=Vs.set(i[4],i[5],i[6]).length(),a=Vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ci.copy(this);const c=1/s,u=1/o,h=1/a;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=u,Ci.elements[5]*=u,Ci.elements[6]*=u,Ci.elements[8]*=h,Ci.elements[9]*=h,Ci.elements[10]*=h,t.setFromRotationMatrix(Ci),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=ur){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(a===ur)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Rc)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=ur){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let g,_;if(a===ur)g=(o+s)*h,_=-2*h;else if(a===Rc)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};const Vs=new $,Ci=new qt,yv=new $(0,0,0),Sv=new $(1,1,1),Mr=new $,rl=new $,$n=new $,Nd=new qt,Od=new Ya;class Wi{constructor(e=0,t=0,n=0,i=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Od.setFromEuler(this),this.setFromQuaternion(Od,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class xg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mv=0;const Fd=new $,Hs=new Ya,$i=new qt,sl=new $,Wo=new $,Tv=new $,Ev=new Ya,zd=new $(1,0,0),Bd=new $(0,1,0),kd=new $(0,0,1),Vd={type:"added"},wv={type:"removed"},Gs={type:"childadded",child:null},mu={type:"childremoved",child:null};class Ln extends No{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new $,t=new Wi,n=new Ya,i=new $(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qt},normalMatrix:{value:new it}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(zd,e)}rotateY(e){return this.rotateOnAxis(Bd,e)}rotateZ(e){return this.rotateOnAxis(kd,e)}translateOnAxis(e,t){return Fd.copy(e).applyQuaternion(this.quaternion),this.position.add(Fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zd,e)}translateY(e){return this.translateOnAxis(Bd,e)}translateZ(e){return this.translateOnAxis(kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sl.copy(e):sl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Wo,sl,this.up):$i.lookAt(sl,Wo,this.up),this.quaternion.setFromRotationMatrix($i),i&&($i.extractRotation(i.matrixWorld),Hs.setFromRotationMatrix($i),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vd),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wv),mu.child=e,this.dispatchEvent(mu),mu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vd),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,Tv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,Ev,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ln.DEFAULT_UP=new $(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new $,Ji=new $,gu=new $,Ki=new $,Ws=new $,Xs=new $,Hd=new $,_u=new $,vu=new $,xu=new $,yu=new Dt,Su=new Dt,Mu=new Dt;class Ii{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pi.subVectors(e,t),i.cross(Pi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Pi.subVectors(i,t),Ji.subVectors(n,t),gu.subVectors(e,t);const o=Pi.dot(Pi),a=Pi.dot(Ji),l=Pi.dot(gu),c=Ji.dot(Ji),u=Ji.dot(gu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ki.x),l.addScaledVector(o,Ki.y),l.addScaledVector(a,Ki.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return yu.setScalar(0),Su.setScalar(0),Mu.setScalar(0),yu.fromBufferAttribute(e,t),Su.fromBufferAttribute(e,n),Mu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(yu,s.x),o.addScaledVector(Su,s.y),o.addScaledVector(Mu,s.z),o}static isFrontFacing(e,t,n,i){return Pi.subVectors(n,t),Ji.subVectors(e,t),Pi.cross(Ji).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Pi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ii.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ws.subVectors(i,n),Xs.subVectors(s,n),_u.subVectors(e,n);const l=Ws.dot(_u),c=Xs.dot(_u);if(l<=0&&c<=0)return t.copy(n);vu.subVectors(e,i);const u=Ws.dot(vu),h=Xs.dot(vu);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ws,o);xu.subVectors(e,s);const d=Ws.dot(xu),g=Xs.dot(xu);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Xs,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Hd.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Hd,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},ol={h:0,s:0,l:0};function Tu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=lv(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Tu(o,s,e+1/3),this.g=Tu(o,s,e),this.b=Tu(o,s,e-1/3)}return ft.colorSpaceToWorking(this,i),this}setStyle(e,t=pi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){const n=yg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return ft.workingToColorSpace(dn.copy(this),e),Math.round(ct(dn.r*255,0,255))*65536+Math.round(ct(dn.g*255,0,255))*256+Math.round(ct(dn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,s=dn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=pi){ft.workingToColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,i=dn.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(ol);const n=su(Tr.h,ol.h,t),i=su(Tr.s,ol.s,t),s=su(Tr.l,ol.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new et;et.NAMES=yg;let bv=0;class Us extends No{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=qa(),this.name="",this.type="Material",this.blending=fr,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=Aa,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(n.blending=this.blending),this.side!==qr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ba&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class La extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=ig,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ar=Av();function Av(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Rv(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=ct(r,-65504,65504),ar.floatView[0]=r;const e=ar.uint32View[0],t=e>>23&511;return ar.baseTable[t]+((e&8388607)>>ar.shiftTable[t])}function Cv(r){const e=r>>10;return ar.uint32View[0]=ar.mantissaTable[ar.offsetTable[e]+(r&1023)]+ar.exponentTable[e],ar.floatView[0]}class al{static toHalfFloat(e){return Rv(e)}static fromHalfFloat(e){return Cv(e)}}const Vt=new $,ll=new Xe;let Pv=0;class Ei{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cd,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ll.fromBufferAttribute(this,t),ll.applyMatrix3(e),this.setXY(t,ll.x,ll.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vo(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vo(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vo(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),i=In(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),i=In(i,this.array),s=In(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cd&&(e.usage=this.usage),e}}class Sg extends Ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mg extends Ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bn extends Ei{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dv=0;const ui=new qt,Eu=new Ln,qs=new $,Jn=new $a,Xo=new $a,tn=new $;class bi extends No{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gg(e)?Mg:Sg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return Eu.lookAt(e),Eu.updateMatrix(),this.applyMatrix4(Eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Jn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Jn.min,Xo.min),Jn.expandByPoint(tn),tn.addVectors(Jn.max,Xo.max),Jn.expandByPoint(tn)):(Jn.expandByPoint(Xo.min),Jn.expandByPoint(Xo.max))}Jn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)tn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)tn.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(e,c),tn.add(qs)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new $,l[b]=new $;const c=new $,u=new $,h=new $,f=new Xe,d=new Xe,g=new Xe,_=new $,m=new $;function p(b,x,y){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,b),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),a[b].add(_),a[x].add(_),a[y].add(_),l[b].add(m),l[x].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let b=0,x=M.length;b<x;++b){const y=M[b],C=y.start,L=y.count;for(let N=C,F=C+L;N<F;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const S=new $,v=new $,w=new $,T=new $;function E(b){w.fromBufferAttribute(i,b),T.copy(w);const x=a[b];S.copy(x),S.sub(w.multiplyScalar(w.dot(x))).normalize(),v.crossVectors(T,x);const C=v.dot(l[b])<0?-1:1;o.setXYZW(b,S.x,S.y,S.z,C)}for(let b=0,x=M.length;b<x;++b){const y=M[b],C=y.start,L=y.count;for(let N=C,F=C+L;N<F;N+=3)E(e.getX(N+0)),E(e.getX(N+1)),E(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,h=new $;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Ei(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gd=new qt,es=new vg,cl=new qc,Wd=new $,ul=new $,hl=new $,fl=new $,wu=new $,dl=new $,Xd=new $,pl=new $;class ni extends Ln{constructor(e=new bi,t=new La){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){dl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(wu.fromBufferAttribute(h,e),o?dl.addScaledVector(wu,u):dl.addScaledVector(wu.sub(t),u))}t.add(dl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(s),es.copy(e.ray).recast(e.near),!(cl.containsPoint(es.origin)===!1&&(es.intersectSphere(cl,Wd)===null||es.origin.distanceToSquared(Wd)>(e.far-e.near)**2))&&(Gd.copy(s).invert(),es.copy(e.ray).applyMatrix4(Gd),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,w=S;v<w;v+=3){const T=a.getX(v),E=a.getX(v+1),b=a.getX(v+2);i=ml(this,p,e,n,c,u,h,T,E,b),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);i=ml(this,o,e,n,c,u,h,M,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,w=S;v<w;v+=3){const T=v,E=v+1,b=v+2;i=ml(this,p,e,n,c,u,h,T,E,b),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,S=m+1,v=m+2;i=ml(this,o,e,n,c,u,h,M,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Lv(r,e,t,n,i,s,o,a){let l;if(e.side===zn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===qr,a),l===null)return null;pl.copy(a),pl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(pl);return c<t.near||c>t.far?null:{distance:c,point:pl.clone(),object:r}}function ml(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ul),r.getVertexPosition(l,hl),r.getVertexPosition(c,fl);const u=Lv(r,e,t,n,ul,hl,fl,Xd);if(u){const h=new $;Ii.getBarycoord(Xd,ul,hl,fl,h),i&&(u.uv=Ii.getInterpolatedAttribute(i,a,l,c,h,new Xe)),s&&(u.uv1=Ii.getInterpolatedAttribute(s,a,l,c,h,new Xe)),o&&(u.normal=Ii.getInterpolatedAttribute(o,a,l,c,h,new $),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new $,materialIndex:0};Ii.getNormal(ul,hl,fl,f.normal),u.face=f,u.barycoord=h}return u}class Ja extends bi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(u,3)),this.setAttribute("uv",new Bn(h,2));function g(_,m,p,M,S,v,w,T,E,b,x){const y=v/E,C=w/b,L=v/2,N=w/2,F=T/2,z=E+1,O=b+1;let H=0,V=0;const j=new $;for(let P=0;P<O;P++){const te=P*C-N;for(let Te=0;Te<z;Te++){const we=Te*y-L;j[_]=we*M,j[m]=te*S,j[p]=F,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[p]=T>0?1:-1,u.push(j.x,j.y,j.z),h.push(Te/E),h.push(1-P/b),H+=1}}for(let P=0;P<b;P++)for(let te=0;te<E;te++){const Te=f+te+z*P,we=f+te+z*(P+1),q=f+(te+1)+z*(P+1),ne=f+(te+1)+z*P;l.push(Te,we,ne),l.push(we,q,ne),V+=6}a.addGroup(d,V,x),d+=V,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bn(r){const e={};for(let t=0;t<r.length;t++){const n=bo(r[t]);for(const i in n)e[i]=n[i]}return e}function Uv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Tg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const lr={clone:bo,merge:bn};var Iv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class It extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iv,this.fragmentShader=Nv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=Uv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Eg extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=ur}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new $,qd=new Xe,Yd=new Xe;class mi extends Eg{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tf*2*Math.atan(Math.tan(ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,qd,Yd),t.subVectors(Yd,qd)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ru*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ys=-90,$s=1;class Ov extends Ln{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new mi(Ys,$s,e,t);i.layers=this.layers,this.add(i);const s=new mi(Ys,$s,e,t);s.layers=this.layers,this.add(s);const o=new mi(Ys,$s,e,t);o.layers=this.layers,this.add(o);const a=new mi(Ys,$s,e,t);a.layers=this.layers,this.add(a);const l=new mi(Ys,$s,e,t);l.layers=this.layers,this.add(l);const c=new mi(Ys,$s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ur)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wg extends un{constructor(e=[],t=To,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fv extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wg(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ja(5,5,5),s=new It({name:"CubemapFromEquirect",uniforms:bo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Gt});s.uniforms.tEquirect.value=t;const o=new ni(i,s),a=t.minFilter;return t.minFilter===Ir&&(t.minFilter=sn),new Ov(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class gl extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zv={type:"move"};class bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Hf extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bv extends un{constructor(e=null,t=1,n=1,i,s,o,a,l,c=yt,u=yt,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Au=new $,kv=new $,Vv=new it;class hs{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Au.subVectors(n,t).cross(kv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Au),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vv.getNormalMatrix(e),i=this.coplanarPoint(Au).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new qc,_l=new $;class bg{constructor(e=new hs,t=new hs,n=new hs,i=new hs,s=new hs,o=new hs){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ur){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],S=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,m-d,v-p).normalize(),n[1].setComponents(l+s,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+u,m+g,v+M).normalize(),n[3].setComponents(l-o,f-u,m-g,v-M).normalize(),n[4].setComponents(l-a,f-h,m-_,v-S).normalize(),t===ur)n[5].setComponents(l+a,f+h,m+_,v+S).normalize();else if(t===Rc)n[5].setComponents(a,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(_l.x=i.normal.x>0?e.max.x:e.min.x,_l.y=i.normal.y>0?e.max.y:e.min.y,_l.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hv extends Us{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $d=new qt,rf=new vg,vl=new qc,xl=new $;class Ag extends Ln{constructor(e=new bi,t=new Hv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(i),vl.radius+=s,e.ray.intersectsSphere(vl)===!1)return;$d.copy(i).invert(),rf.copy(e.ray).applyMatrix4($d);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);xl.fromBufferAttribute(h,m),Jd(xl,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)xl.fromBufferAttribute(h,g),Jd(xl,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jd(r,e,t,n,i,s,o){const a=rf.distanceSqToPoint(r);if(a<t){const l=new $;rf.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Gf extends un{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wf extends un{constructor(e,t,n=As,i,s,o,a=yt,l=yt,c,u=Ca,h=1){if(u!==Ca&&u!==Pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xf extends bi{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;M(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Bn(h,3)),this.setAttribute("normal",new Bn(f,3)),this.setAttribute("uv",new Bn(d,2));function M(){const v=new $,w=new $;let T=0;const E=(t-e)/n;for(let b=0;b<=s;b++){const x=[],y=b/s,C=y*(t-e)+e;for(let L=0;L<=i;L++){const N=L/i,F=N*l+a,z=Math.sin(F),O=Math.cos(F);w.x=C*z,w.y=-y*n+m,w.z=C*O,h.push(w.x,w.y,w.z),v.set(z,E,O).normalize(),f.push(v.x,v.y,v.z),d.push(N,1-y),x.push(g++)}_.push(x)}for(let b=0;b<i;b++)for(let x=0;x<s;x++){const y=_[x][b],C=_[x+1][b],L=_[x+1][b+1],N=_[x][b+1];(e>0||x!==0)&&(u.push(y,C,N),T+=3),(t>0||x!==s-1)&&(u.push(C,L,N),T+=3)}c.addGroup(p,T,0),p+=T}function S(v){const w=g,T=new Xe,E=new $;let b=0;const x=v===!0?e:t,y=v===!0?1:-1;for(let L=1;L<=i;L++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const C=g;for(let L=0;L<=i;L++){const F=L/i*l+a,z=Math.cos(F),O=Math.sin(F);E.x=x*O,E.y=m*y,E.z=x*z,h.push(E.x,E.y,E.z),f.push(0,y,0),T.x=z*.5+.5,T.y=O*.5*y+.5,d.push(T.x,T.y),g++}for(let L=0;L<i;L++){const N=w+L,F=C+L;v===!0?u.push(F,F+1,N):u.push(F+1,F,N),b+=3}c.addGroup(p,b,v===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oo extends bi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*f-o;for(let S=0;S<c;S++){const v=S*h-s;g.push(v,-M,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const S=M+c*p,v=M+c*(p+1),w=M+1+c*(p+1),T=M+1+c*p;d.push(S,v,T),d.push(v,w,T)}this.setIndex(d),this.setAttribute("position",new Bn(g,3)),this.setAttribute("normal",new Bn(_,3)),this.setAttribute("uv",new Bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gv extends Us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kf,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wv extends Us{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kf,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Xv extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qv extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Yv{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const $v=new Yv;class Ka{constructor(e){this.manager=e!==void 0?e:$v,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ka.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zi={};class Jv extends Error{constructor(e,t){super(e),this.response=t}}class Kv extends Ka{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Cc.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Zi[e]!==void 0){Zi[e].push({onLoad:t,onProgress:n,onError:i});return}Zi[e]=[],Zi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Zi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:S,value:v})=>{if(S)p.close();else{_+=v.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let T=0,E=u.length;T<E;T++){const b=u[T];b.onProgress&&b.onProgress(w)}p.enqueue(v),M()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Jv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Cc.add(e,c);const u=Zi[e];delete Zi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Zi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Zi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Zv extends Ka{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Cc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Da("img");function l(){u(),Cc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class jv extends Ka{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Bv,a=new Kv(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:xn,o.wrapT=c.wrapT!==void 0?c.wrapT:xn,o.magFilter=c.magFilter!==void 0?c.magFilter:sn,o.minFilter=c.minFilter!==void 0?c.minFilter:sn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ir),c.mipmapCount===1&&(o.minFilter=sn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class Qv extends Ka{constructor(e){super(e)}load(e,t,n,i){const s=new un,o=new Zv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ex extends Ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Yc extends Eg{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tx extends ex{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class nx extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Rg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Kd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Kd(){return performance.now()}function Zd(r,e,t,n){const i=ix(n);switch(t){case lg:return r*e;case ug:return r*e/i.components*i.byteLength;case Ff:return r*e/i.components*i.byteLength;case hg:return r*e*2/i.components*i.byteLength;case zf:return r*e*2/i.components*i.byteLength;case cg:return r*e*3/i.components*i.byteLength;case xi:return r*e*4/i.components*i.byteLength;case Bf:return r*e*4/i.components*i.byteLength;case uc:case hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fc:case dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ph:case Lh:return Math.max(r,16)*Math.max(e,8)/4;case Ch:case Dh:return Math.max(r,8)*Math.max(e,8)/2;case Uh:case Ih:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Nh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case kh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case $h:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case pc:case Kh:case Zh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case fg:case jh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Qh:case ef:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ix(r){switch(r){case gr:case sg:return{byteLength:1,components:1};case wo:case og:case yn:return{byteLength:2,components:1};case Nf:case Of:return{byteLength:2,components:4};case As:case If:case vi:return{byteLength:4,components:1};case ag:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function rx(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var sx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ox=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,px=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_x=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Px=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$x=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ey=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ny=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ry=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ay=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ly=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,py=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,my=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_y=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ay=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ly=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_S=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,US=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,OS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:sx,alphahash_pars_fragment:ox,alphamap_fragment:ax,alphamap_pars_fragment:lx,alphatest_fragment:cx,alphatest_pars_fragment:ux,aomap_fragment:hx,aomap_pars_fragment:fx,batching_pars_vertex:dx,batching_vertex:px,begin_vertex:mx,beginnormal_vertex:gx,bsdfs:_x,iridescence_fragment:vx,bumpmap_pars_fragment:xx,clipping_planes_fragment:yx,clipping_planes_pars_fragment:Sx,clipping_planes_pars_vertex:Mx,clipping_planes_vertex:Tx,color_fragment:Ex,color_pars_fragment:wx,color_pars_vertex:bx,color_vertex:Ax,common:Rx,cube_uv_reflection_fragment:Cx,defaultnormal_vertex:Px,displacementmap_pars_vertex:Dx,displacementmap_vertex:Lx,emissivemap_fragment:Ux,emissivemap_pars_fragment:Ix,colorspace_fragment:Nx,colorspace_pars_fragment:Ox,envmap_fragment:Fx,envmap_common_pars_fragment:zx,envmap_pars_fragment:Bx,envmap_pars_vertex:kx,envmap_physical_pars_fragment:Zx,envmap_vertex:Vx,fog_vertex:Hx,fog_pars_vertex:Gx,fog_fragment:Wx,fog_pars_fragment:Xx,gradientmap_pars_fragment:qx,lightmap_pars_fragment:Yx,lights_lambert_fragment:$x,lights_lambert_pars_fragment:Jx,lights_pars_begin:Kx,lights_toon_fragment:jx,lights_toon_pars_fragment:Qx,lights_phong_fragment:ey,lights_phong_pars_fragment:ty,lights_physical_fragment:ny,lights_physical_pars_fragment:iy,lights_fragment_begin:ry,lights_fragment_maps:sy,lights_fragment_end:oy,logdepthbuf_fragment:ay,logdepthbuf_pars_fragment:ly,logdepthbuf_pars_vertex:cy,logdepthbuf_vertex:uy,map_fragment:hy,map_pars_fragment:fy,map_particle_fragment:dy,map_particle_pars_fragment:py,metalnessmap_fragment:my,metalnessmap_pars_fragment:gy,morphinstance_vertex:_y,morphcolor_vertex:vy,morphnormal_vertex:xy,morphtarget_pars_vertex:yy,morphtarget_vertex:Sy,normal_fragment_begin:My,normal_fragment_maps:Ty,normal_pars_fragment:Ey,normal_pars_vertex:wy,normal_vertex:by,normalmap_pars_fragment:Ay,clearcoat_normal_fragment_begin:Ry,clearcoat_normal_fragment_maps:Cy,clearcoat_pars_fragment:Py,iridescence_pars_fragment:Dy,opaque_fragment:Ly,packing:Uy,premultiplied_alpha_fragment:Iy,project_vertex:Ny,dithering_fragment:Oy,dithering_pars_fragment:Fy,roughnessmap_fragment:zy,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:Vy,shadowmap_vertex:Hy,shadowmask_pars_fragment:Gy,skinbase_vertex:Wy,skinning_pars_vertex:Xy,skinning_vertex:qy,skinnormal_vertex:Yy,specularmap_fragment:$y,specularmap_pars_fragment:Jy,tonemapping_fragment:Ky,tonemapping_pars_fragment:Zy,transmission_fragment:jy,transmission_pars_fragment:Qy,uv_pars_fragment:eS,uv_pars_vertex:tS,uv_vertex:nS,worldpos_vertex:iS,background_vert:rS,background_frag:sS,backgroundCube_vert:oS,backgroundCube_frag:aS,cube_vert:lS,cube_frag:cS,depth_vert:uS,depth_frag:hS,distanceRGBA_vert:fS,distanceRGBA_frag:dS,equirect_vert:pS,equirect_frag:mS,linedashed_vert:gS,linedashed_frag:_S,meshbasic_vert:vS,meshbasic_frag:xS,meshlambert_vert:yS,meshlambert_frag:SS,meshmatcap_vert:MS,meshmatcap_frag:TS,meshnormal_vert:ES,meshnormal_frag:wS,meshphong_vert:bS,meshphong_frag:AS,meshphysical_vert:RS,meshphysical_frag:CS,meshtoon_vert:PS,meshtoon_frag:DS,points_vert:LS,points_frag:US,shadow_vert:IS,shadow_frag:NS,sprite_vert:OS,sprite_frag:FS},ve={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Li={basic:{uniforms:bn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:bn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new et(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:bn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:bn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:bn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new et(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:bn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:bn([ve.points,ve.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:bn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:bn([ve.common,ve.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:bn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:bn([ve.sprite,ve.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:bn([ve.common,ve.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:bn([ve.lights,ve.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Li.physical={uniforms:bn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const yl={r:0,b:0,g:0},ns=new Wi,zS=new qt;function BS(r,e,t,n,i,s,o){const a=new et(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function _(S){let v=!1;const w=g(S);w===null?p(a,l):w&&w.isColor&&(p(w,1),v=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===Xc)?(u===void 0&&(u=new ni(new Ja(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:bo(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ns.copy(v.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zS.makeRotationFromEuler(ns)),u.material.toneMapped=ft.getTransfer(w.colorSpace)!==St,(h!==w||f!==w.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=r.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ni(new Oo(2,2),new It({name:"BackgroundMaterial",uniforms:bo(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ft.getTransfer(w.colorSpace)!==St,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(yl,Tg(r)),n.buffers.color.setClear(yl.r,yl.g,yl.b,v,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m,dispose:M}}function kS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(y,C,L,N,F){let z=!1;const O=h(N,L,C);s!==O&&(s=O,c(s.object)),z=d(y,N,L,F),z&&g(y,N,L,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(y,C,L,N),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,C,L){const N=L.wireframe===!0;let F=n[y.id];F===void 0&&(F={},n[y.id]=F);let z=F[C.id];z===void 0&&(z={},F[C.id]=z);let O=z[N];return O===void 0&&(O=f(l()),z[N]=O),O}function f(y){const C=[],L=[],N=[];for(let F=0;F<t;F++)C[F]=0,L[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:N,object:y,attributes:{},index:null}}function d(y,C,L,N){const F=s.attributes,z=C.attributes;let O=0;const H=L.getAttributes();for(const V in H)if(H[V].location>=0){const P=F[V];let te=z[V];if(te===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),P===void 0||P.attribute!==te||te&&P.data!==te.data)return!0;O++}return s.attributesNum!==O||s.index!==N}function g(y,C,L,N){const F={},z=C.attributes;let O=0;const H=L.getAttributes();for(const V in H)if(H[V].location>=0){let P=z[V];P===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(P=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(P=y.instanceColor));const te={};te.attribute=P,P&&P.data&&(te.data=P.data),F[V]=te,O++}s.attributes=F,s.attributesNum=O,s.index=N}function _(){const y=s.newAttributes;for(let C=0,L=y.length;C<L;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const L=s.newAttributes,N=s.enabledAttributes,F=s.attributeDivisors;L[y]=1,N[y]===0&&(r.enableVertexAttribArray(y),N[y]=1),F[y]!==C&&(r.vertexAttribDivisor(y,C),F[y]=C)}function M(){const y=s.newAttributes,C=s.enabledAttributes;for(let L=0,N=C.length;L<N;L++)C[L]!==y[L]&&(r.disableVertexAttribArray(L),C[L]=0)}function S(y,C,L,N,F,z,O){O===!0?r.vertexAttribIPointer(y,C,L,F,z):r.vertexAttribPointer(y,C,L,N,F,z)}function v(y,C,L,N){_();const F=N.attributes,z=L.getAttributes(),O=C.defaultAttributeValues;for(const H in z){const V=z[H];if(V.location>=0){let j=F[H];if(j===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),j!==void 0){const P=j.normalized,te=j.itemSize,Te=e.get(j);if(Te===void 0)continue;const we=Te.buffer,q=Te.type,ne=Te.bytesPerElement,fe=q===r.INT||q===r.UNSIGNED_INT||j.gpuType===If;if(j.isInterleavedBufferAttribute){const oe=j.data,xe=oe.stride,Be=j.offset;if(oe.isInstancedInterleavedBuffer){for(let de=0;de<V.locationSize;de++)p(V.location+de,oe.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<V.locationSize;de++)m(V.location+de);r.bindBuffer(r.ARRAY_BUFFER,we);for(let de=0;de<V.locationSize;de++)S(V.location+de,te/V.locationSize,q,P,xe*ne,(Be+te/V.locationSize*de)*ne,fe)}else{if(j.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe,j.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let oe=0;oe<V.locationSize;oe++)m(V.location+oe);r.bindBuffer(r.ARRAY_BUFFER,we);for(let oe=0;oe<V.locationSize;oe++)S(V.location+oe,te/V.locationSize,q,P,te*ne,te/V.locationSize*oe*ne,fe)}}else if(O!==void 0){const P=O[H];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(V.location,P);break;case 3:r.vertexAttrib3fv(V.location,P);break;case 4:r.vertexAttrib4fv(V.location,P);break;default:r.vertexAttrib1fv(V.location,P)}}}}M()}function w(){b();for(const y in n){const C=n[y];for(const L in C){const N=C[L];for(const F in N)u(N[F].object),delete N[F];delete C[L]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const L in C){const N=C[L];for(const F in N)u(N[F].object),delete N[F];delete C[L]}delete n[y.id]}function E(y){for(const C in n){const L=n[C];if(L[y.id]===void 0)continue;const N=L[y.id];for(const F in N)u(N[F].object),delete N[F];delete L[y.id]}}function b(){x(),o=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:x,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function VS(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function HS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==xi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const b=E===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==gr&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==vi&&!b)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:w,maxSamples:T}}function GS(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new hs,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,S=M*4;let v=p.clippingState||null;l.value=v,v=u(g,f,S,d);for(let w=0;w!==S;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=d;S!==_;++S,v+=4)o.copy(h[S]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function WS(r){let e=new WeakMap;function t(o,a){return a===wc?o.mapping=To:a===Ah&&(o.mapping=Eo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===wc||a===Ah)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fv(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const ao=4,jd=[.125,.215,.35,.446,.526,.582],gs=20,Ru=new Yc,Qd=new et;let Cu=null,Pu=0,Du=0,Lu=!1;const fs=(1+Math.sqrt(5))/2,Js=1/fs,ep=[new $(-fs,Js,0),new $(fs,Js,0),new $(-Js,0,fs),new $(Js,0,fs),new $(0,fs,-Js),new $(0,fs,Js),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],XS=new $;class tp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=XS}=s;Cu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cu,Pu,Du),this._renderer.xr.enabled=Lu,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===To||e.mapping===Eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:yn,format:xi,colorSpace:Rs,depthBuffer:!1},i=np(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qS(s)),this._blurMaterial=YS(s,e,t)}return i}_compileMaterial(e){const t=new ni(this._lodPlanes[0],e);this._renderer.compile(t,Ru)}_sceneToCubeUV(e,t,n,i,s){const l=new mi(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Qd),h.toneMapping=Hr,h.autoClear=!1;const g=new La({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),_=new ni(new Ja,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Qd),m=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const v=this._cubeSize;Sl(i,S*v,M>2?v:0,v,v),h.setRenderTarget(i),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===To||e.mapping===Eo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ni(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Sl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ru)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ep[(i-s-1)%ep.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ni(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*gs-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):gs;m>gs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);const p=[];let M=0;for(let E=0;E<gs;++E){const b=E/_,x=Math.exp(-b*b/2);p.push(x),E===0?M+=x:E<m&&(M+=2*x)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const v=this._sizeLods[i],w=3*v*(i>S-ao?i-S+ao:0),T=4*(this._cubeSize-v);Sl(t,w,T,3*v,2*v),l.setRenderTarget(t),l.render(h,Ru)}}function qS(r){const e=[],t=[],n=[];let i=r;const s=r-ao+1+jd.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ao?l=jd[o-r+ao-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),S=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,b=T>2?0:-1,x=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];M.set(x,_*g*T),S.set(f,m*g*T);const y=[T,T,T,T,T,T];v.set(y,p*g*T)}const w=new bi;w.setAttribute("position",new Ei(M,_)),w.setAttribute("uv",new Ei(S,m)),w.setAttribute("faceIndex",new Ei(v,p)),e.push(w),i>ao&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function np(r,e,t){const n=new gn(r,e,t);return n.texture.mapping=Xc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function YS(r,e,t){const n=new Float32Array(gs),i=new $(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function ip(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function rp(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function qf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $S(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===wc||l===Ah,u=l===To||l===Eo;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new tp(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new tp(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function JS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&po("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function KS(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let S=0,v=M.length;S<v;S+=3){const w=M[S+0],T=M[S+1],E=M[S+2];f.push(w,T,T,E,E,w)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,v=M.length/3-1;S<v;S+=3){const w=S+0,T=S+1,E=S+2;f.push(w,T,T,E,E,w)}}else return;const m=new(gg(f)?Mg:Sg)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ZS(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function jS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function QS(r,e,t){const n=new WeakMap,i=new Dt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let y=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let w=a.attributes.position.count*v,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const E=new Float32Array(w*T*4*h),b=new _g(E,w,T,h);b.type=vi,b.needsUpdate=!0;const x=v*4;for(let C=0;C<h;C++){const L=p[C],N=M[C],F=S[C],z=w*T*4*C;for(let O=0;O<L.count;O++){const H=O*x;g===!0&&(i.fromBufferAttribute(L,O),E[z+H+0]=i.x,E[z+H+1]=i.y,E[z+H+2]=i.z,E[z+H+3]=0),_===!0&&(i.fromBufferAttribute(N,O),E[z+H+4]=i.x,E[z+H+5]=i.y,E[z+H+6]=i.z,E[z+H+7]=0),m===!0&&(i.fromBufferAttribute(F,O),E[z+H+8]=i.x,E[z+H+9]=i.y,E[z+H+10]=i.z,E[z+H+11]=F.itemSize===4?i.w:1)}}f={count:h,texture:b,size:new Xe(w,T)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function eM(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Pg=new un,sp=new Wf(1,1),Dg=new _g,Lg=new vv,Ug=new wg,op=[],ap=[],lp=new Float32Array(16),cp=new Float32Array(9),up=new Float32Array(4);function Fo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=op[i];if(s===void 0&&(s=new Float32Array(i),op[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function $c(r,e){let t=ap[e];t===void 0&&(t=new Int32Array(e),ap[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function tM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function nM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function iM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function rM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function sM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;up.set(n),r.uniformMatrix2fv(this.addr,!1,up),en(t,n)}}function oM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;cp.set(n),r.uniformMatrix3fv(this.addr,!1,cp),en(t,n)}}function aM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;lp.set(n),r.uniformMatrix4fv(this.addr,!1,lp),en(t,n)}}function lM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function uM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function hM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function fM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function dM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function pM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function mM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function gM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(sp.compareFunction=dg,s=sp):s=Pg,t.setTexture2D(e||s,i)}function _M(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Lg,i)}function vM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ug,i)}function xM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Dg,i)}function yM(r){switch(r){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return rM;case 35674:return sM;case 35675:return oM;case 35676:return aM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return uM;case 35669:case 35673:return hM;case 5125:return fM;case 36294:return dM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return xM}}function SM(r,e){r.uniform1fv(this.addr,e)}function MM(r,e){const t=Fo(e,this.size,2);r.uniform2fv(this.addr,t)}function TM(r,e){const t=Fo(e,this.size,3);r.uniform3fv(this.addr,t)}function EM(r,e){const t=Fo(e,this.size,4);r.uniform4fv(this.addr,t)}function wM(r,e){const t=Fo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function bM(r,e){const t=Fo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function AM(r,e){const t=Fo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function RM(r,e){r.uniform1iv(this.addr,e)}function CM(r,e){r.uniform2iv(this.addr,e)}function PM(r,e){r.uniform3iv(this.addr,e)}function DM(r,e){r.uniform4iv(this.addr,e)}function LM(r,e){r.uniform1uiv(this.addr,e)}function UM(r,e){r.uniform2uiv(this.addr,e)}function IM(r,e){r.uniform3uiv(this.addr,e)}function NM(r,e){r.uniform4uiv(this.addr,e)}function OM(r,e,t){const n=this.cache,i=e.length,s=$c(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Pg,s[o])}function FM(r,e,t){const n=this.cache,i=e.length,s=$c(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Lg,s[o])}function zM(r,e,t){const n=this.cache,i=e.length,s=$c(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ug,s[o])}function BM(r,e,t){const n=this.cache,i=e.length,s=$c(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Dg,s[o])}function kM(r){switch(r){case 5126:return SM;case 35664:return MM;case 35665:return TM;case 35666:return EM;case 35674:return wM;case 35675:return bM;case 35676:return AM;case 5124:case 35670:return RM;case 35667:case 35671:return CM;case 35668:case 35672:return PM;case 35669:case 35673:return DM;case 5125:return LM;case 36294:return UM;case 36295:return IM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return BM}}class VM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yM(t.type)}}class HM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kM(t.type)}}class GM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Uu=/(\w+)(\])?(\[|\.)?/g;function hp(r,e){r.seq.push(e),r.map[e.id]=e}function WM(r,e,t){const n=r.name,i=n.length;for(Uu.lastIndex=0;;){const s=Uu.exec(n),o=Uu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){hp(t,c===void 0?new VM(a,r,e):new HM(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new GM(a),hp(t,h)),t=h}}}class mc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);WM(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function fp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const XM=37297;let qM=0;function YM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const dp=new it;function $M(r){ft._getMatrix(dp,ft.workingColorSpace,r);const e=`mat3( ${dp.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(r)){case Ac:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function pp(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+YM(r.getShaderSource(e),o)}else return i}function JM(r,e){const t=$M(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function KM(r,e){let t;switch(e){case W0:t="Linear";break;case X0:t="Reinhard";break;case q0:t="Cineon";break;case Y0:t="ACESFilmic";break;case J0:t="AgX";break;case K0:t="Neutral";break;case $0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ml=new $;function ZM(){ft.getLuminanceCoefficients(Ml);const r=Ml.x.toFixed(4),e=Ml.y.toFixed(4),t=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function QM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function e1(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ra(r){return r!==""}function mp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t1=/^[ \t]*#include +<([\w\d./]+)>/gm;function sf(r){return r.replace(t1,i1)}const n1=new Map;function i1(r,e){let t=tt[e];if(t===void 0){const n=n1.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sf(t)}const r1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _p(r){return r.replace(r1,s1)}function s1(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function vp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function o1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ng?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===T0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function a1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case To:case Eo:e="ENVMAP_TYPE_CUBE";break;case Xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Eo:e="ENVMAP_MODE_REFRACTION";break}return e}function c1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ig:e="ENVMAP_BLENDING_MULTIPLY";break;case H0:e="ENVMAP_BLENDING_MIX";break;case G0:e="ENVMAP_BLENDING_ADD";break}return e}function u1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function h1(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=o1(t),c=a1(t),u=l1(t),h=c1(t),f=u1(t),d=jM(t),g=QM(s),_=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ra).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ra).join(`
`),p.length>0&&(p+=`
`)):(m=[vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),p=[vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hr?"#define TONE_MAPPING":"",t.toneMapping!==Hr?tt.tonemapping_pars_fragment:"",t.toneMapping!==Hr?KM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,JM("linearToOutputTexel",t.outputColorSpace),ZM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),o=sf(o),o=mp(o,t),o=gp(o,t),a=sf(a),a=mp(a,t),a=gp(a,t),o=_p(o),a=_p(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+o,v=M+p+a,w=fp(i,i.VERTEX_SHADER,S),T=fp(i,i.FRAGMENT_SHADER,v);i.attachShader(_,w),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(C){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(w).trim(),F=i.getShaderInfoLog(T).trim();let z=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,w,T);else{const H=pp(i,w,"vertex"),V=pp(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+H+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||F==="")&&(O=!1);O&&(C.diagnostics={runnable:z,programLog:L,vertexShader:{log:N,prefix:m},fragmentShader:{log:F,prefix:p}})}i.deleteShader(w),i.deleteShader(T),b=new mc(i,_),x=e1(i,_)}let b;this.getUniforms=function(){return b===void 0&&E(this),b};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,XM)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let f1=0;class d1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new p1(e),t.set(e,n)),n}}class p1{constructor(e){this.id=f1++,this.code=e,this.usedTimes=0}}function m1(r,e,t,n,i,s,o){const a=new xg,l=new d1,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,y,C,L,N){const F=L.fog,z=N.geometry,O=x.isMeshStandardMaterial?L.environment:null,H=(x.isMeshStandardMaterial?t:e).get(x.envMap||O),V=H&&H.mapping===Xc?H.image.height:null,j=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const P=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,te=P!==void 0?P.length:0;let Te=0;z.morphAttributes.position!==void 0&&(Te=1),z.morphAttributes.normal!==void 0&&(Te=2),z.morphAttributes.color!==void 0&&(Te=3);let we,q,ne,fe;if(j){const ye=Li[j];we=ye.vertexShader,q=ye.fragmentShader}else we=x.vertexShader,q=x.fragmentShader,l.update(x),ne=l.getVertexShaderID(x),fe=l.getFragmentShaderID(x);const oe=r.getRenderTarget(),xe=r.state.buffers.depth.getReversed(),Be=N.isInstancedMesh===!0,de=N.isBatchedMesh===!0,$e=!!x.map,Ke=!!x.matcap,Ae=!!H,I=!!x.aoMap,pt=!!x.lightMap,Je=!!x.bumpMap,W=!!x.normalMap,Se=!!x.displacementMap,je=!!x.emissiveMap,Ue=!!x.metalnessMap,De=!!x.roughnessMap,vt=x.anisotropy>0,D=x.clearcoat>0,A=x.dispersion>0,G=x.iridescence>0,Z=x.sheen>0,K=x.transmission>0,J=vt&&!!x.anisotropyMap,Ee=D&&!!x.clearcoatMap,le=D&&!!x.clearcoatNormalMap,Re=D&&!!x.clearcoatRoughnessMap,he=G&&!!x.iridescenceMap,ie=G&&!!x.iridescenceThicknessMap,ge=Z&&!!x.sheenColorMap,ke=Z&&!!x.sheenRoughnessMap,Fe=!!x.specularMap,ce=!!x.specularColorMap,He=!!x.specularIntensityMap,U=K&&!!x.transmissionMap,ue=K&&!!x.thicknessMap,ee=!!x.gradientMap,_e=!!x.alphaMap,re=x.alphaTest>0,Q=!!x.alphaHash,be=!!x.extensions;let Ve=Hr;x.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ve=r.toneMapping);const dt={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:we,fragmentShader:q,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:de,batchingColor:de&&N._colorsTexture!==null,instancing:Be,instancingColor:Be&&N.instanceColor!==null,instancingMorph:Be&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Rs,alphaToCoverage:!!x.alphaToCoverage,map:$e,matcap:Ke,envMap:Ae,envMapMode:Ae&&H.mapping,envMapCubeUVHeight:V,aoMap:I,lightMap:pt,bumpMap:Je,normalMap:W,displacementMap:f&&Se,emissiveMap:je,normalMapObjectSpace:W&&x.normalMapType===ev,normalMapTangentSpace:W&&x.normalMapType===kf,metalnessMap:Ue,roughnessMap:De,anisotropy:vt,anisotropyMap:J,clearcoat:D,clearcoatMap:Ee,clearcoatNormalMap:le,clearcoatRoughnessMap:Re,dispersion:A,iridescence:G,iridescenceMap:he,iridescenceThicknessMap:ie,sheen:Z,sheenColorMap:ge,sheenRoughnessMap:ke,specularMap:Fe,specularColorMap:ce,specularIntensityMap:He,transmission:K,transmissionMap:U,thicknessMap:ue,gradientMap:ee,opaque:x.transparent===!1&&x.blending===fr&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:re,alphaHash:Q,combine:x.combine,mapUv:$e&&_(x.map.channel),aoMapUv:I&&_(x.aoMap.channel),lightMapUv:pt&&_(x.lightMap.channel),bumpMapUv:Je&&_(x.bumpMap.channel),normalMapUv:W&&_(x.normalMap.channel),displacementMapUv:Se&&_(x.displacementMap.channel),emissiveMapUv:je&&_(x.emissiveMap.channel),metalnessMapUv:Ue&&_(x.metalnessMap.channel),roughnessMapUv:De&&_(x.roughnessMap.channel),anisotropyMapUv:J&&_(x.anisotropyMap.channel),clearcoatMapUv:Ee&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ke&&_(x.sheenRoughnessMap.channel),specularMapUv:Fe&&_(x.specularMap.channel),specularColorMapUv:ce&&_(x.specularColorMap.channel),specularIntensityMapUv:He&&_(x.specularIntensityMap.channel),transmissionMapUv:U&&_(x.transmissionMap.channel),thicknessMapUv:ue&&_(x.thicknessMap.channel),alphaMapUv:_e&&_(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(W||vt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&($e||_e),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Te,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ve,decodeVideoTexture:$e&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:je&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ui,flipSided:x.side===zn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:be&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&x.extensions.multiDraw===!0||de)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)y.push(C),y.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(M(y,x),S(y,x),y.push(r.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function M(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function S(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const y=g[x.type];let C;if(y){const L=Li[y];C=lr.clone(L.uniforms)}else C=x.uniforms;return C}function w(x,y){let C;for(let L=0,N=u.length;L<N;L++){const F=u[L];if(F.cacheKey===y){C=F,++C.usedTimes;break}}return C===void 0&&(C=new h1(r,y,x,s),u.push(C)),C}function T(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function E(x){l.remove(x)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:b}}function g1(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function _1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function xp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function yp(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||_1),n.length>1&&n.sort(f||xp),i.length>1&&i.sort(f||xp)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function v1(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new yp,r.set(n,[o])):i>=s.length?(o=new yp,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function x1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new et};break;case"SpotLight":t={position:new $,direction:new $,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=t,t}}}function y1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let S1=0;function M1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function T1(r){const e=new x1,t=y1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);const i=new $,s=new qt,o=new qt;function a(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,S=0,v=0,w=0,T=0,E=0;c.sort(M1);for(let x=0,y=c.length;x<y;x++){const C=c[x],L=C.color,N=C.intensity,F=C.distance,z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=L.r*N,h+=L.g*N,f+=L.b*N;else if(C.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(C.sh.coefficients[O],N);E++}else if(C.isDirectionalLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const H=C.shadow,V=t.get(C);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=C.shadow.matrix,M++}n.directional[d]=O,d++}else if(C.isSpotLight){const O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(L).multiplyScalar(N),O.distance=F,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,n.spot[_]=O;const H=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,H.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=H.matrix,C.castShadow){const V=t.get(C);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=z,v++}_++}else if(C.isRectAreaLight){const O=e.get(C);O.color.copy(L).multiplyScalar(N),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=O,m++}else if(C.isPointLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){const H=C.shadow,V=t.get(C);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,V.shadowCameraNear=H.camera.near,V.shadowCameraFar=H.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=O,g++}else if(C.isHemisphereLight){const O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(N),O.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[p]=O,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const b=n.hash;(b.directionalLength!==d||b.pointLength!==g||b.spotLength!==_||b.rectAreaLength!==m||b.hemiLength!==p||b.numDirectionalShadows!==M||b.numPointShadows!==S||b.numSpotShadows!==v||b.numSpotMaps!==w||b.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,b.directionalLength=d,b.pointLength=g,b.spotLength=_,b.rectAreaLength=m,b.hemiLength=p,b.numDirectionalShadows=M,b.numPointShadows=S,b.numSpotShadows=v,b.numSpotMaps=w,b.numLightProbes=E,n.version=S1++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(S.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Sp(r){const e=new T1(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function E1(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Sp(r),e.set(i,[a])):s>=o.length?(a=new Sp(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const w1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function A1(r,e,t){let n=new bg;const i=new Xe,s=new Xe,o=new Dt,a=new Xv({depthPacking:Q0}),l=new qv,c={},u=t.maxTextureSize,h={[qr]:zn,[zn]:qr,[Ui]:Ui},f=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:w1,fragmentShader:b1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new bi;g.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ni(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ng;let p=this.type;this.render=function(T,E,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const x=r.getRenderTarget(),y=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Gt),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=p!==nr&&this.type===nr,F=p===nr&&this.type!==nr;for(let z=0,O=T.length;z<O;z++){const H=T[z],V=H.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const j=V.getFrameExtents();if(i.multiply(j),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,V.mapSize.y=s.y)),V.map===null||N===!0||F===!0){const te=this.type!==nr?{minFilter:yt,magFilter:yt}:{};V.map!==null&&V.map.dispose(),V.map=new gn(i.x,i.y,te),V.map.texture.name=H.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const P=V.getViewportCount();for(let te=0;te<P;te++){const Te=V.getViewport(te);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),L.viewport(o),V.updateMatrices(H,te),n=V.getFrustum(),v(E,b,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===nr&&M(V,b),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(x,y,C)};function M(T,E){const b=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gn(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(E,null,b,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(E,null,b,d,_,null)}function S(T,E,b,x){let y=null;const C=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)y=C;else if(y=b.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const L=y.uuid,N=E.uuid;let F=c[L];F===void 0&&(F={},c[L]=F);let z=F[N];z===void 0&&(z=y.clone(),F[N]=z,E.addEventListener("dispose",w)),y=z}if(y.visible=E.visible,y.wireframe=E.wireframe,x===nr?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:h[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const L=r.properties.get(y);L.light=b}return y}function v(T,E,b,x,y){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===nr)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const N=e.update(T),F=T.material;if(Array.isArray(F)){const z=N.groups;for(let O=0,H=z.length;O<H;O++){const V=z[O],j=F[V.materialIndex];if(j&&j.visible){const P=S(T,j,x,y);T.onBeforeShadow(r,T,E,b,N,P,V),r.renderBufferDirect(b,null,N,P,T,V),T.onAfterShadow(r,T,E,b,N,P,V)}}}else if(F.visible){const z=S(T,F,x,y);T.onBeforeShadow(r,T,E,b,N,z,null),r.renderBufferDirect(b,null,N,z,T,null),T.onAfterShadow(r,T,E,b,N,z,null)}}const L=T.children;for(let N=0,F=L.length;N<F;N++)v(L[N],E,b,x,y)}function w(T){T.target.removeEventListener("dispose",w);for(const b in c){const x=c[b],y=T.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const R1={[yh]:Sh,[Mh]:wh,[Th]:bh,[Mo]:Eh,[Sh]:yh,[wh]:Mh,[bh]:Th,[Eh]:Mo};function C1(r,e){function t(){let U=!1;const ue=new Dt;let ee=null;const _e=new Dt(0,0,0,0);return{setMask:function(re){ee!==re&&!U&&(r.colorMask(re,re,re,re),ee=re)},setLocked:function(re){U=re},setClear:function(re,Q,be,Ve,dt){dt===!0&&(re*=Ve,Q*=Ve,be*=Ve),ue.set(re,Q,be,Ve),_e.equals(ue)===!1&&(r.clearColor(re,Q,be,Ve),_e.copy(ue))},reset:function(){U=!1,ee=null,_e.set(-1,0,0,0)}}}function n(){let U=!1,ue=!1,ee=null,_e=null,re=null;return{setReversed:function(Q){if(ue!==Q){const be=e.get("EXT_clip_control");Q?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ue=Q;const Ve=re;re=null,this.setClear(Ve)}},getReversed:function(){return ue},setTest:function(Q){Q?oe(r.DEPTH_TEST):xe(r.DEPTH_TEST)},setMask:function(Q){ee!==Q&&!U&&(r.depthMask(Q),ee=Q)},setFunc:function(Q){if(ue&&(Q=R1[Q]),_e!==Q){switch(Q){case yh:r.depthFunc(r.NEVER);break;case Sh:r.depthFunc(r.ALWAYS);break;case Mh:r.depthFunc(r.LESS);break;case Mo:r.depthFunc(r.LEQUAL);break;case Th:r.depthFunc(r.EQUAL);break;case Eh:r.depthFunc(r.GEQUAL);break;case wh:r.depthFunc(r.GREATER);break;case bh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_e=Q}},setLocked:function(Q){U=Q},setClear:function(Q){re!==Q&&(ue&&(Q=1-Q),r.clearDepth(Q),re=Q)},reset:function(){U=!1,ee=null,_e=null,re=null,ue=!1}}}function i(){let U=!1,ue=null,ee=null,_e=null,re=null,Q=null,be=null,Ve=null,dt=null;return{setTest:function(ye){U||(ye?oe(r.STENCIL_TEST):xe(r.STENCIL_TEST))},setMask:function(ye){ue!==ye&&!U&&(r.stencilMask(ye),ue=ye)},setFunc:function(ye,Le,Qe){(ee!==ye||_e!==Le||re!==Qe)&&(r.stencilFunc(ye,Le,Qe),ee=ye,_e=Le,re=Qe)},setOp:function(ye,Le,Qe){(Q!==ye||be!==Le||Ve!==Qe)&&(r.stencilOp(ye,Le,Qe),Q=ye,be=Le,Ve=Qe)},setLocked:function(ye){U=ye},setClear:function(ye){dt!==ye&&(r.clearStencil(ye),dt=ye)},reset:function(){U=!1,ue=null,ee=null,_e=null,re=null,Q=null,be=null,Ve=null,dt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,S=null,v=null,w=null,T=null,E=new et(0,0,0),b=0,x=!1,y=null,C=null,L=null,N=null,F=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=H>=2);let j=null,P={};const te=r.getParameter(r.SCISSOR_BOX),Te=r.getParameter(r.VIEWPORT),we=new Dt().fromArray(te),q=new Dt().fromArray(Te);function ne(U,ue,ee,_e){const re=new Uint8Array(4),Q=r.createTexture();r.bindTexture(U,Q),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let be=0;be<ee;be++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,_e,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(ue+be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return Q}const fe={};fe[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),fe[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),fe[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(r.DEPTH_TEST),o.setFunc(Mo),Je(!1),W(wd),oe(r.CULL_FACE),I(Gt);function oe(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function xe(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function Be(U,ue){return h[U]!==ue?(r.bindFramebuffer(U,ue),h[U]=ue,U===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ue),U===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function de(U,ue){let ee=d,_e=!1;if(U){ee=f.get(ue),ee===void 0&&(ee=[],f.set(ue,ee));const re=U.textures;if(ee.length!==re.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,be=re.length;Q<be;Q++)ee[Q]=r.COLOR_ATTACHMENT0+Q;ee.length=re.length,_e=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,_e=!0);_e&&r.drawBuffers(ee)}function $e(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const Ke={[or]:r.FUNC_ADD,[w0]:r.FUNC_SUBTRACT,[b0]:r.FUNC_REVERSE_SUBTRACT};Ke[A0]=r.MIN,Ke[R0]=r.MAX;const Ae={[C0]:r.ZERO,[P0]:r.ONE,[D0]:r.SRC_COLOR,[ba]:r.SRC_ALPHA,[F0]:r.SRC_ALPHA_SATURATE,[N0]:r.DST_COLOR,[U0]:r.DST_ALPHA,[L0]:r.ONE_MINUS_SRC_COLOR,[Aa]:r.ONE_MINUS_SRC_ALPHA,[O0]:r.ONE_MINUS_DST_COLOR,[I0]:r.ONE_MINUS_DST_ALPHA,[z0]:r.CONSTANT_COLOR,[B0]:r.ONE_MINUS_CONSTANT_COLOR,[k0]:r.CONSTANT_ALPHA,[V0]:r.ONE_MINUS_CONSTANT_ALPHA};function I(U,ue,ee,_e,re,Q,be,Ve,dt,ye){if(U===Gt){_===!0&&(xe(r.BLEND),_=!1);return}if(_===!1&&(oe(r.BLEND),_=!0),U!==E0){if(U!==m||ye!==x){if((p!==or||v!==or)&&(r.blendEquation(r.FUNC_ADD),p=or,v=or),ye)switch(U){case fr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xh:r.blendFunc(r.ONE,r.ONE);break;case bd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ad:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case fr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case bd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ad:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,S=null,w=null,T=null,E.set(0,0,0),b=0,m=U,x=ye}return}re=re||ue,Q=Q||ee,be=be||_e,(ue!==p||re!==v)&&(r.blendEquationSeparate(Ke[ue],Ke[re]),p=ue,v=re),(ee!==M||_e!==S||Q!==w||be!==T)&&(r.blendFuncSeparate(Ae[ee],Ae[_e],Ae[Q],Ae[be]),M=ee,S=_e,w=Q,T=be),(Ve.equals(E)===!1||dt!==b)&&(r.blendColor(Ve.r,Ve.g,Ve.b,dt),E.copy(Ve),b=dt),m=U,x=!1}function pt(U,ue){U.side===Ui?xe(r.CULL_FACE):oe(r.CULL_FACE);let ee=U.side===zn;ue&&(ee=!ee),Je(ee),U.blending===fr&&U.transparent===!1?I(Gt):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const _e=U.stencilWrite;a.setTest(_e),_e&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),je(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(r.SAMPLE_ALPHA_TO_COVERAGE):xe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Je(U){y!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),y=U)}function W(U){U!==S0?(oe(r.CULL_FACE),U!==C&&(U===wd?r.cullFace(r.BACK):U===M0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xe(r.CULL_FACE),C=U}function Se(U){U!==L&&(O&&r.lineWidth(U),L=U)}function je(U,ue,ee){U?(oe(r.POLYGON_OFFSET_FILL),(N!==ue||F!==ee)&&(r.polygonOffset(ue,ee),N=ue,F=ee)):xe(r.POLYGON_OFFSET_FILL)}function Ue(U){U?oe(r.SCISSOR_TEST):xe(r.SCISSOR_TEST)}function De(U){U===void 0&&(U=r.TEXTURE0+z-1),j!==U&&(r.activeTexture(U),j=U)}function vt(U,ue,ee){ee===void 0&&(j===null?ee=r.TEXTURE0+z-1:ee=j);let _e=P[ee];_e===void 0&&(_e={type:void 0,texture:void 0},P[ee]=_e),(_e.type!==U||_e.texture!==ue)&&(j!==ee&&(r.activeTexture(ee),j=ee),r.bindTexture(U,ue||fe[U]),_e.type=U,_e.texture=ue)}function D(){const U=P[j];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{r.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{r.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{r.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{r.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{r.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{r.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{r.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{r.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(U){we.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),we.copy(U))}function ke(U){q.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function Fe(U,ue){let ee=c.get(ue);ee===void 0&&(ee=new WeakMap,c.set(ue,ee));let _e=ee.get(U);_e===void 0&&(_e=r.getUniformBlockIndex(ue,U.name),ee.set(U,_e))}function ce(U,ue){const _e=c.get(ue).get(U);l.get(ue)!==_e&&(r.uniformBlockBinding(ue,_e,U.__bindingPointIndex),l.set(ue,_e))}function He(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},j=null,P={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,S=null,v=null,w=null,T=null,E=new et(0,0,0),b=0,x=!1,y=null,C=null,L=null,N=null,F=null,we.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:xe,bindFramebuffer:Be,drawBuffers:de,useProgram:$e,setBlending:I,setMaterial:pt,setFlipSided:Je,setCullFace:W,setLineWidth:Se,setPolygonOffset:je,setScissorTest:Ue,activeTexture:De,bindTexture:vt,unbindTexture:D,compressedTexImage2D:A,compressedTexImage3D:G,texImage2D:he,texImage3D:ie,updateUBOMapping:Fe,uniformBlockBinding:ce,texStorage2D:le,texStorage3D:Re,texSubImage2D:Z,texSubImage3D:K,compressedTexSubImage2D:J,compressedTexSubImage3D:Ee,scissor:ge,viewport:ke,reset:He}}function P1(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,A){return d?new OffscreenCanvas(D,A):Da("canvas")}function _(D,A,G){let Z=1;const K=vt(D);if((K.width>G||K.height>G)&&(Z=G/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const J=Math.floor(Z*K.width),Ee=Math.floor(Z*K.height);h===void 0&&(h=g(J,Ee));const le=A?g(J,Ee):h;return le.width=J,le.height=Ee,le.getContext("2d").drawImage(D,0,0,J,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+J+"x"+Ee+")."),le}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){r.generateMipmap(D)}function M(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(D,A,G,Z,K=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let J=A;if(A===r.RED&&(G===r.FLOAT&&(J=r.R32F),G===r.HALF_FLOAT&&(J=r.R16F),G===r.UNSIGNED_BYTE&&(J=r.R8)),A===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.R8UI),G===r.UNSIGNED_SHORT&&(J=r.R16UI),G===r.UNSIGNED_INT&&(J=r.R32UI),G===r.BYTE&&(J=r.R8I),G===r.SHORT&&(J=r.R16I),G===r.INT&&(J=r.R32I)),A===r.RG&&(G===r.FLOAT&&(J=r.RG32F),G===r.HALF_FLOAT&&(J=r.RG16F),G===r.UNSIGNED_BYTE&&(J=r.RG8)),A===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RG8UI),G===r.UNSIGNED_SHORT&&(J=r.RG16UI),G===r.UNSIGNED_INT&&(J=r.RG32UI),G===r.BYTE&&(J=r.RG8I),G===r.SHORT&&(J=r.RG16I),G===r.INT&&(J=r.RG32I)),A===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RGB8UI),G===r.UNSIGNED_SHORT&&(J=r.RGB16UI),G===r.UNSIGNED_INT&&(J=r.RGB32UI),G===r.BYTE&&(J=r.RGB8I),G===r.SHORT&&(J=r.RGB16I),G===r.INT&&(J=r.RGB32I)),A===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),G===r.UNSIGNED_INT&&(J=r.RGBA32UI),G===r.BYTE&&(J=r.RGBA8I),G===r.SHORT&&(J=r.RGBA16I),G===r.INT&&(J=r.RGBA32I)),A===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),A===r.RGBA){const Ee=K?Ac:ft.getTransfer(Z);G===r.FLOAT&&(J=r.RGBA32F),G===r.HALF_FLOAT&&(J=r.RGBA16F),G===r.UNSIGNED_BYTE&&(J=Ee===St?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(D,A){let G;return D?A===null||A===As||A===Ra?G=r.DEPTH24_STENCIL8:A===vi?G=r.DEPTH32F_STENCIL8:A===wo&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===As||A===Ra?G=r.DEPTH_COMPONENT24:A===vi?G=r.DEPTH_COMPONENT32F:A===wo&&(G=r.DEPTH_COMPONENT16),G}function w(D,A){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==yt&&D.minFilter!==sn?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function T(D){const A=D.target;A.removeEventListener("dispose",T),b(A),A.isVideoTexture&&u.delete(A)}function E(D){const A=D.target;A.removeEventListener("dispose",E),y(A)}function b(D){const A=n.get(D);if(A.__webglInit===void 0)return;const G=D.source,Z=f.get(G);if(Z){const K=Z[A.__cacheKey];K.usedTimes--,K.usedTimes===0&&x(D),Object.keys(Z).length===0&&f.delete(G)}n.remove(D)}function x(D){const A=n.get(D);r.deleteTexture(A.__webglTexture);const G=D.source,Z=f.get(G);delete Z[A.__cacheKey],o.memory.textures--}function y(D){const A=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(A.__webglFramebuffer[Z]))for(let K=0;K<A.__webglFramebuffer[Z].length;K++)r.deleteFramebuffer(A.__webglFramebuffer[Z][K]);else r.deleteFramebuffer(A.__webglFramebuffer[Z]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[Z])}else{if(Array.isArray(A.__webglFramebuffer))for(let Z=0;Z<A.__webglFramebuffer.length;Z++)r.deleteFramebuffer(A.__webglFramebuffer[Z]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Z=0;Z<A.__webglColorRenderbuffer.length;Z++)A.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[Z]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const G=D.textures;for(let Z=0,K=G.length;Z<K;Z++){const J=n.get(G[Z]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(D)}let C=0;function L(){C=0}function N(){const D=C;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),C+=1,D}function F(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function z(D,A){const G=n.get(D);if(D.isVideoTexture&&Ue(D),D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){const Z=D.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(G,D,A);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+A)}function O(D,A){const G=n.get(D);if(D.version>0&&G.__version!==D.version){fe(G,D,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+A)}function H(D,A){const G=n.get(D);if(D.version>0&&G.__version!==D.version){fe(G,D,A);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+A)}function V(D,A){const G=n.get(D);if(D.version>0&&G.__version!==D.version){oe(G,D,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+A)}const j={[bc]:r.REPEAT,[xn]:r.CLAMP_TO_EDGE,[Rh]:r.MIRRORED_REPEAT},P={[yt]:r.NEAREST,[Z0]:r.NEAREST_MIPMAP_NEAREST,[ja]:r.NEAREST_MIPMAP_LINEAR,[sn]:r.LINEAR,[iu]:r.LINEAR_MIPMAP_NEAREST,[Ir]:r.LINEAR_MIPMAP_LINEAR},te={[tv]:r.NEVER,[av]:r.ALWAYS,[nv]:r.LESS,[dg]:r.LEQUAL,[iv]:r.EQUAL,[ov]:r.GEQUAL,[rv]:r.GREATER,[sv]:r.NOTEQUAL};function Te(D,A){if(A.type===vi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===sn||A.magFilter===iu||A.magFilter===ja||A.magFilter===Ir||A.minFilter===sn||A.minFilter===iu||A.minFilter===ja||A.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,j[A.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,j[A.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,j[A.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,P[A.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,P[A.minFilter]),A.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,te[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===yt||A.minFilter!==ja&&A.minFilter!==Ir||A.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function we(D,A){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",T));const Z=A.source;let K=f.get(Z);K===void 0&&(K={},f.set(Z,K));const J=F(A);if(J!==D.__cacheKey){K[J]===void 0&&(K[J]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),K[J].usedTimes++;const Ee=K[D.__cacheKey];Ee!==void 0&&(K[D.__cacheKey].usedTimes--,Ee.usedTimes===0&&x(A)),D.__cacheKey=J,D.__webglTexture=K[J].texture}return G}function q(D,A,G){return Math.floor(Math.floor(D/G)/A)}function ne(D,A,G,Z){const J=D.updateRanges;if(J.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,G,Z,A.data);else{J.sort((ie,ge)=>ie.start-ge.start);let Ee=0;for(let ie=1;ie<J.length;ie++){const ge=J[Ee],ke=J[ie],Fe=ge.start+ge.count,ce=q(ke.start,A.width,4),He=q(ge.start,A.width,4);ke.start<=Fe+1&&ce===He&&q(ke.start+ke.count-1,A.width,4)===ce?ge.count=Math.max(ge.count,ke.start+ke.count-ge.start):(++Ee,J[Ee]=ke)}J.length=Ee+1;const le=r.getParameter(r.UNPACK_ROW_LENGTH),Re=r.getParameter(r.UNPACK_SKIP_PIXELS),he=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let ie=0,ge=J.length;ie<ge;ie++){const ke=J[ie],Fe=Math.floor(ke.start/4),ce=Math.ceil(ke.count/4),He=Fe%A.width,U=Math.floor(Fe/A.width),ue=ce,ee=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,He),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),t.texSubImage2D(r.TEXTURE_2D,0,He,U,ue,ee,G,Z,A.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,le),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Re),r.pixelStorei(r.UNPACK_SKIP_ROWS,he)}}function fe(D,A,G){let Z=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Z=r.TEXTURE_3D);const K=we(D,A),J=A.source;t.bindTexture(Z,D.__webglTexture,r.TEXTURE0+G);const Ee=n.get(J);if(J.version!==Ee.__version||K===!0){t.activeTexture(r.TEXTURE0+G);const le=ft.getPrimaries(ft.workingColorSpace),Re=A.colorSpace===Ur?null:ft.getPrimaries(A.colorSpace),he=A.colorSpace===Ur||le===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ie=_(A.image,!1,i.maxTextureSize);ie=De(A,ie);const ge=s.convert(A.format,A.colorSpace),ke=s.convert(A.type);let Fe=S(A.internalFormat,ge,ke,A.colorSpace,A.isVideoTexture);Te(Z,A);let ce;const He=A.mipmaps,U=A.isVideoTexture!==!0,ue=Ee.__version===void 0||K===!0,ee=J.dataReady,_e=w(A,ie);if(A.isDepthTexture)Fe=v(A.format===Pa,A.type),ue&&(U?t.texStorage2D(r.TEXTURE_2D,1,Fe,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Fe,ie.width,ie.height,0,ge,ke,null));else if(A.isDataTexture)if(He.length>0){U&&ue&&t.texStorage2D(r.TEXTURE_2D,_e,Fe,He[0].width,He[0].height);for(let re=0,Q=He.length;re<Q;re++)ce=He[re],U?ee&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ce.width,ce.height,ge,ke,ce.data):t.texImage2D(r.TEXTURE_2D,re,Fe,ce.width,ce.height,0,ge,ke,ce.data);A.generateMipmaps=!1}else U?(ue&&t.texStorage2D(r.TEXTURE_2D,_e,Fe,ie.width,ie.height),ee&&ne(A,ie,ge,ke)):t.texImage2D(r.TEXTURE_2D,0,Fe,ie.width,ie.height,0,ge,ke,ie.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){U&&ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,Fe,He[0].width,He[0].height,ie.depth);for(let re=0,Q=He.length;re<Q;re++)if(ce=He[re],A.format!==xi)if(ge!==null)if(U){if(ee)if(A.layerUpdates.size>0){const be=Zd(ce.width,ce.height,A.format,A.type);for(const Ve of A.layerUpdates){const dt=ce.data.subarray(Ve*be/ce.data.BYTES_PER_ELEMENT,(Ve+1)*be/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,Ve,ce.width,ce.height,1,ge,dt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ce.width,ce.height,ie.depth,ge,ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Fe,ce.width,ce.height,ie.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ee&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ce.width,ce.height,ie.depth,ge,ke,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Fe,ce.width,ce.height,ie.depth,0,ge,ke,ce.data)}else{U&&ue&&t.texStorage2D(r.TEXTURE_2D,_e,Fe,He[0].width,He[0].height);for(let re=0,Q=He.length;re<Q;re++)ce=He[re],A.format!==xi?ge!==null?U?ee&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,ce.width,ce.height,ge,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ee&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ce.width,ce.height,ge,ke,ce.data):t.texImage2D(r.TEXTURE_2D,re,Fe,ce.width,ce.height,0,ge,ke,ce.data)}else if(A.isDataArrayTexture)if(U){if(ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,Fe,ie.width,ie.height,ie.depth),ee)if(A.layerUpdates.size>0){const re=Zd(ie.width,ie.height,A.format,A.type);for(const Q of A.layerUpdates){const be=ie.data.subarray(Q*re/ie.data.BYTES_PER_ELEMENT,(Q+1)*re/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,ge,ke,be)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,ke,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,ie.width,ie.height,ie.depth,0,ge,ke,ie.data);else if(A.isData3DTexture)U?(ue&&t.texStorage3D(r.TEXTURE_3D,_e,Fe,ie.width,ie.height,ie.depth),ee&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,ke,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Fe,ie.width,ie.height,ie.depth,0,ge,ke,ie.data);else if(A.isFramebufferTexture){if(ue)if(U)t.texStorage2D(r.TEXTURE_2D,_e,Fe,ie.width,ie.height);else{let re=ie.width,Q=ie.height;for(let be=0;be<_e;be++)t.texImage2D(r.TEXTURE_2D,be,Fe,re,Q,0,ge,ke,null),re>>=1,Q>>=1}}else if(He.length>0){if(U&&ue){const re=vt(He[0]);t.texStorage2D(r.TEXTURE_2D,_e,Fe,re.width,re.height)}for(let re=0,Q=He.length;re<Q;re++)ce=He[re],U?ee&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ge,ke,ce):t.texImage2D(r.TEXTURE_2D,re,Fe,ge,ke,ce);A.generateMipmaps=!1}else if(U){if(ue){const re=vt(ie);t.texStorage2D(r.TEXTURE_2D,_e,Fe,re.width,re.height)}ee&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ge,ke,ie)}else t.texImage2D(r.TEXTURE_2D,0,Fe,ge,ke,ie);m(A)&&p(Z),Ee.__version=J.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function oe(D,A,G){if(A.image.length!==6)return;const Z=we(D,A),K=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+G);const J=n.get(K);if(K.version!==J.__version||Z===!0){t.activeTexture(r.TEXTURE0+G);const Ee=ft.getPrimaries(ft.workingColorSpace),le=A.colorSpace===Ur?null:ft.getPrimaries(A.colorSpace),Re=A.colorSpace===Ur||Ee===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const he=A.isCompressedTexture||A.image[0].isCompressedTexture,ie=A.image[0]&&A.image[0].isDataTexture,ge=[];for(let Q=0;Q<6;Q++)!he&&!ie?ge[Q]=_(A.image[Q],!0,i.maxCubemapSize):ge[Q]=ie?A.image[Q].image:A.image[Q],ge[Q]=De(A,ge[Q]);const ke=ge[0],Fe=s.convert(A.format,A.colorSpace),ce=s.convert(A.type),He=S(A.internalFormat,Fe,ce,A.colorSpace),U=A.isVideoTexture!==!0,ue=J.__version===void 0||Z===!0,ee=K.dataReady;let _e=w(A,ke);Te(r.TEXTURE_CUBE_MAP,A);let re;if(he){U&&ue&&t.texStorage2D(r.TEXTURE_CUBE_MAP,_e,He,ke.width,ke.height);for(let Q=0;Q<6;Q++){re=ge[Q].mipmaps;for(let be=0;be<re.length;be++){const Ve=re[be];A.format!==xi?Fe!==null?U?ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,Ve.width,Ve.height,Fe,Ve.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,He,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,Ve.width,Ve.height,Fe,ce,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,He,Ve.width,Ve.height,0,Fe,ce,Ve.data)}}}else{if(re=A.mipmaps,U&&ue){re.length>0&&_e++;const Q=vt(ge[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,_e,He,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){U?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ge[Q].width,ge[Q].height,Fe,ce,ge[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,He,ge[Q].width,ge[Q].height,0,Fe,ce,ge[Q].data);for(let be=0;be<re.length;be++){const dt=re[be].image[Q].image;U?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,dt.width,dt.height,Fe,ce,dt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,He,dt.width,dt.height,0,Fe,ce,dt.data)}}else{U?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Fe,ce,ge[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,He,Fe,ce,ge[Q]);for(let be=0;be<re.length;be++){const Ve=re[be];U?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,Fe,ce,Ve.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,He,Fe,ce,Ve.image[Q])}}}m(A)&&p(r.TEXTURE_CUBE_MAP),J.__version=K.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function xe(D,A,G,Z,K,J){const Ee=s.convert(G.format,G.colorSpace),le=s.convert(G.type),Re=S(G.internalFormat,Ee,le,G.colorSpace),he=n.get(A),ie=n.get(G);if(ie.__renderTarget=A,!he.__hasExternalTextures){const ge=Math.max(1,A.width>>J),ke=Math.max(1,A.height>>J);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,J,Re,ge,ke,A.depth,0,Ee,le,null):t.texImage2D(K,J,Re,ge,ke,0,Ee,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),je(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,K,ie.__webglTexture,0,Se(A)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,K,ie.__webglTexture,J),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Be(D,A,G){if(r.bindRenderbuffer(r.RENDERBUFFER,D),A.depthBuffer){const Z=A.depthTexture,K=Z&&Z.isDepthTexture?Z.type:null,J=v(A.stencilBuffer,K),Ee=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=Se(A);je(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,J,A.width,A.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,J,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,J,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,D)}else{const Z=A.textures;for(let K=0;K<Z.length;K++){const J=Z[K],Ee=s.convert(J.format,J.colorSpace),le=s.convert(J.type),Re=S(J.internalFormat,Ee,le,J.colorSpace),he=Se(A);G&&je(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,Re,A.width,A.height):je(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,Re,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Re,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function de(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(A.depthTexture);Z.__renderTarget=A,(!Z.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);const K=Z.__webglTexture,J=Se(A);if(A.depthTexture.format===Ca)je(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(A.depthTexture.format===Pa)je(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function $e(D){const A=n.get(D),G=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const Z=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Z){const K=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Z.removeEventListener("dispose",K)};Z.addEventListener("dispose",K),A.__depthDisposeCallback=K}A.__boundDepthTexture=Z}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Z=D.texture.mipmaps;Z&&Z.length>0?de(A.__webglFramebuffer[0],D):de(A.__webglFramebuffer,D)}else if(G){A.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[Z]),A.__webglDepthbuffer[Z]===void 0)A.__webglDepthbuffer[Z]=r.createRenderbuffer(),Be(A.__webglDepthbuffer[Z],D,!1);else{const K=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=A.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,J)}}else{const Z=D.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Be(A.__webglDepthbuffer,D,!1);else{const K=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,J)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(D,A,G){const Z=n.get(D);A!==void 0&&xe(Z.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&$e(D)}function Ae(D){const A=D.texture,G=n.get(D),Z=n.get(A);D.addEventListener("dispose",E);const K=D.textures,J=D.isWebGLCubeRenderTarget===!0,Ee=K.length>1;if(Ee||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=A.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let le=0;le<6;le++)if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer[le]=[];for(let Re=0;Re<A.mipmaps.length;Re++)G.__webglFramebuffer[le][Re]=r.createFramebuffer()}else G.__webglFramebuffer[le]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer=[];for(let le=0;le<A.mipmaps.length;le++)G.__webglFramebuffer[le]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Ee)for(let le=0,Re=K.length;le<Re;le++){const he=n.get(K[le]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&je(D)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let le=0;le<K.length;le++){const Re=K[le];G.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[le]);const he=s.convert(Re.format,Re.colorSpace),ie=s.convert(Re.type),ge=S(Re.internalFormat,he,ie,Re.colorSpace,D.isXRRenderTarget===!0),ke=Se(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,ge,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,G.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Be(G.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Te(r.TEXTURE_CUBE_MAP,A);for(let le=0;le<6;le++)if(A.mipmaps&&A.mipmaps.length>0)for(let Re=0;Re<A.mipmaps.length;Re++)xe(G.__webglFramebuffer[le][Re],D,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,Re);else xe(G.__webglFramebuffer[le],D,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(A)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let le=0,Re=K.length;le<Re;le++){const he=K[le],ie=n.get(he);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture),Te(r.TEXTURE_2D,he),xe(G.__webglFramebuffer,D,he,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),m(he)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(le=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),Te(le,A),A.mipmaps&&A.mipmaps.length>0)for(let Re=0;Re<A.mipmaps.length;Re++)xe(G.__webglFramebuffer[Re],D,A,r.COLOR_ATTACHMENT0,le,Re);else xe(G.__webglFramebuffer,D,A,r.COLOR_ATTACHMENT0,le,0);m(A)&&p(le),t.unbindTexture()}D.depthBuffer&&$e(D)}function I(D){const A=D.textures;for(let G=0,Z=A.length;G<Z;G++){const K=A[G];if(m(K)){const J=M(D),Ee=n.get(K).__webglTexture;t.bindTexture(J,Ee),p(J),t.unbindTexture()}}}const pt=[],Je=[];function W(D){if(D.samples>0){if(je(D)===!1){const A=D.textures,G=D.width,Z=D.height;let K=r.COLOR_BUFFER_BIT;const J=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=n.get(D),le=A.length>1;if(le)for(let he=0;he<A.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Re=D.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let he=0;he<A.length;he++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[he]);const ie=n.get(A[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,G,Z,0,0,G,Z,K,r.NEAREST),l===!0&&(pt.length=0,Je.length=0,pt.push(r.COLOR_ATTACHMENT0+he),D.depthBuffer&&D.resolveDepthBuffer===!1&&(pt.push(J),Je.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Je)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let he=0;he<A.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[he]);const ie=n.get(A[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const A=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function Se(D){return Math.min(i.maxSamples,D.samples)}function je(D){const A=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ue(D){const A=o.render.frame;u.get(D)!==A&&(u.set(D,A),D.update())}function De(D,A){const G=D.colorSpace,Z=D.format,K=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==Rs&&G!==Ur&&(ft.getTransfer(G)===St?(Z!==xi||K!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),A}function vt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=V,this.rebindTextures=Ke,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=je}function D1(r,e){function t(n,i=Ur){let s;const o=ft.getTransfer(i);if(n===gr)return r.UNSIGNED_BYTE;if(n===Nf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Of)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ag)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===sg)return r.BYTE;if(n===og)return r.SHORT;if(n===wo)return r.UNSIGNED_SHORT;if(n===If)return r.INT;if(n===As)return r.UNSIGNED_INT;if(n===vi)return r.FLOAT;if(n===yn)return r.HALF_FLOAT;if(n===lg)return r.ALPHA;if(n===cg)return r.RGB;if(n===xi)return r.RGBA;if(n===Ca)return r.DEPTH_COMPONENT;if(n===Pa)return r.DEPTH_STENCIL;if(n===ug)return r.RED;if(n===Ff)return r.RED_INTEGER;if(n===hg)return r.RG;if(n===zf)return r.RG_INTEGER;if(n===Bf)return r.RGBA_INTEGER;if(n===uc||n===hc||n===fc||n===dc)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===uc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===uc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ch||n===Ph||n===Dh||n===Lh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ch)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ph)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uh||n===Ih||n===Nh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Uh||n===Ih)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Nh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oh||n===Fh||n===zh||n===Bh||n===kh||n===Vh||n===Hh||n===Gh||n===Wh||n===Xh||n===qh||n===Yh||n===$h||n===Jh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Oh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$h)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pc||n===Kh||n===Zh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===pc)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fg||n===jh||n===Qh||n===ef)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===pc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===jh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ef)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ra?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const L1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new un,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new It({vertexShader:L1,fragmentShader:U1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ni(new Oo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N1 extends No{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new I1,m=t.getContextAttributes();let p=null,M=null;const S=[],v=[],w=new Xe;let T=null;const E=new mi;E.viewport=new Dt;const b=new mi;b.viewport=new Dt;const x=[E,b],y=new nx;let C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=S[q];return ne===void 0&&(ne=new bu,S[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=S[q];return ne===void 0&&(ne=new bu,S[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=S[q];return ne===void 0&&(ne=new bu,S[q]=ne),ne.getHandSpace()};function N(q){const ne=v.indexOf(q.inputSource);if(ne===-1)return;const fe=S[ne];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||o),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",z);for(let q=0;q<S.length;q++){const ne=v[q];ne!==null&&(v[q]=null,S[q].disconnect(ne))}C=null,L=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,M=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",F),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,oe=null,xe=null;m.depth&&(xe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Pa:Ca,oe=m.stencil?Ra:As);const Be={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new gn(f.textureWidth,f.textureHeight,{format:xi,type:gr,depthTexture:new Wf(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new gn(d.framebufferWidth,d.framebufferHeight,{format:xi,type:gr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),we.setContext(i),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(q){for(let ne=0;ne<q.removed.length;ne++){const fe=q.removed[ne],oe=v.indexOf(fe);oe>=0&&(v[oe]=null,S[oe].disconnect(fe))}for(let ne=0;ne<q.added.length;ne++){const fe=q.added[ne];let oe=v.indexOf(fe);if(oe===-1){for(let Be=0;Be<S.length;Be++)if(Be>=v.length){v.push(fe),oe=Be;break}else if(v[Be]===null){v[Be]=fe,oe=Be;break}if(oe===-1)break}const xe=S[oe];xe&&xe.connect(fe)}}const O=new $,H=new $;function V(q,ne,fe){O.setFromMatrixPosition(ne.matrixWorld),H.setFromMatrixPosition(fe.matrixWorld);const oe=O.distanceTo(H),xe=ne.projectionMatrix.elements,Be=fe.projectionMatrix.elements,de=xe[14]/(xe[10]-1),$e=xe[14]/(xe[10]+1),Ke=(xe[9]+1)/xe[5],Ae=(xe[9]-1)/xe[5],I=(xe[8]-1)/xe[0],pt=(Be[8]+1)/Be[0],Je=de*I,W=de*pt,Se=oe/(-I+pt),je=Se*-I;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(je),q.translateZ(Se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),xe[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ue=de+Se,De=$e+Se,vt=Je-je,D=W+(oe-je),A=Ke*$e/De*Ue,G=Ae*$e/De*Ue;q.projectionMatrix.makePerspective(vt,D,A,G,Ue,De),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function j(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ne=q.near,fe=q.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),y.near=b.near=E.near=ne,y.far=b.far=E.far=fe,(C!==y.near||L!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,L=y.far),E.layers.mask=q.layers.mask|2,b.layers.mask=q.layers.mask|4,y.layers.mask=E.layers.mask|b.layers.mask;const oe=q.parent,xe=y.cameras;j(y,oe);for(let Be=0;Be<xe.length;Be++)j(xe[Be],oe);xe.length===2?V(y,E,b):y.projectionMatrix.copy(E.projectionMatrix),P(q,y,oe)};function P(q,ne,fe){fe===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=tf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let te=null;function Te(q,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){const fe=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let oe=!1;fe.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let de=0;de<fe.length;de++){const $e=fe[de];let Ke=null;if(d!==null)Ke=d.getViewport($e);else{const I=h.getViewSubImage(f,$e);Ke=I.viewport,de===0&&(e.setRenderTargetTextures(M,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(M))}let Ae=x[de];Ae===void 0&&(Ae=new mi,Ae.layers.enable(de),Ae.viewport=new Dt,x[de]=Ae),Ae.matrix.fromArray($e.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray($e.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),de===0&&(y.matrix.copy(Ae.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(Ae)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const de=h.getDepthInformation(fe[0]);de&&de.isValid&&de.texture&&_.init(e,de,i.renderState)}}for(let fe=0;fe<S.length;fe++){const oe=v[fe],xe=S[fe];oe!==null&&xe!==void 0&&xe.update(oe,ne,c||o)}te&&te(q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const we=new Cg;we.setAnimationLoop(Te),this.setAnimationLoop=function(q){te=q},this.dispose=function(){}}}const is=new Wi,O1=new qt;function F1(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Tg(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),S=M.envMap,v=M.envMapRotation;S&&(m.envMap.value=S,is.copy(v),is.x*=-1,is.y*=-1,is.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(O1.makeRotationFromEuler(is)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function z1(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const v=S.program;n.uniformBlockBinding(M,v)}function c(M,S){let v=i[M.id];v===void 0&&(g(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",m));const w=S.program;n.updateUBOMapping(M,w);const T=e.render.frame;s[M.id]!==T&&(f(M),s[M.id]=T)}function u(M){const S=h();M.__bindingPointIndex=S;const v=r.createBuffer(),w=M.__size,T=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,w,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const S=i[M.id],v=M.uniforms,w=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let T=0,E=v.length;T<E;T++){const b=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,y=b.length;x<y;x++){const C=b[x];if(d(C,T,x,w)===!0){const L=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let z=0;z<N.length;z++){const O=N[z],H=_(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,L+F,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):(O.toArray(C.__data,F),F+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,S,v,w){const T=M.value,E=S+"_"+v;if(w[E]===void 0)return typeof T=="number"||typeof T=="boolean"?w[E]=T:w[E]=T.clone(),!0;{const b=w[E];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return w[E]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function g(M){const S=M.uniforms;let v=0;const w=16;for(let E=0,b=S.length;E<b;E++){const x=Array.isArray(S[E])?S[E]:[S[E]];for(let y=0,C=x.length;y<C;y++){const L=x[y],N=Array.isArray(L.value)?L.value:[L.value];for(let F=0,z=N.length;F<z;F++){const O=N[F],H=_(O),V=v%w,j=V%H.boundary,P=V+j;v+=j,P!==0&&w-P<H.storage&&(v+=w-P),L.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=H.storage}}}const T=v%w;return T>0&&(v+=w-T),M.__size=v,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Yf{constructor(e={}){const{canvas:t=cv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=pi;let T=0,E=0,b=null,x=-1,y=null;const C=new Dt,L=new Dt;let N=null;const F=new et(0);let z=0,O=t.width,H=t.height,V=1,j=null,P=null;const te=new Dt(0,0,O,H),Te=new Dt(0,0,O,H);let we=!1;const q=new bg;let ne=!1,fe=!1;const oe=new qt,xe=new qt,Be=new $,de=new Dt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function Ae(){return b===null?V:1}let I=n;function pt(R,k){return t.getContext(R,k)}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uf}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",Q,!1),I===null){const k="webgl2";if(I=pt(k,R),I===null)throw pt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Je,W,Se,je,Ue,De,vt,D,A,G,Z,K,J,Ee,le,Re,he,ie,ge,ke,Fe,ce,He,U;function ue(){Je=new JS(I),Je.init(),ce=new D1(I,Je),W=new HS(I,Je,e,ce),Se=new C1(I,Je),W.reverseDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),je=new jS(I),Ue=new g1,De=new P1(I,Je,Se,Ue,W,ce,je),vt=new WS(v),D=new $S(v),A=new rx(I),He=new kS(I,A),G=new KS(I,A,je,He),Z=new eM(I,G,A,je),ge=new QS(I,W,De),Re=new GS(Ue),K=new m1(v,vt,D,Je,W,He,Re),J=new F1(v,Ue),Ee=new v1,le=new E1(Je),ie=new BS(v,vt,D,Se,Z,d,l),he=new A1(v,Z,W),U=new z1(I,je,W,Se),ke=new VS(I,Je,je),Fe=new ZS(I,Je,je),je.programs=K.programs,v.capabilities=W,v.extensions=Je,v.properties=Ue,v.renderLists=Ee,v.shadowMap=he,v.state=Se,v.info=je}ue();const ee=new N1(v,I);this.xr=ee,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=Je.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Je.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(O,H,!1))},this.getSize=function(R){return R.set(O,H)},this.setSize=function(R,k,Y=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,H=k,t.width=Math.floor(R*V),t.height=Math.floor(k*V),Y===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(O*V,H*V).floor()},this.setDrawingBufferSize=function(R,k,Y){O=R,H=k,V=Y,t.width=Math.floor(R*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,k,Y,X){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,k,Y,X),Se.viewport(C.copy(te).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(Te)},this.setScissor=function(R,k,Y,X){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,k,Y,X),Se.scissor(L.copy(Te).multiplyScalar(V).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(R){Se.setScissorTest(we=R)},this.setOpaqueSort=function(R){j=R},this.setTransparentSort=function(R){P=R},this.getClearColor=function(R){return R.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,Y=!0){let X=0;if(R){let B=!1;if(b!==null){const se=b.texture.format;B=se===Bf||se===zf||se===Ff}if(B){const se=b.texture.type,me=se===gr||se===As||se===wo||se===Ra||se===Nf||se===Of,Pe=ie.getClearColor(),Me=ie.getClearAlpha(),Oe=Pe.r,Ge=Pe.g,Ne=Pe.b;me?(g[0]=Oe,g[1]=Ge,g[2]=Ne,g[3]=Me,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Oe,_[1]=Ge,_[2]=Ne,_[3]=Me,I.clearBufferiv(I.COLOR,0,_))}else X|=I.COLOR_BUFFER_BIT}k&&(X|=I.DEPTH_BUFFER_BIT),Y&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),ie.dispose(),Ee.dispose(),le.dispose(),Ue.dispose(),vt.dispose(),D.dispose(),Z.dispose(),He.dispose(),U.dispose(),K.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",pe),ee.removeEventListener("sessionend",Ye),Ie.stop()};function _e(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=je.autoReset,k=he.enabled,Y=he.autoUpdate,X=he.needsUpdate,B=he.type;ue(),je.autoReset=R,he.enabled=k,he.autoUpdate=Y,he.needsUpdate=X,he.type=B}function Q(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function be(R){const k=R.target;k.removeEventListener("dispose",be),Ve(k)}function Ve(R){dt(R),Ue.remove(R)}function dt(R){const k=Ue.get(R).programs;k!==void 0&&(k.forEach(function(Y){K.releaseProgram(Y)}),R.isShaderMaterial&&K.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,Y,X,B,se){k===null&&(k=$e);const me=B.isMesh&&B.matrixWorld.determinant()<0,Pe=qn(R,k,Y,X,B);Se.setMaterial(X,me);let Me=Y.index,Oe=1;if(X.wireframe===!0){if(Me=G.getWireframeAttribute(Y),Me===void 0)return;Oe=2}const Ge=Y.drawRange,Ne=Y.attributes.position;let Ze=Ge.start*Oe,xt=(Ge.start+Ge.count)*Oe;se!==null&&(Ze=Math.max(Ze,se.start*Oe),xt=Math.min(xt,(se.start+se.count)*Oe)),Me!==null?(Ze=Math.max(Ze,0),xt=Math.min(xt,Me.count)):Ne!=null&&(Ze=Math.max(Ze,0),xt=Math.min(xt,Ne.count));const Lt=xt-Ze;if(Lt<0||Lt===1/0)return;He.setup(B,X,Pe,Y,Me);let Ot,ht=ke;if(Me!==null&&(Ot=A.get(Me),ht=Fe,ht.setIndex(Ot)),B.isMesh)X.wireframe===!0?(Se.setLineWidth(X.wireframeLinewidth*Ae()),ht.setMode(I.LINES)):ht.setMode(I.TRIANGLES);else if(B.isLine){let We=X.linewidth;We===void 0&&(We=1),Se.setLineWidth(We*Ae()),B.isLineSegments?ht.setMode(I.LINES):B.isLineLoop?ht.setMode(I.LINE_LOOP):ht.setMode(I.LINE_STRIP)}else B.isPoints?ht.setMode(I.POINTS):B.isSprite&&ht.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)po("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))ht.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const We=B._multiDrawStarts,an=B._multiDrawCounts,gt=B._multiDrawCount,Ai=Me?A.get(Me).bytesPerElement:1,Ns=Ue.get(X).currentProgram.getUniforms();for(let Yn=0;Yn<gt;Yn++)Ns.setValue(I,"_gl_DrawID",Yn),ht.render(We[Yn]/Ai,an[Yn])}else if(B.isInstancedMesh)ht.renderInstances(Ze,Lt,B.count);else if(Y.isInstancedBufferGeometry){const We=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,an=Math.min(Y.instanceCount,We);ht.renderInstances(Ze,Lt,an)}else ht.render(Ze,Lt)};function ye(R,k,Y){R.transparent===!0&&R.side===Ui&&R.forceSinglePass===!1?(R.side=zn,R.needsUpdate=!0,Mt(R,k,Y),R.side=qr,R.needsUpdate=!0,Mt(R,k,Y),R.side=Ui):Mt(R,k,Y)}this.compile=function(R,k,Y=null){Y===null&&(Y=R),p=le.get(Y),p.init(k),S.push(p),Y.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),R!==Y&&R.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const X=new Set;return R.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const se=B.material;if(se)if(Array.isArray(se))for(let me=0;me<se.length;me++){const Pe=se[me];ye(Pe,Y,B),X.add(Pe)}else ye(se,Y,B),X.add(se)}),p=S.pop(),X},this.compileAsync=function(R,k,Y=null){const X=this.compile(R,k,Y);return new Promise(B=>{function se(){if(X.forEach(function(me){Ue.get(me).currentProgram.isReady()&&X.delete(me)}),X.size===0){B(R);return}setTimeout(se,10)}Je.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Le=null;function Qe(R){Le&&Le(R)}function pe(){Ie.stop()}function Ye(){Ie.start()}const Ie=new Cg;Ie.setAnimationLoop(Qe),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(R){Le=R,ee.setAnimationLoop(R),R===null?Ie.stop():Ie.start()},ee.addEventListener("sessionstart",pe),ee.addEventListener("sessionend",Ye),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(k),k=ee.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,k,b),p=le.get(R,S.length),p.init(k),S.push(p),xe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(xe),fe=this.localClippingEnabled,ne=Re.init(this.clippingPlanes,fe),m=Ee.get(R,M.length),m.init(),M.push(m),ee.enabled===!0&&ee.isPresenting===!0){const se=v.xr.getDepthSensingMesh();se!==null&&qe(se,k,-1/0,v.sortObjects)}qe(R,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(j,P),Ke=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Ke&&ie.addToRenderList(m,R),this.info.render.frame++,ne===!0&&Re.beginShadows();const Y=p.state.shadowsArray;he.render(Y,R,k),ne===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(p.setupLights(),k.isArrayCamera){const se=k.cameras;if(B.length>0)for(let me=0,Pe=se.length;me<Pe;me++){const Me=se[me];rt(X,B,R,Me)}Ke&&ie.render(R);for(let me=0,Pe=se.length;me<Pe;me++){const Me=se[me];zt(m,R,Me,Me.viewport)}}else B.length>0&&rt(X,B,R,k),Ke&&ie.render(R),zt(m,R,k);b!==null&&E===0&&(De.updateMultisampleRenderTarget(b),De.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(v,R,k),He.resetDefaultState(),x=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],ne===!0&&Re.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function qe(R,k,Y,X){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){X&&de.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xe);const me=Z.update(R),Pe=R.material;Pe.visible&&m.push(R,me,Pe,Y,de.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){const me=Z.update(R),Pe=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),de.copy(R.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),de.copy(me.boundingSphere.center)),de.applyMatrix4(R.matrixWorld).applyMatrix4(xe)),Array.isArray(Pe)){const Me=me.groups;for(let Oe=0,Ge=Me.length;Oe<Ge;Oe++){const Ne=Me[Oe],Ze=Pe[Ne.materialIndex];Ze&&Ze.visible&&m.push(R,me,Ze,Y,de.z,Ne)}}else Pe.visible&&m.push(R,me,Pe,Y,de.z,null)}}const se=R.children;for(let me=0,Pe=se.length;me<Pe;me++)qe(se[me],k,Y,X)}function zt(R,k,Y,X){const B=R.opaque,se=R.transmissive,me=R.transparent;p.setupLightsView(Y),ne===!0&&Re.setGlobalState(v.clippingPlanes,Y),X&&Se.viewport(C.copy(X)),B.length>0&&bt(B,k,Y),se.length>0&&bt(se,k,Y),me.length>0&&bt(me,k,Y),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function rt(R,k,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new gn(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?yn:gr,minFilter:Ir,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const se=p.state.transmissionRenderTarget[X.id],me=X.viewport||C;se.setSize(me.z*v.transmissionResolutionScale,me.w*v.transmissionResolutionScale);const Pe=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(F),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),Ke&&ie.render(Y);const Me=v.toneMapping;v.toneMapping=Hr;const Oe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ne===!0&&Re.setGlobalState(v.clippingPlanes,X),bt(R,Y,X),De.updateMultisampleRenderTarget(se),De.updateRenderTargetMipmap(se),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ne=0,Ze=k.length;Ne<Ze;Ne++){const xt=k[Ne],Lt=xt.object,Ot=xt.geometry,ht=xt.material,We=xt.group;if(ht.side===Ui&&Lt.layers.test(X.layers)){const an=ht.side;ht.side=zn,ht.needsUpdate=!0,Yt(Lt,Y,X,Ot,ht,We),ht.side=an,ht.needsUpdate=!0,Ge=!0}}Ge===!0&&(De.updateMultisampleRenderTarget(se),De.updateRenderTargetMipmap(se))}v.setRenderTarget(Pe),v.setClearColor(F,z),Oe!==void 0&&(X.viewport=Oe),v.toneMapping=Me}function bt(R,k,Y){const X=k.isScene===!0?k.overrideMaterial:null;for(let B=0,se=R.length;B<se;B++){const me=R[B],Pe=me.object,Me=me.geometry,Oe=me.group;let Ge=me.material;Ge.allowOverride===!0&&X!==null&&(Ge=X),Pe.layers.test(Y.layers)&&Yt(Pe,k,Y,Me,Ge,Oe)}}function Yt(R,k,Y,X,B,se){R.onBeforeRender(v,k,Y,X,B,se),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),B.onBeforeRender(v,k,Y,X,R,se),B.transparent===!0&&B.side===Ui&&B.forceSinglePass===!1?(B.side=zn,B.needsUpdate=!0,v.renderBufferDirect(Y,k,X,B,R,se),B.side=qr,B.needsUpdate=!0,v.renderBufferDirect(Y,k,X,B,R,se),B.side=Ui):v.renderBufferDirect(Y,k,X,B,R,se),R.onAfterRender(v,k,Y,X,B,se)}function Mt(R,k,Y){k.isScene!==!0&&(k=$e);const X=Ue.get(R),B=p.state.lights,se=p.state.shadowsArray,me=B.state.version,Pe=K.getParameters(R,B.state,se,k,Y),Me=K.getProgramCacheKey(Pe);let Oe=X.programs;X.environment=R.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(R.isMeshStandardMaterial?D:vt).get(R.envMap||X.environment),X.envMapRotation=X.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Oe===void 0&&(R.addEventListener("dispose",be),Oe=new Map,X.programs=Oe);let Ge=Oe.get(Me);if(Ge!==void 0){if(X.currentProgram===Ge&&X.lightsStateVersion===me)return mt(R,Pe),Ge}else Pe.uniforms=K.getUniforms(R),R.onBeforeCompile(Pe,v),Ge=K.acquireProgram(Pe,Me),Oe.set(Me,Ge),X.uniforms=Pe.uniforms;const Ne=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ne.clippingPlanes=Re.uniform),mt(R,Pe),X.needsLights=Mn(R),X.lightsStateVersion=me,X.needsLights&&(Ne.ambientLightColor.value=B.state.ambient,Ne.lightProbe.value=B.state.probe,Ne.directionalLights.value=B.state.directional,Ne.directionalLightShadows.value=B.state.directionalShadow,Ne.spotLights.value=B.state.spot,Ne.spotLightShadows.value=B.state.spotShadow,Ne.rectAreaLights.value=B.state.rectArea,Ne.ltc_1.value=B.state.rectAreaLTC1,Ne.ltc_2.value=B.state.rectAreaLTC2,Ne.pointLights.value=B.state.point,Ne.pointLightShadows.value=B.state.pointShadow,Ne.hemisphereLights.value=B.state.hemi,Ne.directionalShadowMap.value=B.state.directionalShadowMap,Ne.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ne.spotShadowMap.value=B.state.spotShadowMap,Ne.spotLightMatrix.value=B.state.spotLightMatrix,Ne.spotLightMap.value=B.state.spotLightMap,Ne.pointShadowMap.value=B.state.pointShadowMap,Ne.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ge,X.uniformsList=null,Ge}function Tt(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=mc.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function mt(R,k){const Y=Ue.get(R);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function qn(R,k,Y,X,B){k.isScene!==!0&&(k=$e),De.resetTextureUnits();const se=k.fog,me=X.isMeshStandardMaterial?k.environment:null,Pe=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Rs,Me=(X.isMeshStandardMaterial?D:vt).get(X.envMap||me),Oe=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ge=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ne=!!Y.morphAttributes.position,Ze=!!Y.morphAttributes.normal,xt=!!Y.morphAttributes.color;let Lt=Hr;X.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Lt=v.toneMapping);const Ot=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ht=Ot!==void 0?Ot.length:0,We=Ue.get(X),an=p.state.lights;if(ne===!0&&(fe===!0||R!==y)){const Tn=R===y&&X.id===x;Re.setState(X,R,Tn)}let gt=!1;X.version===We.__version?(We.needsLights&&We.lightsStateVersion!==an.state.version||We.outputColorSpace!==Pe||B.isBatchedMesh&&We.batching===!1||!B.isBatchedMesh&&We.batching===!0||B.isBatchedMesh&&We.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&We.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&We.instancing===!1||!B.isInstancedMesh&&We.instancing===!0||B.isSkinnedMesh&&We.skinning===!1||!B.isSkinnedMesh&&We.skinning===!0||B.isInstancedMesh&&We.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&We.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&We.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&We.instancingMorph===!1&&B.morphTexture!==null||We.envMap!==Me||X.fog===!0&&We.fog!==se||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Re.numPlanes||We.numIntersection!==Re.numIntersection)||We.vertexAlphas!==Oe||We.vertexTangents!==Ge||We.morphTargets!==Ne||We.morphNormals!==Ze||We.morphColors!==xt||We.toneMapping!==Lt||We.morphTargetsCount!==ht)&&(gt=!0):(gt=!0,We.__version=X.version);let Ai=We.currentProgram;gt===!0&&(Ai=Mt(X,k,B));let Ns=!1,Yn=!1,ko=!1;const Ct=Ai.getUniforms(),li=We.uniforms;if(Se.useProgram(Ai.program)&&(Ns=!0,Yn=!0,ko=!0),X.id!==x&&(x=X.id,Yn=!0),Ns||y!==R){Se.buffers.depth.getReversed()?(oe.copy(R.projectionMatrix),hv(oe),fv(oe),Ct.setValue(I,"projectionMatrix",oe)):Ct.setValue(I,"projectionMatrix",R.projectionMatrix),Ct.setValue(I,"viewMatrix",R.matrixWorldInverse);const Un=Ct.map.cameraPosition;Un!==void 0&&Un.setValue(I,Be.setFromMatrixPosition(R.matrixWorld)),W.logarithmicDepthBuffer&&Ct.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ct.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Yn=!0,ko=!0)}if(B.isSkinnedMesh){Ct.setOptional(I,B,"bindMatrix"),Ct.setOptional(I,B,"bindMatrixInverse");const Tn=B.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ct.setValue(I,"boneTexture",Tn.boneTexture,De))}B.isBatchedMesh&&(Ct.setOptional(I,B,"batchingTexture"),Ct.setValue(I,"batchingTexture",B._matricesTexture,De),Ct.setOptional(I,B,"batchingIdTexture"),Ct.setValue(I,"batchingIdTexture",B._indirectTexture,De),Ct.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&Ct.setValue(I,"batchingColorTexture",B._colorsTexture,De));const ci=Y.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&ge.update(B,Y,Ai),(Yn||We.receiveShadow!==B.receiveShadow)&&(We.receiveShadow=B.receiveShadow,Ct.setValue(I,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(li.envMap.value=Me,li.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(li.envMapIntensity.value=k.environmentIntensity),Yn&&(Ct.setValue(I,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Rt(li,ko),se&&X.fog===!0&&J.refreshFogUniforms(li,se),J.refreshMaterialUniforms(li,X,V,H,p.state.transmissionRenderTarget[R.id]),mc.upload(I,Tt(We),li,De)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(mc.upload(I,Tt(We),li,De),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ct.setValue(I,"center",B.center),Ct.setValue(I,"modelViewMatrix",B.modelViewMatrix),Ct.setValue(I,"normalMatrix",B.normalMatrix),Ct.setValue(I,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Tn=X.uniformsGroups;for(let Un=0,nu=Tn.length;Un<nu;Un++){const Zr=Tn[Un];U.update(Zr,Ai),U.bind(Zr,Ai)}}return Ai}function Rt(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Mn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,k,Y){const X=Ue.get(R);X.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ue.get(R.texture).__webglTexture=k,Ue.get(R.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const Y=Ue.get(R);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const ai=I.createFramebuffer();this.setRenderTarget=function(R,k=0,Y=0){b=R,T=k,E=Y;let X=!0,B=null,se=!1,me=!1;if(R){const Me=Ue.get(R);if(Me.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(Me.__webglFramebuffer===void 0)De.setupRenderTarget(R);else if(Me.__hasExternalTextures)De.rebindTextures(R,Ue.get(R.texture).__webglTexture,Ue.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ne=R.depthTexture;if(Me.__boundDepthTexture!==Ne){if(Ne!==null&&Ue.has(Ne)&&(R.width!==Ne.image.width||R.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(R)}}const Oe=R.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(me=!0);const Ge=Ue.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[k])?B=Ge[k][Y]:B=Ge[k],se=!0):R.samples>0&&De.useMultisampledRTT(R)===!1?B=Ue.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?B=Ge[Y]:B=Ge,C.copy(R.viewport),L.copy(R.scissor),N=R.scissorTest}else C.copy(te).multiplyScalar(V).floor(),L.copy(Te).multiplyScalar(V).floor(),N=we;if(Y!==0&&(B=ai),Se.bindFramebuffer(I.FRAMEBUFFER,B)&&X&&Se.drawBuffers(R,B),Se.viewport(C),Se.scissor(L),Se.setScissorTest(N),se){const Me=Ue.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Me.__webglTexture,Y)}else if(me){const Me=Ue.get(R.texture),Oe=k;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.__webglTexture,Y,Oe)}else if(R!==null&&Y!==0){const Me=Ue.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Me.__webglTexture,Y)}x=-1},this.readRenderTargetPixels=function(R,k,Y,X,B,se,me,Pe=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Se.bindFramebuffer(I.FRAMEBUFFER,Me);try{const Oe=R.textures[Pe],Ge=Oe.format,Ne=Oe.type;if(!W.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-X&&Y>=0&&Y<=R.height-B&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pe),I.readPixels(k,Y,X,B,ce.convert(Ge),ce.convert(Ne),se))}finally{const Oe=b!==null?Ue.get(b).__webglFramebuffer:null;Se.bindFramebuffer(I.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(R,k,Y,X,B,se,me,Pe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(k>=0&&k<=R.width-X&&Y>=0&&Y<=R.height-B){Se.bindFramebuffer(I.FRAMEBUFFER,Me);const Oe=R.textures[Pe],Ge=Oe.format,Ne=Oe.type;if(!W.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.bufferData(I.PIXEL_PACK_BUFFER,se.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pe),I.readPixels(k,Y,X,B,ce.convert(Ge),ce.convert(Ne),0);const xt=b!==null?Ue.get(b).__webglFramebuffer:null;Se.bindFramebuffer(I.FRAMEBUFFER,xt);const Lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await uv(I,Lt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,se),I.deleteBuffer(Ze),I.deleteSync(Lt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,Y=0){const X=Math.pow(2,-Y),B=Math.floor(R.image.width*X),se=Math.floor(R.image.height*X),me=k!==null?k.x:0,Pe=k!==null?k.y:0;De.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,me,Pe,B,se),Se.unbindTexture()};const $t=I.createFramebuffer(),Jt=I.createFramebuffer();this.copyTextureToTexture=function(R,k,Y=null,X=null,B=0,se=null){se===null&&(B!==0?(po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=B,B=0):se=0);let me,Pe,Me,Oe,Ge,Ne,Ze,xt,Lt;const Ot=R.isCompressedTexture?R.mipmaps[se]:R.image;if(Y!==null)me=Y.max.x-Y.min.x,Pe=Y.max.y-Y.min.y,Me=Y.isBox3?Y.max.z-Y.min.z:1,Oe=Y.min.x,Ge=Y.min.y,Ne=Y.isBox3?Y.min.z:0;else{const ci=Math.pow(2,-B);me=Math.floor(Ot.width*ci),Pe=Math.floor(Ot.height*ci),R.isDataArrayTexture?Me=Ot.depth:R.isData3DTexture?Me=Math.floor(Ot.depth*ci):Me=1,Oe=0,Ge=0,Ne=0}X!==null?(Ze=X.x,xt=X.y,Lt=X.z):(Ze=0,xt=0,Lt=0);const ht=ce.convert(k.format),We=ce.convert(k.type);let an;k.isData3DTexture?(De.setTexture3D(k,0),an=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(De.setTexture2DArray(k,0),an=I.TEXTURE_2D_ARRAY):(De.setTexture2D(k,0),an=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const gt=I.getParameter(I.UNPACK_ROW_LENGTH),Ai=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ns=I.getParameter(I.UNPACK_SKIP_PIXELS),Yn=I.getParameter(I.UNPACK_SKIP_ROWS),ko=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ot.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ot.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Oe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ne);const Ct=R.isDataArrayTexture||R.isData3DTexture,li=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const ci=Ue.get(R),Tn=Ue.get(k),Un=Ue.get(ci.__renderTarget),nu=Ue.get(Tn.__renderTarget);Se.bindFramebuffer(I.READ_FRAMEBUFFER,Un.__webglFramebuffer),Se.bindFramebuffer(I.DRAW_FRAMEBUFFER,nu.__webglFramebuffer);for(let Zr=0;Zr<Me;Zr++)Ct&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ue.get(R).__webglTexture,B,Ne+Zr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ue.get(k).__webglTexture,se,Lt+Zr)),I.blitFramebuffer(Oe,Ge,me,Pe,Ze,xt,me,Pe,I.DEPTH_BUFFER_BIT,I.NEAREST);Se.bindFramebuffer(I.READ_FRAMEBUFFER,null),Se.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||R.isRenderTargetTexture||Ue.has(R)){const ci=Ue.get(R),Tn=Ue.get(k);Se.bindFramebuffer(I.READ_FRAMEBUFFER,$t),Se.bindFramebuffer(I.DRAW_FRAMEBUFFER,Jt);for(let Un=0;Un<Me;Un++)Ct?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ci.__webglTexture,B,Ne+Un):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ci.__webglTexture,B),li?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tn.__webglTexture,se,Lt+Un):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Tn.__webglTexture,se),B!==0?I.blitFramebuffer(Oe,Ge,me,Pe,Ze,xt,me,Pe,I.COLOR_BUFFER_BIT,I.NEAREST):li?I.copyTexSubImage3D(an,se,Ze,xt,Lt+Un,Oe,Ge,me,Pe):I.copyTexSubImage2D(an,se,Ze,xt,Oe,Ge,me,Pe);Se.bindFramebuffer(I.READ_FRAMEBUFFER,null),Se.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else li?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(an,se,Ze,xt,Lt,me,Pe,Me,ht,We,Ot.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(an,se,Ze,xt,Lt,me,Pe,Me,ht,Ot.data):I.texSubImage3D(an,se,Ze,xt,Lt,me,Pe,Me,ht,We,Ot):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,se,Ze,xt,me,Pe,ht,We,Ot.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,se,Ze,xt,Ot.width,Ot.height,ht,Ot.data):I.texSubImage2D(I.TEXTURE_2D,se,Ze,xt,me,Pe,ht,We,Ot);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ai),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ns),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ko),se===0&&k.generateMipmaps&&I.generateMipmap(an),Se.unbindTexture()},this.copyTextureToTexture3D=function(R,k,Y=null,X=null,B=0){return po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,k,Y,X,B)},this.initRenderTarget=function(R){Ue.get(R).__webglFramebuffer===void 0&&De.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?De.setTextureCube(R,0):R.isData3DTexture?De.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?De.setTexture2DArray(R,0):De.setTexture2D(R,0),Se.unbindTexture()},this.resetState=function(){T=0,E=0,b=null,Se.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}var B1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ig(r,e){return e={exports:{}},r(e,e.exports),e.exports}var k1=Ig(function(r,e){(function(){function t(){var n=window,i=document;if("scrollBehavior"in i.documentElement.style&&n.__forceSmoothScrollPolyfill__!==!0)return;var s=n.HTMLElement||n.Element,o=468,a={scroll:n.scroll||n.scrollTo,scrollBy:n.scrollBy,elementScroll:s.prototype.scroll||h,scrollIntoView:s.prototype.scrollIntoView},l=n.performance&&n.performance.now?n.performance.now.bind(n.performance):Date.now;function c(v){var w=["MSIE ","Trident/","Edge/"];return new RegExp(w.join("|")).test(v)}var u=c(n.navigator.userAgent)?1:0;function h(v,w){this.scrollLeft=v,this.scrollTop=w}function f(v){return .5*(1-Math.cos(Math.PI*v))}function d(v){if(v===null||typeof v!="object"||v.behavior===void 0||v.behavior==="auto"||v.behavior==="instant")return!0;if(typeof v=="object"&&v.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+v.behavior+" is not a valid value for enumeration ScrollBehavior.")}function g(v,w){if(w==="Y")return v.clientHeight+u<v.scrollHeight;if(w==="X")return v.clientWidth+u<v.scrollWidth}function _(v,w){var T=n.getComputedStyle(v,null)["overflow"+w];return T==="auto"||T==="scroll"}function m(v){var w=g(v,"Y")&&_(v,"Y"),T=g(v,"X")&&_(v,"X");return w||T}function p(v){for(;v!==i.body&&m(v)===!1;)v=v.parentNode||v.host;return v}function M(v){var w=l(),T,E,b,x=(w-v.startTime)/o;x=x>1?1:x,T=f(x),E=v.startX+(v.x-v.startX)*T,b=v.startY+(v.y-v.startY)*T,v.method.call(v.scrollable,E,b),(E!==v.x||b!==v.y)&&n.requestAnimationFrame(M.bind(n,v))}function S(v,w,T){var E,b,x,y,C=l();v===i.body?(E=n,b=n.scrollX||n.pageXOffset,x=n.scrollY||n.pageYOffset,y=a.scroll):(E=v,b=v.scrollLeft,x=v.scrollTop,y=h),M({scrollable:E,method:y,startTime:C,startX:b,startY:x,x:w,y:T})}n.scroll=n.scrollTo=function(){if(arguments[0]!==void 0){if(d(arguments[0])===!0){a.scroll.call(n,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:n.scrollX||n.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:n.scrollY||n.pageYOffset);return}S.call(n,i.body,arguments[0].left!==void 0?~~arguments[0].left:n.scrollX||n.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:n.scrollY||n.pageYOffset)}},n.scrollBy=function(){if(arguments[0]!==void 0){if(d(arguments[0])){a.scrollBy.call(n,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0);return}S.call(n,i.body,~~arguments[0].left+(n.scrollX||n.pageXOffset),~~arguments[0].top+(n.scrollY||n.pageYOffset))}},s.prototype.scroll=s.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(d(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value could not be converted");a.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var v=arguments[0].left,w=arguments[0].top;S.call(this,this,typeof v>"u"?this.scrollLeft:~~v,typeof w>"u"?this.scrollTop:~~w)}},s.prototype.scrollBy=function(){if(arguments[0]!==void 0){if(d(arguments[0])===!0){a.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},s.prototype.scrollIntoView=function(){if(d(arguments[0])===!0){a.scrollIntoView.call(this,arguments[0]===void 0?!0:arguments[0]);return}var v=p(this),w=v.getBoundingClientRect(),T=this.getBoundingClientRect();v!==i.body?(S.call(this,v,v.scrollLeft+T.left-w.left,v.scrollTop+T.top-w.top),n.getComputedStyle(v).position!=="fixed"&&n.scrollBy({left:w.left,top:w.top,behavior:"smooth"})):n.scrollBy({left:T.left,top:T.top,behavior:"smooth"})}}r.exports={polyfill:t}})()});k1.polyfill;/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Mp=Object.getOwnPropertySymbols,V1=Object.prototype.hasOwnProperty,H1=Object.prototype.propertyIsEnumerable;function G1(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function W1(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(n.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}W1();var X1=Ig(function(r,e){(function(){var t;t=e!==null?e:this,t.Lethargy=function(){function n(i,s,o,a){this.stability=i!=null?Math.abs(i):8,this.sensitivity=s!=null?1+Math.abs(s):100,this.tolerance=o!=null?1+Math.abs(o):1.1,this.delay=a??150,this.lastUpDeltas=(function(){var l,c,u;for(u=[],l=1,c=this.stability*2;1<=c?l<=c:l>=c;1<=c?l++:l--)u.push(null);return u}).call(this),this.lastDownDeltas=(function(){var l,c,u;for(u=[],l=1,c=this.stability*2;1<=c?l<=c:l>=c;1<=c?l++:l--)u.push(null);return u}).call(this),this.deltasTimestamp=(function(){var l,c,u;for(u=[],l=1,c=this.stability*2;1<=c?l<=c:l>=c;1<=c?l++:l--)u.push(null);return u}).call(this)}return n.prototype.check=function(i){var s;return i=i.originalEvent||i,i.wheelDelta!=null?s=i.wheelDelta:i.deltaY!=null?s=i.deltaY*-40:(i.detail!=null||i.detail===0)&&(s=i.detail*-40),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),s>0?(this.lastUpDeltas.push(s),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(s),this.lastDownDeltas.shift(),this.isInertia(-1))},n.prototype.isInertia=function(i){var s,o,a,l,c,u,h;return s=i===-1?this.lastDownDeltas:this.lastUpDeltas,s[0]===null?i:this.deltasTimestamp[this.stability*2-2]+this.delay>Date.now()&&s[0]===s[this.stability*2-1]?!1:(a=s.slice(0,this.stability),o=s.slice(this.stability,this.stability*2),h=a.reduce(function(f,d){return f+d}),c=o.reduce(function(f,d){return f+d}),u=h/a.length,l=c/o.length,Math.abs(u)<Math.abs(l*this.tolerance)&&this.sensitivity<Math.abs(l)?i:!1)},n.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},n.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},n}()}).call(B1)});(function(){return{hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}})();X1.Lethargy;function ir(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ng(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ao={duration:.5,overwrite:!1,delay:0},$f,hn,Pt,yi=1e8,wt=1/yi,of=Math.PI*2,q1=of/4,Y1=0,Og=Math.sqrt,$1=Math.cos,J1=Math.sin,on=function(e){return typeof e=="string"},Ft=function(e){return typeof e=="function"},_r=function(e){return typeof e=="number"},Jf=function(e){return typeof e>"u"},Xi=function(e){return typeof e=="object"},kn=function(e){return e!==!1},Kf=function(){return typeof window<"u"},Tl=function(e){return Ft(e)||on(e)},Fg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Sn=Array.isArray,af=/(?:-?\.?\d|\.)+/gi,zg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,lo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Iu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bg=/[+-]=-?[.\d]+/,kg=/[^,'"\[\]\s]+/gi,K1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ut,Fi,lf,Zf,si={},Pc={},Vg,Hg=function(e){return(Pc=Ro(e,si))&&Wn},jf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ua=function(e,t){return!t&&console.warn(e)},Gg=function(e,t){return e&&(si[e]=t)&&Pc&&(Pc[e]=t)||si},Ia=function(){return 0},Z1={suppressEvents:!0,isStart:!0,kill:!1},gc={suppressEvents:!0,kill:!1},j1={suppressEvents:!0},Qf={},Gr=[],cf={},Wg,jn={},Nu={},Tp=30,_c=[],ed="",td=function(e){var t=e[0],n,i;if(Xi(t)||Ft(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=_c.length;i--&&!_c[i].targetTest(t););n=_c[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new p_(e[i],n)))||e.splice(i,1);return e},xs=function(e){return e._gsap||td(Si(e))[0]._gsap},Xg=function(e,t,n){return(n=e[t])&&Ft(n)?e[t]():Jf(n)&&e.getAttribute&&e.getAttribute(t)||n},Vn=function(e,t){return(e=e.split(",")).forEach(t)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},go=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Q1=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Dc=function(){var e=Gr.length,t=Gr.slice(0),n,i;for(cf={},Gr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},nd=function(e){return!!(e._initted||e._startAt||e.add)},qg=function(e,t,n,i){Gr.length&&!hn&&Dc(),e.render(t,n,!!(hn&&t<0&&nd(e))),Gr.length&&!hn&&Dc()},Yg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(kg).length<2?t:on(e)?e.trim():e},$g=function(e){return e},oi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},eT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ro=function(e,t){for(var n in t)e[n]=t[n];return e},Ep=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Xi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Lc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},fa=function(e){var t=e.parent||Ut,n=e.keyframes?eT(Sn(e.keyframes)):oi;if(kn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},tT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Jg=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Jc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Yr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ys=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},nT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},uf=function(e,t,n,i){return e._startAt&&(hn?e._startAt.revert(gc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},iT=function r(e){return!e||e._ts&&r(e.parent)},wp=function(e){return e._repeat?Co(e._tTime,e=e.duration()+e._rDelay)*e:0},Co=function(e,t){var n=Math.floor(e=Xt(e/t));return e&&n===e?n-1:n},Uc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Kc=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},Zc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Kc(e),n._dirty||ys(n,e)),e},Kg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Uc(e.rawTime(),t),(!t._dur||Za(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),ys(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},Bi=function(e,t,n,i){return t.parent&&Yr(t),t._start=Xt((_r(n)?n:n||e!==Ut?di(e,n,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Jg(e,t,"_first","_last",e._sort?"_start":0),hf(t)||(e._recent=t),i||Kg(e,t),e._ts<0&&Zc(e,e._tTime),e},Zg=function(e,t){return(si.ScrollTrigger||jf("scrollTrigger",t))&&si.ScrollTrigger.create(t,e)},jg=function(e,t,n,i,s){if(rd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!hn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Wg!==ei.frame)return Gr.push(e),e._lazy=[s,i],1},rT=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},hf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},sT=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&rT(e)&&!(!e._initted&&hf(e))||(e._ts<0||e._dp._ts<0)&&!hf(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Za(0,e._tDur,t),u=Co(l,a),e._yoyo&&u&1&&(o=1-o),u!==Co(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||hn||i||e._zTime===wt||!t&&e._zTime){if(!e._initted&&jg(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&uf(e,t,n,!0),e._onUpdate&&!n&&ii(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ii(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Yr(e,1),!n&&!hn&&(ii(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},oT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Po=function(e,t,n,i){var s=e._repeat,o=Xt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Xt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Zc(e,e._tTime=e._tDur*a),e.parent&&Kc(e),n||ys(e.parent,e),e},bp=function(e){return e instanceof Pn?ys(e):Po(e,e._dur)},aT={_start:0,endTime:Ia,totalDuration:Ia},di=function r(e,t,n){var i=e.labels,s=e._recent||aT,o=e.duration()>=yi?s.endTime(!1):e._dur,a,l,c;return on(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Sn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},da=function(e,t,n){var i=_r(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=kn(l.vars.inherit)&&l.parent;o.immediateRender=kn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Wt(t[0],o,t[s+1])},Kr=function(e,t){return e||e===0?t(e):t},Za=function(e,t,n){return n<e?e:n>t?t:n},_n=function(e,t){return!on(e)||!(t=K1.exec(e))?"":t[1]},lT=function(e,t,n){return Kr(n,function(i){return Za(e,t,i)})},ff=[].slice,Qg=function(e,t){return e&&Xi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Xi(e[0]))&&!e.nodeType&&e!==Fi},cT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return on(i)&&!t||Qg(i,1)?(s=n).push.apply(s,Si(i)):n.push(i)})||n},Si=function(e,t,n){return Pt&&!t&&Pt.selector?Pt.selector(e):on(e)&&!n&&(lf||!Do())?ff.call((t||Zf).querySelectorAll(e),0):Sn(e)?cT(e,n):Qg(e)?ff.call(e,0):e?[e]:[]},df=function(e){return e=Si(e)[0]||Ua("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Si(t,n.querySelectorAll?n:n===e?Ua("Invalid scope")||Zf.createElement("div"):e)}},e_=function(e){return e.sort(function(){return .5-Math.random()})},t_=function(e){if(Ft(e))return e;var t=Xi(e)?e:{each:e},n=Ss(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return on(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,M,S,v,w,T,E,b,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,yi])[1],!x){for(E=-yi;E<(E=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=o[_]=[],p=l?Math.min(x,_)*u-.5:i%x,M=x===yi?0:l?_*h/x-.5:i/x|0,E=0,b=yi,T=0;T<_;T++)S=T%x-p,v=M-(T/x|0),m[T]=w=c?Math.abs(c==="y"?v:S):Og(S*S+v*v),w>E&&(E=w),w<b&&(b=w);i==="random"&&e_(m),m.max=E-b,m.min=b,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=_n(t.amount||t.each)||0,n=n&&_<0?h_(n):n}return _=(m[f]-m.min)/m.max||0,Xt(m.b+(n?n(_):_)*m.v)+m.u}},pf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Xt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(_r(n)?0:_n(n))}},n_=function(e,t){var n=Sn(e),i,s;return!n&&Xi(e)&&(i=n=e.radius||yi,e.values?(e=Si(e.values),(s=!_r(e[0]))&&(i*=i)):e=pf(e.increment)),Kr(t,n?Ft(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=yi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||_r(o)?u:u+_n(o)}:pf(e))},i_=function(e,t,n,i){return Kr(Sn(e)?!t:n===!0?!!(n=0):!i,function(){return Sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},uT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},hT=function(e,t){return function(n){return e(parseFloat(n))+(t||_n(n))}},fT=function(e,t,n){return s_(e,t,0,1,n)},r_=function(e,t,n){return Kr(n,function(i){return e[~~t(i)]})},dT=function r(e,t,n){var i=t-e;return Sn(e)?r_(e,r(0,e.length),t):Kr(n,function(s){return(i+(s-e)%i)%i+e})},pT=function r(e,t,n){var i=t-e,s=i*2;return Sn(e)?r_(e,r(0,e.length-1),t):Kr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Na=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?kg:af),n+=e.substr(t,i-t)+i_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},s_=function(e,t,n,i,s){var o=t-e,a=i-n;return Kr(s,function(l){return n+((l-e)/o*a||0)})},mT=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=on(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Sn(e)&&!Sn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=Ro(Sn(e)?[]:{},e));if(!u){for(l in t)id.call(a,e,l,"get",t[l]);s=function(g){return ad(g,a)||(o?e.p:e)}}}return Kr(n,s)},Ap=function(e,t,n){var i=e.labels,s=yi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ii=function(e,t,n){var i=e.vars,s=i[t],o=Pt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Gr.length&&Dc(),a&&(Pt=a),u=l?s.apply(c,l):s.call(c),Pt=o,u},sa=function(e){return Yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!hn),e.progress()<1&&ii(e,"onInterrupt"),e},co,o_=[],a_=function(e){if(e)if(e=!e.name&&e.default||e,Kf()||e.headless){var t=e.name,n=Ft(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ia,render:ad,add:id,kill:DT,modifier:PT,rawVars:0},o={targetTest:0,get:0,getSetter:od,aliases:{},register:0};if(Do(),e!==i){if(jn[t])return;oi(i,oi(Lc(e,s),o)),Ro(i.prototype,Ro(s,Lc(e,o))),jn[i.prop=t]=i,e.targetTest&&(_c.push(i),Qf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Gg(t,i),e.register&&e.register(Wn,i,Hn)}else o_.push(e)},Et=255,oa={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},Ou=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Et+.5|0},l_=function(e,t,n){var i=e?_r(e)?[e>>16,e>>8&Et,e&Et]:0:oa.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),oa[e])i=oa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Et,i&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(af),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ou(l+1/3,s,o),i[1]=Ou(l,s,o),i[2]=Ou(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(zg),n&&i.length<4&&(i[3]=1),i}else i=e.match(af)||oa.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Et,o=i[1]/Et,a=i[2]/Et,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},c_=function(e){var t=[],n=[],i=-1;return e.split(Wr).forEach(function(s){var o=s.match(lo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Rp=function(e,t,n){var i="",s=(e+i).match(Wr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=l_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=c_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Wr,"1").split(lo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Wr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Wr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in oa)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),gT=/hsl[a]?\(/,u_=function(e){var t=e.join(" "),n;if(Wr.lastIndex=0,Wr.test(t))return n=gT.test(t),e[1]=Rp(e[1],n),e[0]=Rp(e[0],n,c_(e[1])),!0},Oa,ei=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,M=m===!0,S,v,w,T;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,S=w-o,(S>0||M)&&(T=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,o+=S+(S>=s?4:s-S),v=1),M||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](w,f,T,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Vg&&(!lf&&Kf()&&(Fi=lf=window,Zf=Fi.document||{},si.gsap=Wn,(Fi.gsapVersions||(Fi.gsapVersions=[])).push(Wn.version),Hg(Pc||Fi.GreenSockGlobals||!Fi.gsap&&Fi||{}),o_.forEach(a_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Oa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Oa=0,c=Ia},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,M){var S=p?function(v,w,T,E){m(v,w,T,E),h.remove(S)}:m;return h.remove(m),a[M?"unshift":"push"](S),Do(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),Do=function(){return!Oa&&ei.wake()},ut={},_T=/^[\d.\-M][\d.\-,\s]/,vT=/["']/g,xT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(vT,"").trim():+c,i=l.substr(a+1).trim();return t},yT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ST=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[xT(t[1])]:yT(e).split(",").map(Yg)):ut._CE&&_T.test(e)?ut._CE("",e):n},h_=function(e){return function(t){return 1-e(1-t)}},f_=function r(e,t){for(var n=e._first,i;n;)n instanceof Pn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ss=function(e,t){return e&&(Ft(e)?e:ut[e]||ST(e))||t},Is=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Vn(e,function(a){ut[a]=si[a]=s,ut[o=a.toLowerCase()]=n;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},d_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/of*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*J1((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:d_(a);return s=of/s,l.config=function(c,u){return r(e,c,u)},l},zu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:d_(n);return i.config=function(s){return r(e,s)},i};Vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Is(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;Is("Elastic",Fu("in"),Fu("out"),Fu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Is("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Is("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Is("Circ",function(r){return-(Og(1-r*r)-1)});Is("Sine",function(r){return r===1?1:-$1(r*q1)+1});Is("Back",zu("in"),zu("out"),zu());ut.SteppedEase=ut.steps=si.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-wt;return function(a){return((i*Za(0,o,a)|0)+s)*n}}};Ao.ease=ut["quad.out"];Vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ed+=r+","+r+"Params,"});var p_=function(e,t){this.id=Y1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xg,this.set=t?t.getSetter:od},Fa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Po(this,+t.duration,1,1),this.data=t.data,Pt&&(this._ctx=Pt,Pt.data.push(this)),Oa||ei.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Po(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Do(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Zc(this,n),!s._dp||s.parent||Kg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===wt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+wp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+wp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Co(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Uc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts,this.totalTime(Za(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Kc(this),nT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Do(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Bi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Uc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=j1);var i=hn;return hn=n,nd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),hn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,bp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,bp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(di(this,n),kn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,kn(i)),this._dur||(this._zTime=-wt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-wt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Ft(n)?n:$g,a=function(){var c=i.then;i.then=null,Ft(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){sa(this)},r}();oi(Fa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var Pn=function(r){Ng(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=kn(n.sortChildren),Ut&&Bi(n.parent||Ut,ir(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Zg(ir(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return da(0,arguments,this),this},t.from=function(i,s,o){return da(1,arguments,this),this},t.fromTo=function(i,s,o,a){return da(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,fa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(i,s,di(this,o),1),this},t.call=function(i,s,o){return Bi(this,Wt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Wt(i,o,di(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,fa(o).immediateRender=kn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,fa(a).immediateRender=kn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Xt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,M,S,v,w,T,E;if(this!==Ut&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,S=this._ts,p=!S,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Xt(u%m),u===l?(_=this._repeat,f=c):(w=Xt(u/m),_=~~w,_&&_===w&&(f=c,_--),f>c&&(f=c)),w=Co(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),T&&_&1&&(f=c-f,E=1),_!==w&&!this._lock){var b=T&&w&1,x=b===(T&&_&1);if(_<w&&(b=!b),a=b?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Xt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ii(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;f_(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=oT(this,Xt(a),Xt(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!w&&(ii(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-wt);break}}d=g}else{d=this._last;for(var y=i<0?i:f;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||hn&&nd(d)),f!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=y?-wt:wt);break}}d=g}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-wt)._zTime=f>=a?1:-1,this._ts))return this._start=v,Kc(this),this.render(i,s,o);this._onUpdate&&!s&&ii(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Yr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(ii(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(_r(s)||(s=di(this,s,i)),!(i instanceof Fa)){if(Sn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(on(i))return this.addLabel(i,s);if(Ft(i))i=Wt.delayedCall(0,i);else return this}return this!==i?Bi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-yi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Wt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return on(i)?this.removeLabel(i):Ft(i)?this.killTweensOf(i):(i.parent===this&&Jc(this,i),i===this._recent&&(this._recent=this._last),ys(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(ei.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=di(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Wt.delayedCall(0,s||Ia,o);return a.data="isPause",this._hasPause=1,Bi(this,a,di(this,i))},t.removePause=function(i){var s=this._first;for(i=di(this,i);s;)s._start===i&&s.data==="isPause"&&Yr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Nr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Si(i),l=this._first,c=_r(s),u;l;)l instanceof Wt?Q1(l._targets,a)&&(c?(!Nr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=di(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Wt.to(o,oi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||wt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Po(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,oi({startAt:{time:di(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ap(this,di(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ap(this,di(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ys(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ys(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=yi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Bi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Po(o,o===Ut&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ut._ts&&(qg(Ut,Uc(i,Ut)),Wg=ei.frame),ei.frame>=Tp){Tp+=ri.autoSleep||120;var s=Ut._first;if((!s||!s._ts)&&ri.autoSleep&&ei._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ei.sleep()}}},e}(Fa);oi(Pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var MT=function(e,t,n,i,s,o,a){var l=new Hn(this._pt,e,t,0,1,y_,null,s),c=0,u=0,h,f,d,g,_,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Na(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),f=n.match(Iu)||[];h=Iu.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?go(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Iu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Bg.test(i)||p)&&(l.e=0),this._pt=l,l},id=function(e,t,n,i,s,o,a,l,c,u){Ft(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Ft(h)?c?e[t.indexOf("set")||!Ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ft(h)?c?AT:v_:sd,g;if(on(i)&&(~i.indexOf("random(")&&(i=Na(i)),i.charAt(1)==="="&&(g=go(f,i)+(_n(f)||0),(g||g===0)&&(i=g))),!u||f!==i||mf)return!isNaN(f*i)&&i!==""?(g=new Hn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?CT:x_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&jf(t,i),MT.call(this,e,t,f,i,d,l||ri.stringFilter,c))},TT=function(e,t,n,i,s){if(Ft(e)&&(e=pa(e,s,t,n,i)),!Xi(e)||e.style&&e.nodeType||Sn(e)||Fg(e))return on(e)?pa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=pa(e[a],s,t,n,i);return o},m_=function(e,t,n,i,s,o){var a,l,c,u;if(jn[e]&&(a=new jn[e]).init(s,a.rawVars?t[e]:TT(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Hn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==co))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Nr,mf,rd=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!$f,v=e.timeline,w,T,E,b,x,y,C,L,N,F,z,O,H;if(v&&(!f||!s)&&(s="none"),e._ease=Ss(s,Ao.ease),e._yEase=h?h_(Ss(h===!0?s:h,Ao.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(L=m[0]?xs(m[0]).harness:0,O=L&&i[L.prop],w=Lc(i,Qf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?gc:Z1),_._lazy=0),o){if(Yr(e._startAt=Wt.set(m,oi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&kn(l),startAt:null,delay:0,onUpdate:c&&function(){return ii(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn||!a&&!d)&&e._startAt.revert(gc),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),E=oi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&kn(l),immediateRender:a,stagger:0,parent:p},w),O&&(E[L.prop]=O),Yr(e._startAt=Wt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn?e._startAt.revert(gc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&kn(l)||l&&!g,T=0;T<m.length;T++){if(x=m[T],C=x._gsap||td(m)[T]._gsap,e._ptLookup[T]=F={},cf[C.id]&&Gr.length&&Dc(),z=M===m?T:M.indexOf(x),L&&(N=new L).init(x,O||w,e,z,M)!==!1&&(e._pt=b=new Hn(e._pt,x,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(V){F[V]=b}),N.priority&&(y=1)),!L||O)for(E in w)jn[E]&&(N=m_(E,w,e,z,x,M))?N.priority&&(y=1):F[E]=b=id.call(e,x,E,"get",w[E],z,M,0,i.stringFilter);e._op&&e._op[T]&&e.kill(x,e._op[T]),S&&e._pt&&(Nr=e,Ut.killTweensOf(x,F,e.globalTime(t)),H=!e.parent,Nr=0),e._pt&&l&&(cf[C.id]=1)}y&&S_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,f&&t<=0&&v.render(yi,!0,!0)},ET=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return mf=1,e.vars[t]="+=0",rd(e,a),mf=0,l?Ua(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Bt(n)+_n(h.e)),h.b&&(h.b=u.s+_n(h.b))},wT=function(e,t){var n=e[0]?xs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ro({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},bT=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Sn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},pa=function(e,t,n,i,s){return Ft(e)?e.call(t,n,i,s):on(e)&&~e.indexOf("random(")?Na(e):e},g_=ed+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",__={};Vn(g_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return __[r]=1});var Wt=function(r){Ng(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:fa(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=i.parent||Ut,S=(Sn(n)||Fg(n)?_r(n[0]):"length"in i)?[n]:Si(n),v,w,T,E,b,x,y,C;if(a._targets=S.length?td(S):Ua("GSAP target "+n+" not found. https://gsap.com",!ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Tl(c)||Tl(u)){if(i=a.vars,v=a.timeline=new Pn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:S}),v.kill(),v.parent=v._dp=ir(a),v._start=0,f||Tl(c)||Tl(u)){if(E=S.length,y=f&&t_(f),Xi(f))for(b in f)~g_.indexOf(b)&&(C||(C={}),C[b]=f[b]);for(w=0;w<E;w++)T=Lc(i,__),T.stagger=0,p&&(T.yoyoEase=p),C&&Ro(T,C),x=S[w],T.duration=+pa(c,ir(a),w,x,S),T.delay=(+pa(u,ir(a),w,x,S)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),v.to(x,T,y?y(w,x,S):0),v._ease=ut.none;v.duration()?c=u=0:a.timeline=0}else if(g){fa(oi(v.vars.defaults,{ease:"none"})),v._ease=Ss(g.ease||i.ease||"none");var L=0,N,F,z;if(Sn(g))g.forEach(function(O){return v.to(S,O,">")}),v.duration();else{T={};for(b in g)b==="ease"||b==="easeEach"||bT(b,g[b],T,g.easeEach);for(b in T)for(N=T[b].sort(function(O,H){return O.t-H.t}),L=0,w=0;w<N.length;w++)F=N[w],z={ease:F.e,duration:(F.t-(w?N[w-1].t:0))/100*c},z[b]=F.v,v.to(S,z,L),L+=z.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!$f&&(Nr=ir(a),Ut.killTweensOf(S),Nr=0),Bi(M,ir(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Xt(M._time)&&kn(h)&&iT(ir(a))&&M.data!=="nested")&&(a._tTime=-wt,a.render(Math.max(0,-u)||0)),m&&Zg(ir(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-wt&&!u?l:i<wt?0:i,f,d,g,_,m,p,M,S,v;if(!c)sT(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=Xt(h%_),h===l?(g=this._repeat,f=c):(m=Xt(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,f=c-f),m=Co(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(S&&this._yEase&&f_(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Xt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(jg(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(f/c),this._from&&(this.ratio=M=1-M),!a&&h&&!s&&!m&&(ii(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&uf(this,i,s,o),ii(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ii(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&uf(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Yr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(ii(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Oa||ei.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||rd(this,c),u=this._ease(c/this._dur),ET(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Zc(this,0),this.parent||Jg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?sa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!hn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Nr&&Nr.vars.overwrite!==!0)._first||sa(this),this.parent&&o!==this.timeline.totalDuration()&&Po(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Si(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&tT(a,l))return s==="all"&&(this._pt=0),sa(this);for(h=this._op=this._op||[],s!=="all"&&(on(s)&&(_={},Vn(s,function(M){return _[M]=1}),s=_),s=wT(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Jc(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&sa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return da(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return da(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ut.killTweensOf(i,s,o)},e}(Fa);oi(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vn("staggerTo,staggerFrom,staggerFromTo",function(r){Wt[r]=function(){var e=new Pn,t=ff.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var sd=function(e,t,n){return e[t]=n},v_=function(e,t,n){return e[t](n)},AT=function(e,t,n,i){return e[t](i.fp,n)},RT=function(e,t,n){return e.setAttribute(t,n)},od=function(e,t){return Ft(e[t])?v_:Jf(e[t])&&e.setAttribute?RT:sd},x_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},CT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},y_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ad=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},PT=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},DT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Jc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},LT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},S_=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Hn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||x_,this.d=l||this,this.set=c||sd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=LT,this.m=n,this.mt=s,this.tween=i},r}();Vn(ed+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Qf[r]=1});si.TweenMax=si.TweenLite=Wt;si.TimelineLite=si.TimelineMax=Pn;Ut=new Pn({sortChildren:!1,defaults:Ao,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ri.stringFilter=u_;var Ms=[],vc={},UT=[],Cp=0,IT=0,Bu=function(e){return(vc[e]||UT).map(function(t){return t()})},gf=function(){var e=Date.now(),t=[];e-Cp>2&&(Bu("matchMediaInit"),Ms.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Fi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Bu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Cp=e,Bu("matchMedia"))},M_=function(){function r(t,n){this.selector=n&&df(n),this.data=[],this._r=[],this.isReverted=!1,this.id=IT++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ft(n)&&(s=i,i=n,n=Ft);var o=this,a=function(){var c=Pt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=df(s)),Pt=o,h=i.apply(o,arguments),Ft(h)&&o._r.push(h),Pt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ft?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Pt;Pt=null,n(this),Pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Pn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Wt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ms.length;o--;)Ms[o].id===this.id&&Ms.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),NT=function(){function r(t){this.contexts=[],this.scope=t,Pt&&Pt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Xi(n)||(n={matches:n});var o=new M_(0,s||this.scope),a=o.conditions={},l,c,u;Pt&&!o.selector&&(o.selector=Pt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Fi.matchMedia(n[c]),l&&(Ms.indexOf(o)<0&&Ms.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(gf):l.addEventListener("change",gf)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ic={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return a_(i)})},timeline:function(e){return new Pn(e)},getTweensOf:function(e,t){return Ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){on(e)&&(e=Si(e)[0]);var s=xs(e||{}).get,o=n?$g:Yg;return n==="native"&&(n=""),e&&(t?o((jn[t]&&jn[t].get||s)(e,t,n,i)):function(a,l,c){return o((jn[a]&&jn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Si(e),e.length>1){var i=e.map(function(u){return Wn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=jn[t],a=xs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;co._pt=0,h.init(e,n?u+n:u,co,0,[e]),h.render(1,h),co._pt&&ad(1,co)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Wn.to(e,oi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ss(e.ease,Ao.ease)),Ep(Ao,e||{})},config:function(e){return Ep(ri,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!jn[a]&&!si[a]&&Ua(t+" effect requires "+a+" plugin.")}),Nu[t]=function(a,l,c){return n(Si(a),oi(l||{},s),c)},o&&(Pn.prototype[t]=function(a,l,c){return this.add(Nu[t](a,Xi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=Ss(t)},parseEase:function(e,t){return arguments.length?Ss(e,t):ut},getById:function(e){return Ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Pn(e),i,s;for(n.smoothChildTiming=kn(e.smoothChildTiming),Ut.remove(n),n._dp=0,n._time=n._tTime=Ut._time,i=Ut._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Wt&&i.vars.onComplete===i._targets[0]))&&Bi(n,i,i._start-i._delay),i=s;return Bi(Ut,n,0),n},context:function(e,t){return e?new M_(e,t):Pt},matchMedia:function(e){return new NT(e)},matchMediaRefresh:function(){return Ms.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||gf()},addEventListener:function(e,t){var n=vc[e]||(vc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=vc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:dT,wrapYoyo:pT,distribute:t_,random:i_,snap:n_,normalize:fT,getUnit:_n,clamp:lT,splitColor:l_,toArray:Si,selector:df,mapRange:s_,pipe:uT,unitize:hT,interpolate:mT,shuffle:e_},install:Hg,effects:Nu,ticker:ei,updateRoot:Pn.updateRoot,plugins:jn,globalTimeline:Ut,core:{PropTween:Hn,globals:Gg,Tween:Wt,Timeline:Pn,Animation:Fa,getCache:xs,_removeLinkedListItem:Jc,reverting:function(){return hn},context:function(e){return e&&Pt&&(Pt.data.push(e),e._ctx=Pt),Pt},suppressOverwrites:function(e){return $f=e}}};Vn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ic[r]=Wt[r]});ei.add(Pn.updateRoot);co=Ic.to({},{duration:0});var OT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},FT=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=OT(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},ku=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(on(s)&&(l={},Vn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}FT(a,s)}}}},Wn=Ic.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)hn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ku("roundProps",pf),ku("modifiers"),ku("snap",n_))||Ic;Wt.version=Pn.version=Wn.version="3.13.0";Vg=1;Kf()&&Do();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pp,Or,_o,ld,_s,Dp,cd,zT=function(){return typeof window<"u"},vr={},ds=180/Math.PI,vo=Math.PI/180,Ks=Math.atan2,Lp=1e8,ud=/([A-Z])/g,BT=/(left|right|width|margin|padding|x)/i,kT=/[\s,\(]\S/,ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_f=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},VT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},HT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},GT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},T_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},E_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},WT=function(e,t,n){return e.style[t]=n},XT=function(e,t,n){return e.style.setProperty(t,n)},qT=function(e,t,n){return e._gsap[t]=n},YT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},$T=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},JT=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Nt="transform",Gn=Nt+"Origin",KT=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in vr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ki[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=rr(i,a)}):this.tfm[e]=o.x?o[e]:rr(i,e),e===Gn&&(this.tfm.zOrigin=o.zOrigin);else return ki.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Nt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Gn,t,"")),e=Nt}(s||t)&&this.props.push(e,t,s[e])},w_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ZT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ud,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=cd(),(!s||!s.isStart)&&!n[Nt]&&(w_(n),i.zOrigin&&n[Gn]&&(n[Gn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},b_=function(e,t){var n={target:e,props:[],revert:ZT,save:KT};return e._gsap||Wn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},A_,vf=function(e,t){var n=Or.createElementNS?Or.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Or.createElement(e);return n&&n.style?n:Or.createElement(e)},Mi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ud,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Lo(t)||t,1)||""},Up="O,Moz,ms,Ms,Webkit".split(","),Lo=function(e,t,n){var i=t||_s,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Up[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Up[o]:"")+e},xf=function(){zT()&&window.document&&(Pp=window,Or=Pp.document,_o=Or.documentElement,_s=vf("div")||{style:{}},vf("div"),Nt=Lo(Nt),Gn=Nt+"Origin",_s.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",A_=!!Lo("perspective"),cd=Wn.core.reverting,ld=1)},Ip=function(e){var t=e.ownerSVGElement,n=vf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),_o.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),_o.removeChild(n),s},Np=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},R_=function(e){var t,n;try{t=e.getBBox()}catch{t=Ip(e),n=1}return t&&(t.width||t.height)||n||(t=Ip(e)),t&&!t.width&&!t.x&&!t.y?{x:+Np(e,["x","cx","x1"])||0,y:+Np(e,["y","cy","y1"])||0,width:0,height:0}:t},C_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&R_(e))},Cs=function(e,t){if(t){var n=e.style,i;t in vr&&t!==Gn&&(t=Nt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(ud,"-$1").toLowerCase())):n.removeAttribute(t)}},Fr=function(e,t,n,i,s,o){var a=new Hn(e._pt,t,n,0,1,o?E_:T_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Op={deg:1,rad:1,turn:1},jT={grid:1,flex:1},$r=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=_s.style,l=BT.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Op[i]||Op[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&C_(e),(d||o==="%")&&(vr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Bt(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Or||!_.appendChild)&&(_=Or.body),m=_._gsap,m&&d&&m.width&&l&&m.time===ei.time&&!m.uncache)return Bt(s/m.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,g=e[u],M?e.style[t]=M:Cs(e,t)}else(d||o==="%")&&!jT[Mi(_,"display")]&&(a.position=Mi(e,"position")),_===e&&(a.position="static"),_.appendChild(_s),g=_s[u],_.removeChild(_s),a.position="absolute";return l&&d&&(m=xs(_),m.time=ei.time,m.width=_[u]),Bt(f?g*s/h:g&&s?h/g*s:0)},rr=function(e,t,n,i){var s;return ld||xf(),t in ki&&t!=="transform"&&(t=ki[t],~t.indexOf(",")&&(t=t.split(",")[0])),vr[t]&&t!=="transform"?(s=Ba(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Oc(Mi(e,Gn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Nc[t]&&Nc[t](e,t,n)||Mi(e,t)||Xg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?$r(e,t,s,n)+n:s},QT=function(e,t,n,i){if(!n||n==="none"){var s=Lo(t,e,1),o=s&&Mi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Mi(e,"borderTopColor"))}var a=new Hn(this._pt,e.style,t,0,1,y_),l=0,c=0,u,h,f,d,g,_,m,p,M,S,v,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Mi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Mi(e,t)||i,_?e.style[t]=_:Cs(e,t)),u=[n,i],u_(u),n=u[0],i=u[1],f=n.match(lo)||[],w=i.match(lo)||[],w.length){for(;h=lo.exec(i);)m=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=go(d,m)+v),p=parseFloat(m),S=m.substr((p+"").length),l=lo.lastIndex-S.length,S||(S=S||ri.units[t]||v,l===i.length&&(i+=S,a.e+=S)),v!==S&&(d=$r(e,t,_,S)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?E_:T_;return Bg.test(i)&&(a.e=0),this._pt=a,a},Fp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Fp[n]||n,t[1]=Fp[i]||i,t.join(" ")},tE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],vr[a]&&(l=1,a=a==="transformOrigin"?Gn:Nt),Cs(n,a);l&&(Cs(n,Nt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ba(n,1),o.uncache=1,w_(i)))}},Nc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Hn(e._pt,t,n,0,0,tE);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},za=[1,0,0,1,0,0],P_={},D_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zp=function(e){var t=Mi(e,Nt);return D_(t)?za:t.substr(7).match(zg).map(Bt)},hd=function(e,t){var n=e._gsap||xs(e),i=e.style,s=zp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?za:s):(s===za&&!e.offsetParent&&e!==_o&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,_o.appendChild(e)),s=zp(e),l?i.display=l:Cs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):_o.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},yf=function(e,t,n,i,s,o){var a=e._gsap,l=s||hd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],S=t.split(" "),v=parseFloat(S[0])||0,w=parseFloat(S[1])||0,T,E,b,x;n?l!==za&&(E=d*m-g*_)&&(b=v*(m/E)+w*(-_/E)+(_*M-m*p)/E,x=v*(-g/E)+w*(d/E)-(d*M-g*p)/E,v=b,w=x):(T=R_(e),v=T.x+(~S[0].indexOf("%")?v/100*T.width:v),w=T.y+(~(S[1]||S[0]).indexOf("%")?w/100*T.height:w)),i||i!==!1&&a.smooth?(p=v-c,M=w-u,a.xOffset=h+(p*d+M*_)-p,a.yOffset=f+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Gn]="0px 0px",o&&(Fr(o,a,"xOrigin",c,v),Fr(o,a,"yOrigin",u,w),Fr(o,a,"xOffset",h,a.xOffset),Fr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+w)},Ba=function(e,t){var n=e._gsap||new p_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Mi(e,Gn)||"0",u,h,f,d,g,_,m,p,M,S,v,w,T,E,b,x,y,C,L,N,F,z,O,H,V,j,P,te,Te,we,q,ne;return u=h=f=_=m=p=M=S=v=0,d=g=1,n.svg=!!(e.getCTM&&C_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Nt]!=="none"?l[Nt]:"")),i.scale=i.rotate=i.translate="none"),E=hd(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),yf(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,E)),w=n.xOrigin||0,T=n.yOrigin||0,E!==za&&(C=E[0],L=E[1],N=E[2],F=E[3],u=z=E[4],h=O=E[5],E.length===6?(d=Math.sqrt(C*C+L*L),g=Math.sqrt(F*F+N*N),_=C||L?Ks(L,C)*ds:0,M=N||F?Ks(N,F)*ds+_:0,M&&(g*=Math.abs(Math.cos(M*vo))),n.svg&&(u-=w-(w*C+T*N),h-=T-(w*L+T*F))):(ne=E[6],we=E[7],P=E[8],te=E[9],Te=E[10],q=E[11],u=E[12],h=E[13],f=E[14],b=Ks(ne,Te),m=b*ds,b&&(x=Math.cos(-b),y=Math.sin(-b),H=z*x+P*y,V=O*x+te*y,j=ne*x+Te*y,P=z*-y+P*x,te=O*-y+te*x,Te=ne*-y+Te*x,q=we*-y+q*x,z=H,O=V,ne=j),b=Ks(-N,Te),p=b*ds,b&&(x=Math.cos(-b),y=Math.sin(-b),H=C*x-P*y,V=L*x-te*y,j=N*x-Te*y,q=F*y+q*x,C=H,L=V,N=j),b=Ks(L,C),_=b*ds,b&&(x=Math.cos(b),y=Math.sin(b),H=C*x+L*y,V=z*x+O*y,L=L*x-C*y,O=O*x-z*y,C=H,z=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Bt(Math.sqrt(C*C+L*L+N*N)),g=Bt(Math.sqrt(O*O+ne*ne)),b=Ks(z,O),M=Math.abs(b)>2e-4?b*ds:0,v=q?1/(q<0?-q:q):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!D_(Mi(e,Nt)),H&&e.setAttribute("transform",H))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Bt(d),n.scaleY=Bt(g),n.rotation=Bt(_)+a,n.rotationX=Bt(m)+a,n.rotationY=Bt(p)+a,n.skewX=M+a,n.skewY=S+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Gn]=Oc(c)),n.xOffset=n.yOffset=0,n.force3D=ri.force3D,n.renderTransform=n.svg?iE:A_?L_:nE,n.uncache=0,n},Oc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vu=function(e,t,n){var i=_n(t);return Bt(parseFloat(t)+parseFloat($r(e,"x",n+"px",i)))+i},nE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,L_(e,t)},rs="0deg",qo="0px",ss=") ",L_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,S=n.zOrigin,v="",w=p==="auto"&&e&&e!==1||p===!0;if(S&&(h!==rs||u!==rs)){var T=parseFloat(u)*vo,E=Math.sin(T),b=Math.cos(T),x;T=parseFloat(h)*vo,x=Math.cos(T),o=Vu(M,o,E*x*-S),a=Vu(M,a,-Math.sin(T)*-S),l=Vu(M,l,b*x*-S+S)}m!==qo&&(v+="perspective("+m+ss),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(w||o!==qo||a!==qo||l!==qo)&&(v+=l!==qo||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ss),c!==rs&&(v+="rotate("+c+ss),u!==rs&&(v+="rotateY("+u+ss),h!==rs&&(v+="rotateX("+h+ss),(f!==rs||d!==rs)&&(v+="skew("+f+", "+d+ss),(g!==1||_!==1)&&(v+="scale("+g+", "+_+ss),M.style[Nt]=v||"translate(0, 0)"},iE=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,S=parseFloat(o),v=parseFloat(a),w,T,E,b,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=vo,c*=vo,w=Math.cos(l)*h,T=Math.sin(l)*h,E=Math.sin(l-c)*-f,b=Math.cos(l-c)*f,c&&(u*=vo,x=Math.tan(c-u),x=Math.sqrt(1+x*x),E*=x,b*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),w*=x,T*=x)),w=Bt(w),T=Bt(T),E=Bt(E),b=Bt(b)):(w=h,b=f,T=E=0),(S&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(S=$r(d,"x",o,"px"),v=$r(d,"y",a,"px")),(g||_||m||p)&&(S=Bt(S+g-(g*w+_*E)+m),v=Bt(v+_-(g*T+_*b)+p)),(i||s)&&(x=d.getBBox(),S=Bt(S+i/100*x.width),v=Bt(v+s/100*x.height)),x="matrix("+w+","+T+","+E+","+b+","+S+","+v+")",d.setAttribute("transform",x),M&&(d.style[Nt]=x)},rE=function(e,t,n,i,s){var o=360,a=on(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ds:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Lp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Lp)%o-~~(c/o)*o)),e._pt=f=new Hn(e._pt,t,n,i,c,VT),f.e=u,f.u="deg",e._props.push(n),f},Bp=function(e,t){for(var n in t)e[n]=t[n];return e},sE=function(e,t,n){var i=Bp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Nt]=t,a=Ba(n,1),Cs(n,Nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Nt],o[Nt]=t,a=Ba(n,1),o[Nt]=c);for(l in vr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=_n(c),g=_n(u),h=d!==g?$r(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Hn(e._pt,a,l,h,f-h,_f),e._pt.u=g||0,e._props.push(l));Bp(a,i)};Vn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Nc[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return rr(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var U_={name:"css",register:xf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,M,S,v,w,T,E,b;ld||xf(),this.styles=this.styles||b_(e),b=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(jn[_]&&m_(_,t,n,i,e,s)))){if(d=typeof u,g=Nc[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Na(u)),g)g(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Wr.lastIndex=0,Wr.test(c)||(m=_n(c),p=_n(u)),p?m!==p&&(c=$r(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),b.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],on(c)&&~c.indexOf("random(")&&(c=Na(c)),_n(c+"")||c==="auto"||(c+=ri.units[_]||_n(rr(e,_))||""),(c+"").charAt(1)==="="&&(c=rr(e,_))):c=rr(e,_),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in ki&&(_==="autoAlpha"&&(f===1&&rr(e,"visibility")==="hidden"&&h&&(f=0),b.push("visibility",0,a.visibility),Fr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=ki[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in vr,S){if(this.styles.save(_),d==="string"&&u.substring(0,6)==="var(--"&&(u=Mi(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),v||(w=e._gsap,w.renderTransform&&!t.parseTransform||Ba(e,t.parseTransform),T=t.smoothOrigin!==!1&&w.smooth,v=this._pt=new Hn(this._pt,a,Nt,0,1,w.renderTransform,w,0,-1),v.dep=1),_==="scale")this._pt=new Hn(this._pt,w,"scaleY",w.scaleY,(M?go(w.scaleY,M+h):h)-w.scaleY||0,_f),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){b.push(Gn,0,a[Gn]),u=eE(u),w.svg?yf(e,u,0,T,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&Fr(this,w,"zOrigin",w.zOrigin,p),Fr(this,a,_,Oc(c),Oc(u)));continue}else if(_==="svgOrigin"){yf(e,u,1,T,0,this);continue}else if(_ in P_){rE(this,w,_,f,M?go(f,M+u):u);continue}else if(_==="smoothOrigin"){Fr(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){sE(this,u,e);continue}}else _ in a||(_=Lo(_)||_);if(S||(h||h===0)&&(f||f===0)&&!kT.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=_n(u)||(_ in ri.units?ri.units[_]:m),m!==p&&(f=$r(e,_,c,p)),this._pt=new Hn(this._pt,S?w:a,_,f,(M?go(f,M+h):h)-f,!S&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?GT:_f),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=HT);else if(_ in a)QT.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){jf(_,u);continue}S||(_ in a?b.push(_,0,a[_]):typeof e[_]=="function"?b.push(_,2,e[_]()):b.push(_,1,c||e[_])),o.push(_)}}E&&S_(this)},render:function(e,t){if(t.tween._time||!cd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:rr,aliases:ki,getSetter:function(e,t,n){var i=ki[t];return i&&i.indexOf(",")<0&&(t=i),t in vr&&t!==Gn&&(e._gsap.x||rr(e,"x"))?n&&Dp===n?t==="scale"?YT:qT:(Dp=n||{})&&(t==="scale"?$T:JT):e.style&&!Jf(e.style[t])?WT:~t.indexOf("-")?XT:od(e,t)},core:{_removeProperty:Cs,_getMatrix:hd}};Wn.utils.checkPrefix=Lo;Wn.core.getStyleSaver=b_;(function(r,e,t,n){var i=Vn(r+","+e+","+t,function(s){vr[s]=1});Vn(e,function(s){ri.units[s]="deg",P_[s]=1}),ki[i[13]]=r+","+e,Vn(n,function(s){var o=s.split(":");ki[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ri.units[r]="px"});Wn.registerPlugin(U_);var at=Wn.registerPlugin(U_)||Wn;at.core.Tween;function oE(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function aE(r,e,t){return e&&oE(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var cn,xc,ti,zr,Br,xo,I_,ps,ma,N_,hr,Di,O_,F_=function(){return cn||typeof window<"u"&&(cn=window.gsap)&&cn.registerPlugin&&cn},z_=1,uo=[],ot=[],Gi=[],ga=Date.now,Sf=function(e,t){return t},lE=function(){var e=ma.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ot),i.push.apply(i,Gi),ot=n,Gi=i,Sf=function(o,a){return t[o](a)}},Xr=function(e,t){return~Gi.indexOf(e)&&Gi[Gi.indexOf(e)+1][t]},_a=function(e){return!!~N_.indexOf(e)},wn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},En=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},El="scrollLeft",wl="scrollTop",Mf=function(){return hr&&hr.isPressed||ot.cache++},Fc=function(e,t){var n=function i(s){if(s||s===0){z_&&(ti.history.scrollRestoration="manual");var o=hr&&hr.isPressed;s=i.v=Math.round(s)||(hr&&hr.iOS?1:0),e(s),i.cacheID=ot.cache,o&&Sf("ss",s)}else(t||ot.cache!==i.cacheID||Sf("ref"))&&(i.cacheID=ot.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Dn={s:El,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Fc(function(r){return arguments.length?ti.scrollTo(r,Zt.sc()):ti.pageXOffset||zr[El]||Br[El]||xo[El]||0})},Zt={s:wl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Dn,sc:Fc(function(r){return arguments.length?ti.scrollTo(Dn.sc(),r):ti.pageYOffset||zr[wl]||Br[wl]||xo[wl]||0})},Nn=function(e,t){return(t&&t._ctx&&t._ctx.selector||cn.utils.toArray)(e)[0]||(typeof e=="string"&&cn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},cE=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Jr=function(e,t){var n=t.s,i=t.sc;_a(e)&&(e=zr.scrollingElement||Br);var s=ot.indexOf(e),o=i===Zt.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+o]||wn(e,"scroll",Mf);var a=ot[s+o],l=a||(ot[s+o]=Fc(Xr(e,n),!0)||(_a(e)?i:Fc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=cn.getProperty(e,"scrollBehavior")==="smooth"),l},Tf=function(e,t,n){var i=e,s=e,o=ga(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=ga();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=ga();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Yo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},kp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},B_=function(){ma=cn.core.globals().ScrollTrigger,ma&&ma.core&&lE()},k_=function(e){return cn=e||F_(),!xc&&cn&&typeof document<"u"&&document.body&&(ti=window,zr=document,Br=zr.documentElement,xo=zr.body,N_=[ti,zr,Br,xo],cn.utils.clamp,O_=cn.core.context||function(){},ps="onpointerenter"in xo?"pointer":"mouse",I_=kt.isTouch=ti.matchMedia&&ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Di=kt.eventTypes=("ontouchstart"in Br?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Br?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return z_=0},500),B_(),xc=1),xc};Dn.op=Zt;ot.cache=0;var kt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){xc||k_(cn)||console.warn("Please gsap.registerPlugin(Observer)"),ma||B_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,S=n.onPress,v=n.onRelease,w=n.onRight,T=n.onLeft,E=n.onUp,b=n.onDown,x=n.onChangeX,y=n.onChangeY,C=n.onChange,L=n.onToggleX,N=n.onToggleY,F=n.onHover,z=n.onHoverEnd,O=n.onMove,H=n.ignoreCheck,V=n.isNormalizer,j=n.onGestureStart,P=n.onGestureEnd,te=n.onWheel,Te=n.onEnable,we=n.onDisable,q=n.onClick,ne=n.scrollSpeed,fe=n.capture,oe=n.allowClicks,xe=n.lockAxis,Be=n.onLockAxis;this.target=a=Nn(a)||Br,this.vars=n,d&&(d=cn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,ne=ne||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ti.getComputedStyle(xo).lineHeight)||22);var de,$e,Ke,Ae,I,pt,Je,W=this,Se=0,je=0,Ue=n.passive||!u&&n.passive!==!1,De=Jr(a,Dn),vt=Jr(a,Zt),D=De(),A=vt(),G=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Di[0]==="pointerdown",Z=_a(a),K=a.ownerDocument||zr,J=[0,0,0],Ee=[0,0,0],le=0,Re=function(){return le=ga()},he=function(Le,Qe){return(W.event=Le)&&d&&cE(Le.target,d)||Qe&&G&&Le.pointerType!=="touch"||H&&H(Le,Qe)},ie=function(){W._vx.reset(),W._vy.reset(),$e.pause(),h&&h(W)},ge=function(){var Le=W.deltaX=kp(J),Qe=W.deltaY=kp(Ee),pe=Math.abs(Le)>=i,Ye=Math.abs(Qe)>=i;C&&(pe||Ye)&&C(W,Le,Qe,J,Ee),pe&&(w&&W.deltaX>0&&w(W),T&&W.deltaX<0&&T(W),x&&x(W),L&&W.deltaX<0!=Se<0&&L(W),Se=W.deltaX,J[0]=J[1]=J[2]=0),Ye&&(b&&W.deltaY>0&&b(W),E&&W.deltaY<0&&E(W),y&&y(W),N&&W.deltaY<0!=je<0&&N(W),je=W.deltaY,Ee[0]=Ee[1]=Ee[2]=0),(Ae||Ke)&&(O&&O(W),Ke&&(m&&Ke===1&&m(W),M&&M(W),Ke=0),Ae=!1),pt&&!(pt=!1)&&Be&&Be(W),I&&(te(W),I=!1),de=0},ke=function(Le,Qe,pe){J[pe]+=Le,Ee[pe]+=Qe,W._vx.update(Le),W._vy.update(Qe),c?de||(de=requestAnimationFrame(ge)):ge()},Fe=function(Le,Qe){xe&&!Je&&(W.axis=Je=Math.abs(Le)>Math.abs(Qe)?"x":"y",pt=!0),Je!=="y"&&(J[2]+=Le,W._vx.update(Le,!0)),Je!=="x"&&(Ee[2]+=Qe,W._vy.update(Qe,!0)),c?de||(de=requestAnimationFrame(ge)):ge()},ce=function(Le){if(!he(Le,1)){Le=Yo(Le,u);var Qe=Le.clientX,pe=Le.clientY,Ye=Qe-W.x,Ie=pe-W.y,qe=W.isDragging;W.x=Qe,W.y=pe,(qe||(Ye||Ie)&&(Math.abs(W.startX-Qe)>=s||Math.abs(W.startY-pe)>=s))&&(Ke=qe?2:1,qe||(W.isDragging=!0),Fe(Ye,Ie))}},He=W.onPress=function(ye){he(ye,1)||ye&&ye.button||(W.axis=Je=null,$e.pause(),W.isPressed=!0,ye=Yo(ye),Se=je=0,W.startX=W.x=ye.clientX,W.startY=W.y=ye.clientY,W._vx.reset(),W._vy.reset(),wn(V?a:K,Di[1],ce,Ue,!0),W.deltaX=W.deltaY=0,S&&S(W))},U=W.onRelease=function(ye){if(!he(ye,1)){En(V?a:K,Di[1],ce,!0);var Le=!isNaN(W.y-W.startY),Qe=W.isDragging,pe=Qe&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),Ye=Yo(ye);!pe&&Le&&(W._vx.reset(),W._vy.reset(),u&&oe&&cn.delayedCall(.08,function(){if(ga()-le>300&&!ye.defaultPrevented){if(ye.target.click)ye.target.click();else if(K.createEvent){var Ie=K.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,ti,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),ye.target.dispatchEvent(Ie)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,h&&Qe&&!V&&$e.restart(!0),Ke&&ge(),p&&Qe&&p(W),v&&v(W,pe)}},ue=function(Le){return Le.touches&&Le.touches.length>1&&(W.isGesturing=!0)&&j(Le,W.isDragging)},ee=function(){return(W.isGesturing=!1)||P(W)},_e=function(Le){if(!he(Le)){var Qe=De(),pe=vt();ke((Qe-D)*ne,(pe-A)*ne,1),D=Qe,A=pe,h&&$e.restart(!0)}},re=function(Le){if(!he(Le)){Le=Yo(Le,u),te&&(I=!0);var Qe=(Le.deltaMode===1?l:Le.deltaMode===2?ti.innerHeight:1)*g;ke(Le.deltaX*Qe,Le.deltaY*Qe,0),h&&!V&&$e.restart(!0)}},Q=function(Le){if(!he(Le)){var Qe=Le.clientX,pe=Le.clientY,Ye=Qe-W.x,Ie=pe-W.y;W.x=Qe,W.y=pe,Ae=!0,h&&$e.restart(!0),(Ye||Ie)&&Fe(Ye,Ie)}},be=function(Le){W.event=Le,F(W)},Ve=function(Le){W.event=Le,z(W)},dt=function(Le){return he(Le)||Yo(Le,u)&&q(W)};$e=W._dc=cn.delayedCall(f||.25,ie).pause(),W.deltaX=W.deltaY=0,W._vx=Tf(0,50,!0),W._vy=Tf(0,50,!0),W.scrollX=De,W.scrollY=vt,W.isDragging=W.isGesturing=W.isPressed=!1,O_(this),W.enable=function(ye){return W.isEnabled||(wn(Z?K:a,"scroll",Mf),o.indexOf("scroll")>=0&&wn(Z?K:a,"scroll",_e,Ue,fe),o.indexOf("wheel")>=0&&wn(a,"wheel",re,Ue,fe),(o.indexOf("touch")>=0&&I_||o.indexOf("pointer")>=0)&&(wn(a,Di[0],He,Ue,fe),wn(K,Di[2],U),wn(K,Di[3],U),oe&&wn(a,"click",Re,!0,!0),q&&wn(a,"click",dt),j&&wn(K,"gesturestart",ue),P&&wn(K,"gestureend",ee),F&&wn(a,ps+"enter",be),z&&wn(a,ps+"leave",Ve),O&&wn(a,ps+"move",Q)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=Ae=Ke=!1,W._vx.reset(),W._vy.reset(),D=De(),A=vt(),ye&&ye.type&&He(ye),Te&&Te(W)),W},W.disable=function(){W.isEnabled&&(uo.filter(function(ye){return ye!==W&&_a(ye.target)}).length||En(Z?K:a,"scroll",Mf),W.isPressed&&(W._vx.reset(),W._vy.reset(),En(V?a:K,Di[1],ce,!0)),En(Z?K:a,"scroll",_e,fe),En(a,"wheel",re,fe),En(a,Di[0],He,fe),En(K,Di[2],U),En(K,Di[3],U),En(a,"click",Re,!0),En(a,"click",dt),En(K,"gesturestart",ue),En(K,"gestureend",ee),En(a,ps+"enter",be),En(a,ps+"leave",Ve),En(a,ps+"move",Q),W.isEnabled=W.isPressed=W.isDragging=!1,we&&we(W))},W.kill=W.revert=function(){W.disable();var ye=uo.indexOf(W);ye>=0&&uo.splice(ye,1),hr===W&&(hr=0)},uo.push(W),V&&_a(a)&&(hr=W),W.enable(_)},aE(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();kt.version="3.13.0";kt.create=function(r){return new kt(r)};kt.register=k_;kt.getAll=function(){return uo.slice()};kt.getById=function(r){return uo.filter(function(e){return e.vars.id===r})[0]};F_()&&cn.registerPlugin(kt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ce,so,st,At,Qn,_t,fd,zc,ka,va,aa,bl,pn,jc,Ef,Rn,Vp,Hp,oo,V_,Hu,H_,An,wf,G_,W_,Dr,bf,dd,yo,pd,Bc,Af,Gu,Al=1,mn=Date.now,Wu=mn(),wi=0,la=0,Gp=function(e,t,n){var i=Zn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Wp=function(e,t){return t&&(!Zn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},uE=function r(){return la&&requestAnimationFrame(r)},Xp=function(){return jc=1},qp=function(){return jc=0},zi=function(e){return e},ca=function(e){return Math.round(e*1e5)/1e5||0},X_=function(){return typeof window<"u"},q_=function(){return Ce||X_()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},Ps=function(e){return!!~fd.indexOf(e)},Y_=function(e){return(e==="Height"?pd:st["inner"+e])||Qn["client"+e]||_t["client"+e]},$_=function(e){return Xr(e,"getBoundingClientRect")||(Ps(e)?function(){return Ec.width=st.innerWidth,Ec.height=pd,Ec}:function(){return cr(e)})},hE=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Xr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Y_(s):e["client"+s])||0}},fE=function(e,t){return!t||~Gi.indexOf(e)?$_(e):function(){return Ec}},Vi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Xr(e,n))?o()-$_(e)()[s]:Ps(e)?(Qn[n]||_t[n])-Y_(i):e[n]-e["offset"+i])},Rl=function(e,t){for(var n=0;n<oo.length;n+=3)(!t||~t.indexOf(oo[n+1]))&&e(oo[n],oo[n+1],oo[n+2])},Zn=function(e){return typeof e=="string"},vn=function(e){return typeof e=="function"},ua=function(e){return typeof e=="number"},ms=function(e){return typeof e=="object"},$o=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Xu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Zs=Math.abs,J_="left",K_="top",md="right",gd="bottom",Ts="width",Es="height",xa="Right",ya="Left",Sa="Top",Ma="Bottom",Ht="padding",gi="margin",Uo="Width",_d="Height",Kt="px",_i=function(e){return st.getComputedStyle(e)},dE=function(e){var t=_i(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Yp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},cr=function(e,t){var n=t&&_i(e)[Ef]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},kc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Z_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},pE=function(e){return function(t){return Ce.utils.snap(Z_(e),t)}},vd=function(e){var t=Ce.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},mE=function(e){return function(t,n){return vd(Z_(e))(t,n.direction)}},Cl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},rn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},nn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Pl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},$p={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Dl={toggleActions:"play",anticipatePin:0},Vc={top:0,left:0,center:.5,bottom:1,right:1},yc=function(e,t){if(Zn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Vc?Vc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ll=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=At.createElement("div"),_=Ps(n)||Xr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?_t:n,M=e.indexOf("start")!==-1,S=M?c:u,v="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===Zt?md:gd)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Sc(g,0,i,M),g},Sc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Uo]=1,s["border"+a+Uo]=0,s[n.p]=t+"px",Ce.set(e,s)},nt=[],Rf={},Va,Jp=function(){return mn()-wi>34&&(Va||(Va=requestAnimationFrame(pr)))},js=function(){(!An||!An.isPressed||An.startX>_t.clientWidth)&&(ot.cache++,An?Va||(Va=requestAnimationFrame(pr)):pr(),wi||Ls("scrollStart"),wi=mn())},qu=function(){W_=st.innerWidth,G_=st.innerHeight},ha=function(e){ot.cache++,(e===!0||!pn&&!H_&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!wf||W_!==st.innerWidth||Math.abs(st.innerHeight-G_)>st.innerHeight*.25))&&zc.restart(!0)},Ds={},gE=[],j_=function r(){return nn(lt,"scrollEnd",r)||vs(!0)},Ls=function(e){return Ds[e]&&Ds[e].map(function(t){return t()})||gE},Kn=[],Q_=function(e){for(var t=0;t<Kn.length;t+=5)(!e||Kn[t+4]&&Kn[t+4].query===e)&&(Kn[t].style.cssText=Kn[t+1],Kn[t].getBBox&&Kn[t].setAttribute("transform",Kn[t+2]||""),Kn[t+3].uncache=1)},xd=function(e,t){var n;for(Rn=0;Rn<nt.length;Rn++)n=nt[Rn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Bc=!0,t&&Q_(t),t||Ls("revert")},e0=function(e,t){ot.cache++,(t||!Cn)&&ot.forEach(function(n){return vn(n)&&n.cacheID++&&(n.rec=0)}),Zn(e)&&(st.history.scrollRestoration=dd=e)},Cn,ws=0,Kp,_E=function(){if(Kp!==ws){var e=Kp=ws;requestAnimationFrame(function(){return e===ws&&vs(!0)})}},t0=function(){_t.appendChild(yo),pd=!An&&yo.offsetHeight||st.innerHeight,_t.removeChild(yo)},Zp=function(e){return ka(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},vs=function(e,t){if(Qn=At.documentElement,_t=At.body,fd=[st,At,Qn,_t],wi&&!e&&!Bc){rn(lt,"scrollEnd",j_);return}t0(),Cn=lt.isRefreshing=!0,ot.forEach(function(i){return vn(i)&&++i.cacheID&&(i.rec=i())});var n=Ls("refreshInit");V_&&lt.sort(),t||xd(),ot.forEach(function(i){vn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),nt.slice(0).forEach(function(i){return i.refresh()}),Bc=!1,nt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Af=1,Zp(!0),nt.forEach(function(i){var s=Vi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Zp(!1),Af=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ot.forEach(function(i){vn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),e0(dd,1),zc.pause(),ws++,Cn=2,pr(2),nt.forEach(function(i){return vn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Cn=lt.isRefreshing=!1,Ls("refresh")},Cf=0,Mc=1,Ta,pr=function(e){if(e===2||!Cn&&!Bc){lt.isUpdating=!0,Ta&&Ta.update(0);var t=nt.length,n=mn(),i=n-Wu>=50,s=t&&nt[0].scroll();if(Mc=Cf>s?-1:1,Cn||(Cf=s),i&&(wi&&!jc&&n-wi>200&&(wi=0,Ls("scrollEnd")),aa=Wu,Wu=n),Mc<0){for(Rn=t;Rn-- >0;)nt[Rn]&&nt[Rn].update(0,i);Mc=1}else for(Rn=0;Rn<t;Rn++)nt[Rn]&&nt[Rn].update(0,i);lt.isUpdating=!1}Va=0},Pf=[J_,K_,gd,md,gi+Ma,gi+xa,gi+Sa,gi+ya,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Tc=Pf.concat([Ts,Es,"boxSizing","max"+Uo,"max"+_d,"position",gi,Ht,Ht+Sa,Ht+xa,Ht+Ma,Ht+ya]),vE=function(e,t,n){So(n);var i=e._gsap;if(i.spacerIsNative)So(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Yu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Pf.length,o=t.style,a=e.style,l;s--;)l=Pf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[gd]=a[md]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ts]=kc(e,Dn)+Kt,o[Es]=kc(e,Zt)+Kt,o[Ht]=a[gi]=a[K_]=a[J_]="0",So(i),a[Ts]=a["max"+Uo]=n[Ts],a[Es]=a["max"+_d]=n[Es],a[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},xE=/([A-Z])/g,So=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(xE,"-$1").toLowerCase())}},Ul=function(e){for(var t=Tc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Tc[s],n[Tc[s]]);return i.t=e,i},yE=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Ec={left:0,top:0},jp=function(e,t,n,i,s,o,a,l,c,u,h,f,d,g){vn(e)&&(e=e(l)),Zn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?yc("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(e)||(e=+e),ua(e))d&&(e=Ce.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Sc(a,n,i,!0);else{vn(t)&&(t=t(l));var S=(e||"0").split(" "),v,w,T,E;M=Nn(t,l)||_t,v=cr(M)||{},(!v||!v.left&&!v.top)&&_i(M).display==="none"&&(E=M.style.display,M.style.display="block",v=cr(M),E?M.style.display=E:M.style.removeProperty("display")),w=yc(S[0],v[i.d]),T=yc(S[1]||"0",n),e=v[i.p]-c[i.p]-u+w+s-T,a&&Sc(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var b=e+n,x=o._isStart;m="scroll"+i.d2,Sc(o,b,i,x&&b>20||!x&&(h?Math.max(_t[m],Qn[m]):o.parentNode[m])<=b+1),h&&(c=cr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Kt))}return d&&M&&(m=cr(M),d.seek(f),p=cr(M),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},SE=/(webkit|moz|length|cssText|inset)/i,Qp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===_t){e._stOrig=s.cssText,a=_i(e);for(o in a)!+o&&!SE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},n0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Il=function(e,t,n){var i={};i[t.p]="+="+n,Ce.set(e,i)},em=function(e,t){var n=Jr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=n0(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ot.cache++,o.tween&&pr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ce.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},rn(e,"wheel",n.wheelHandler),lt.isTouch&&rn(e,"touchmove",n.wheelHandler),s},lt=function(){function r(t,n){so||r.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),bf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!la){this.update=this.refresh=this.kill=zi;return}n=Yp(Zn(n)||ua(n)||n.nodeType?{trigger:n}:n,Dl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,S=s.once,v=s.snap,w=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,b=s.fastScrollEnd,x=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Dn:Zt,C=!h&&h!==0,L=Nn(n.scroller||st),N=Ce.core.getCache(L),F=Ps(L),z=("pinType"in n?n.pinType:Xr(L,"pinType")||F&&"fixed")==="fixed",O=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],H=C&&n.toggleActions.split(" "),V="markers"in n?n.markers:Dl.markers,j=F?0:parseFloat(_i(L)["border"+y.p2+Uo])||0,P=this,te=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Te=hE(L,F,y),we=fE(L,F),q=0,ne=0,fe=0,oe=Jr(L,y),xe,Be,de,$e,Ke,Ae,I,pt,Je,W,Se,je,Ue,De,vt,D,A,G,Z,K,J,Ee,le,Re,he,ie,ge,ke,Fe,ce,He,U,ue,ee,_e,re,Q,be,Ve;if(P._startClamp=P._endClamp=!1,P._dir=y,m*=45,P.scroller=L,P.scroll=E?E.time.bind(E):oe,$e=oe(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(V_=1,n.refreshPriority===-9999&&(Ta=P)),N.tweenScroll=N.tweenScroll||{top:em(L,Zt),left:em(L,Dn)},P.tweenTo=xe=N.tweenScroll[y.p],P.scrubDuration=function(pe){ue=ua(pe)&&pe,ue?U?U.duration(pe):U=Ce.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return p&&p(P)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),ce=0,l||(l=i.vars.id)),v&&((!ms(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in _t.style&&Ce.set(F?[_t,Qn]:L,{scrollBehavior:"auto"}),ot.forEach(function(pe){return vn(pe)&&pe.target===(F?At.scrollingElement||Qn:L)&&(pe.smooth=!1)}),de=vn(v.snapTo)?v.snapTo:v.snapTo==="labels"?pE(i):v.snapTo==="labelsDirectional"?mE(i):v.directional!==!1?function(pe,Ye){return vd(v.snapTo)(pe,mn()-ne<500?0:Ye.direction)}:Ce.utils.snap(v.snapTo),ee=v.duration||{min:.1,max:2},ee=ms(ee)?va(ee.min,ee.max):va(ee,ee),_e=Ce.delayedCall(v.delay||ue/2||.1,function(){var pe=oe(),Ye=mn()-ne<500,Ie=xe.tween;if((Ye||Math.abs(P.getVelocity())<10)&&!Ie&&!jc&&q!==pe){var qe=(pe-Ae)/De,zt=i&&!C?i.totalProgress():qe,rt=Ye?0:(zt-He)/(mn()-aa)*1e3||0,bt=Ce.utils.clamp(-qe,1-qe,Zs(rt/2)*rt/.185),Yt=qe+(v.inertia===!1?0:bt),Mt,Tt,mt=v,qn=mt.onStart,Rt=mt.onInterrupt,Mn=mt.onComplete;if(Mt=de(Yt,P),ua(Mt)||(Mt=Yt),Tt=Math.max(0,Math.round(Ae+Mt*De)),pe<=I&&pe>=Ae&&Tt!==pe){if(Ie&&!Ie._initted&&Ie.data<=Zs(Tt-pe))return;v.inertia===!1&&(bt=Mt-qe),xe(Tt,{duration:ee(Zs(Math.max(Zs(Yt-zt),Zs(Mt-zt))*.185/rt/.05||0)),ease:v.ease||"power3",data:Zs(Tt-pe),onInterrupt:function(){return _e.restart(!0)&&Rt&&Rt(P)},onComplete:function(){P.update(),q=oe(),i&&!C&&(U?U.resetTo("totalProgress",Mt,i._tTime/i._tDur):i.progress(Mt)),ce=He=i&&!C?i.totalProgress():P.progress,M&&M(P),Mn&&Mn(P)}},pe,bt*De,Tt-pe-bt*De),qn&&qn(P,xe.tween)}}else P.isActive&&q!==pe&&_e.restart(!0)}).pause()),l&&(Rf[l]=P),f=P.trigger=Nn(f||d!==!0&&d),Ve=f&&f._gsap&&f._gsap.stRevert,Ve&&(Ve=Ve(P)),d=d===!0?f:Nn(d),Zn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===gi||(g=!g&&d.parentNode&&d.parentNode.style&&_i(d.parentNode).display==="flex"?!1:Ht),P.pin=d,Be=Ce.core.getCache(d),Be.spacer?vt=Be.pinState:(T&&(T=Nn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Be.spacerIsNative=!!T,T&&(Be.spacerState=Ul(T))),Be.spacer=G=T||At.createElement("div"),G.classList.add("pin-spacer"),l&&G.classList.add("pin-spacer-"+l),Be.pinState=vt=Ul(d)),n.force3D!==!1&&Ce.set(d,{force3D:!0}),P.spacer=G=Be.spacer,Fe=_i(d),Re=Fe[g+y.os2],K=Ce.getProperty(d),J=Ce.quickSetter(d,y.a,Kt),Yu(d,G,Fe),A=Ul(d)),V){je=ms(V)?Yp(V,$p):$p,W=Ll("scroller-start",l,L,y,je,0),Se=Ll("scroller-end",l,L,y,je,0,W),Z=W["offset"+y.op.d2];var dt=Nn(Xr(L,"content")||L);pt=this.markerStart=Ll("start",l,dt,y,je,Z,0,E),Je=this.markerEnd=Ll("end",l,dt,y,je,Z,0,E),E&&(be=Ce.quickSetter([pt,Je],y.a,Kt)),!z&&!(Gi.length&&Xr(L,"fixedMarkers")===!0)&&(dE(F?_t:L),Ce.set([W,Se],{force3D:!0}),ie=Ce.quickSetter(W,y.a,Kt),ke=Ce.quickSetter(Se,y.a,Kt))}if(E){var ye=E.vars.onUpdate,Le=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),ye&&ye.apply(E,Le||[])})}if(P.previous=function(){return nt[nt.indexOf(P)-1]},P.next=function(){return nt[nt.indexOf(P)+1]},P.revert=function(pe,Ye){if(!Ye)return P.kill(!0);var Ie=pe!==!1||!P.enabled,qe=pn;Ie!==P.isReverted&&(Ie&&(re=Math.max(oe(),P.scroll.rec||0),fe=P.progress,Q=i&&i.progress()),pt&&[pt,Je,W,Se].forEach(function(zt){return zt.style.display=Ie?"none":"block"}),Ie&&(pn=P,P.update(Ie)),d&&(!w||!P.isActive)&&(Ie?vE(d,G,vt):Yu(d,G,_i(d),he)),Ie||P.update(Ie),pn=qe,P.isReverted=Ie)},P.refresh=function(pe,Ye,Ie,qe){if(!((pn||!P.enabled)&&!Ye)){if(d&&pe&&wi){rn(r,"scrollEnd",j_);return}!Cn&&te&&te(P),pn=P,xe.tween&&!Ie&&(xe.tween.kill(),xe.tween=0),U&&U.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(Ze){return Ze.vars.immediateRender&&Ze.render(0,!0,!0)})),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var zt=Te(),rt=we(),bt=E?E.duration():Vi(L,y),Yt=De<=.01||!De,Mt=0,Tt=qe||0,mt=ms(Ie)?Ie.end:n.end,qn=n.endTrigger||f,Rt=ms(Ie)?Ie.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Mn=P.pinnedContainer=n.pinnedContainer&&Nn(n.pinnedContainer,P),ai=f&&Math.max(0,nt.indexOf(P))||0,$t=ai,Jt,R,k,Y,X,B,se,me,Pe,Me,Oe,Ge,Ne;for(V&&ms(Ie)&&(Ge=Ce.getProperty(W,y.p),Ne=Ce.getProperty(Se,y.p));$t-- >0;)B=nt[$t],B.end||B.refresh(0,1)||(pn=P),se=B.pin,se&&(se===f||se===d||se===Mn)&&!B.isReverted&&(Me||(Me=[]),Me.unshift(B),B.revert(!0,!0)),B!==nt[$t]&&(ai--,$t--);for(vn(Rt)&&(Rt=Rt(P)),Rt=Gp(Rt,"start",P),Ae=jp(Rt,f,zt,y,oe(),pt,W,P,rt,j,z,bt,E,P._startClamp&&"_startClamp")||(d?-.001:0),vn(mt)&&(mt=mt(P)),Zn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Zn(Rt)?Rt.split(" ")[0]:"")+mt:(Mt=yc(mt.substr(2),zt),mt=Zn(Rt)?Rt:(E?Ce.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ae):Ae)+Mt,qn=f)),mt=Gp(mt,"end",P),I=Math.max(Ae,jp(mt||(qn?"100% 0":bt),qn,zt,y,oe()+Mt,Je,Se,P,rt,j,z,bt,E,P._endClamp&&"_endClamp"))||-.001,Mt=0,$t=ai;$t--;)B=nt[$t],se=B.pin,se&&B.start-B._pinPush<=Ae&&!E&&B.end>0&&(Jt=B.end-(P._startClamp?Math.max(0,B.start):B.start),(se===f&&B.start-B._pinPush<Ae||se===Mn)&&isNaN(Rt)&&(Mt+=Jt*(1-B.progress)),se===d&&(Tt+=Jt));if(Ae+=Mt,I+=Mt,P._startClamp&&(P._startClamp+=Mt),P._endClamp&&!Cn&&(P._endClamp=I||-.001,I=Math.min(I,Vi(L,y))),De=I-Ae||(Ae-=.01)&&.001,Yt&&(fe=Ce.utils.clamp(0,1,Ce.utils.normalize(Ae,I,re))),P._pinPush=Tt,pt&&Mt&&(Jt={},Jt[y.a]="+="+Mt,Mn&&(Jt[y.p]="-="+oe()),Ce.set([pt,Je],Jt)),d&&!(Af&&P.end>=Vi(L,y)))Jt=_i(d),Y=y===Zt,k=oe(),Ee=parseFloat(K(y.a))+Tt,!bt&&I>1&&(Oe=(F?At.scrollingElement||Qn:L).style,Oe={style:Oe,value:Oe["overflow"+y.a.toUpperCase()]},F&&_i(_t)["overflow"+y.a.toUpperCase()]!=="scroll"&&(Oe.style["overflow"+y.a.toUpperCase()]="scroll")),Yu(d,G,Jt),A=Ul(d),R=cr(d,!0),me=z&&Jr(L,Y?Dn:Zt)(),g?(he=[g+y.os2,De+Tt+Kt],he.t=G,$t=g===Ht?kc(d,y)+De+Tt:0,$t&&(he.push(y.d,$t+Kt),G.style.flexBasis!=="auto"&&(G.style.flexBasis=$t+Kt)),So(he),Mn&&nt.forEach(function(Ze){Ze.pin===Mn&&Ze.vars.pinSpacing!==!1&&(Ze._subPinOffset=!0)}),z&&oe(re)):($t=kc(d,y),$t&&G.style.flexBasis!=="auto"&&(G.style.flexBasis=$t+Kt)),z&&(X={top:R.top+(Y?k-Ae:me)+Kt,left:R.left+(Y?me:k-Ae)+Kt,boxSizing:"border-box",position:"fixed"},X[Ts]=X["max"+Uo]=Math.ceil(R.width)+Kt,X[Es]=X["max"+_d]=Math.ceil(R.height)+Kt,X[gi]=X[gi+Sa]=X[gi+xa]=X[gi+Ma]=X[gi+ya]="0",X[Ht]=Jt[Ht],X[Ht+Sa]=Jt[Ht+Sa],X[Ht+xa]=Jt[Ht+xa],X[Ht+Ma]=Jt[Ht+Ma],X[Ht+ya]=Jt[Ht+ya],D=yE(vt,X,w),Cn&&oe(0)),i?(Pe=i._initted,Hu(1),i.render(i.duration(),!0,!0),le=K(y.a)-Ee+De+Tt,ge=Math.abs(De-le)>1,z&&ge&&D.splice(D.length-2,2),i.render(0,!0,!0),Pe||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Hu(0)):le=De,Oe&&(Oe.value?Oe.style["overflow"+y.a.toUpperCase()]=Oe.value:Oe.style.removeProperty("overflow-"+y.a));else if(f&&oe()&&!E)for(R=f.parentNode;R&&R!==_t;)R._pinOffset&&(Ae-=R._pinOffset,I-=R._pinOffset),R=R.parentNode;Me&&Me.forEach(function(Ze){return Ze.revert(!1,!0)}),P.start=Ae,P.end=I,$e=Ke=Cn?re:oe(),!E&&!Cn&&($e<re&&oe(re),P.scroll.rec=0),P.revert(!1,!0),ne=mn(),_e&&(q=-1,_e.restart(!0)),pn=0,i&&C&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(Yt||fe!==P.progress||E||_||i&&!i._initted)&&(i&&!C&&(i._initted||fe||i.vars.immediateRender!==!1)&&i.totalProgress(E&&Ae<-.001&&!fe?Ce.utils.normalize(Ae,I,0):fe,!0),P.progress=Yt||($e-Ae)/De===fe?0:fe),d&&g&&(G._pinOffset=Math.round(P.progress*le)),U&&U.invalidate(),isNaN(Ge)||(Ge-=Ce.getProperty(W,y.p),Ne-=Ce.getProperty(Se,y.p),Il(W,y,Ge),Il(pt,y,Ge-(qe||0)),Il(Se,y,Ne),Il(Je,y,Ne-(qe||0))),Yt&&!Cn&&P.update(),u&&!Cn&&!Ue&&(Ue=!0,u(P),Ue=!1)}},P.getVelocity=function(){return(oe()-Ke)/(mn()-aa)*1e3||0},P.endAnimation=function(){$o(P.callbackAnimation),i&&(U?U.progress(1):i.paused()?C||$o(i,P.direction<0,1):$o(i,i.reversed()))},P.labelToScroll=function(pe){return i&&i.labels&&(Ae||P.refresh()||Ae)+i.labels[pe]/i.duration()*De||0},P.getTrailing=function(pe){var Ye=nt.indexOf(P),Ie=P.direction>0?nt.slice(0,Ye).reverse():nt.slice(Ye+1);return(Zn(pe)?Ie.filter(function(qe){return qe.vars.preventOverlaps===pe}):Ie).filter(function(qe){return P.direction>0?qe.end<=Ae:qe.start>=I})},P.update=function(pe,Ye,Ie){if(!(E&&!Ie&&!pe)){var qe=Cn===!0?re:P.scroll(),zt=pe?0:(qe-Ae)/De,rt=zt<0?0:zt>1?1:zt||0,bt=P.progress,Yt,Mt,Tt,mt,qn,Rt,Mn,ai;if(Ye&&(Ke=$e,$e=E?oe():qe,v&&(He=ce,ce=i&&!C?i.totalProgress():rt)),m&&d&&!pn&&!Al&&wi&&(!rt&&Ae<qe+(qe-Ke)/(mn()-aa)*m?rt=1e-4:rt===1&&I>qe+(qe-Ke)/(mn()-aa)*m&&(rt=.9999)),rt!==bt&&P.enabled){if(Yt=P.isActive=!!rt&&rt<1,Mt=!!bt&&bt<1,Rt=Yt!==Mt,qn=Rt||!!rt!=!!bt,P.direction=rt>bt?1:-1,P.progress=rt,qn&&!pn&&(Tt=rt&&!bt?0:rt===1?1:bt===1?2:3,C&&(mt=!Rt&&H[Tt+1]!=="none"&&H[Tt+1]||H[Tt],ai=i&&(mt==="complete"||mt==="reset"||mt in i))),x&&(Rt||ai)&&(ai||h||!i)&&(vn(x)?x(P):P.getTrailing(x).forEach(function(k){return k.endAnimation()})),C||(U&&!pn&&!Al?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",rt,i._tTime/i._tDur):(U.vars.totalProgress=rt,U.invalidate().restart())):i&&i.totalProgress(rt,!!(pn&&(ne||pe)))),d){if(pe&&g&&(G.style[g+y.os2]=Re),!z)J(ca(Ee+le*rt));else if(qn){if(Mn=!pe&&rt>bt&&I+1>qe&&qe+1>=Vi(L,y),w)if(!pe&&(Yt||Mn)){var $t=cr(d,!0),Jt=qe-Ae;Qp(d,_t,$t.top+(y===Zt?Jt:0)+Kt,$t.left+(y===Zt?0:Jt)+Kt)}else Qp(d,G);So(Yt||Mn?D:A),ge&&rt<1&&Yt||J(Ee+(rt===1&&!Mn?le:0))}}v&&!xe.tween&&!pn&&!Al&&_e.restart(!0),a&&(Rt||S&&rt&&(rt<1||!Gu))&&ka(a.targets).forEach(function(k){return k.classList[Yt||S?"add":"remove"](a.className)}),o&&!C&&!pe&&o(P),qn&&!pn?(C&&(ai&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),o&&o(P)),(Rt||!Gu)&&(c&&Rt&&Xu(P,c),O[Tt]&&Xu(P,O[Tt]),S&&(rt===1?P.kill(!1,1):O[Tt]=0),Rt||(Tt=rt===1?1:3,O[Tt]&&Xu(P,O[Tt]))),b&&!Yt&&Math.abs(P.getVelocity())>(ua(b)?b:2500)&&($o(P.callbackAnimation),U?U.progress(1):$o(i,mt==="reverse"?1:!rt,1))):C&&o&&!pn&&o(P)}if(ke){var R=E?qe/E.duration()*(E._caScrollDist||0):qe;ie(R+(W._isFlipped?1:0)),ke(R)}be&&be(-qe/E.duration()*(E._caScrollDist||0))}},P.enable=function(pe,Ye){P.enabled||(P.enabled=!0,rn(L,"resize",ha),F||rn(L,"scroll",js),te&&rn(r,"refreshInit",te),pe!==!1&&(P.progress=fe=0,$e=Ke=q=oe()),Ye!==!1&&P.refresh())},P.getTween=function(pe){return pe&&xe?xe.tween:U},P.setPositions=function(pe,Ye,Ie,qe){if(E){var zt=E.scrollTrigger,rt=E.duration(),bt=zt.end-zt.start;pe=zt.start+bt*pe/rt,Ye=zt.start+bt*Ye/rt}P.refresh(!1,!1,{start:Wp(pe,Ie&&!!P._startClamp),end:Wp(Ye,Ie&&!!P._endClamp)},qe),P.update()},P.adjustPinSpacing=function(pe){if(he&&pe){var Ye=he.indexOf(y.d)+1;he[Ye]=parseFloat(he[Ye])+pe+Kt,he[1]=parseFloat(he[1])+pe+Kt,So(he)}},P.disable=function(pe,Ye){if(P.enabled&&(pe!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Ye||U&&U.pause(),re=0,Be&&(Be.uncache=1),te&&nn(r,"refreshInit",te),_e&&(_e.pause(),xe.tween&&xe.tween.kill()&&(xe.tween=0)),!F)){for(var Ie=nt.length;Ie--;)if(nt[Ie].scroller===L&&nt[Ie]!==P)return;nn(L,"resize",ha),F||nn(L,"scroll",js)}},P.kill=function(pe,Ye){P.disable(pe,Ye),U&&!Ye&&U.kill(),l&&delete Rf[l];var Ie=nt.indexOf(P);Ie>=0&&nt.splice(Ie,1),Ie===Rn&&Mc>0&&Rn--,Ie=0,nt.forEach(function(qe){return qe.scroller===P.scroller&&(Ie=1)}),Ie||Cn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Ye||i.kill()),pt&&[pt,Je,W,Se].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),Ta===P&&(Ta=0),d&&(Be&&(Be.uncache=1),Ie=0,nt.forEach(function(qe){return qe.pin===d&&Ie++}),Ie||(Be.spacer=0)),n.onKill&&n.onKill(P)},nt.push(P),P.enable(!1,!1),Ve&&Ve(P),i&&i.add&&!De){var Qe=P.update;P.update=function(){P.update=Qe,ot.cache++,Ae||I||P.refresh()},Ce.delayedCall(.01,P.update),De=.01,Ae=I=0}else P.refresh();d&&_E()},r.register=function(n){return so||(Ce=n||q_(),X_()&&window.document&&r.enable(),so=la),so},r.defaults=function(n){if(n)for(var i in n)Dl[i]=n[i];return Dl},r.disable=function(n,i){la=0,nt.forEach(function(o){return o[i?"kill":"disable"](n)}),nn(st,"wheel",js),nn(At,"scroll",js),clearInterval(bl),nn(At,"touchcancel",zi),nn(_t,"touchstart",zi),Cl(nn,At,"pointerdown,touchstart,mousedown",Xp),Cl(nn,At,"pointerup,touchend,mouseup",qp),zc.kill(),Rl(nn);for(var s=0;s<ot.length;s+=3)Pl(nn,ot[s],ot[s+1]),Pl(nn,ot[s],ot[s+2])},r.enable=function(){if(st=window,At=document,Qn=At.documentElement,_t=At.body,Ce&&(ka=Ce.utils.toArray,va=Ce.utils.clamp,bf=Ce.core.context||zi,Hu=Ce.core.suppressOverwrites||zi,dd=st.history.scrollRestoration||"auto",Cf=st.pageYOffset||0,Ce.core.globals("ScrollTrigger",r),_t)){la=1,yo=document.createElement("div"),yo.style.height="100vh",yo.style.position="absolute",t0(),uE(),kt.register(Ce),r.isTouch=kt.isTouch,Dr=kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),wf=kt.isTouch===1,rn(st,"wheel",js),fd=[st,At,Qn,_t],Ce.matchMedia?(r.matchMedia=function(c){var u=Ce.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Ce.addEventListener("matchMediaInit",function(){return xd()}),Ce.addEventListener("matchMediaRevert",function(){return Q_()}),Ce.addEventListener("matchMedia",function(){vs(0,1),Ls("matchMedia")}),Ce.matchMedia().add("(orientation: portrait)",function(){return qu(),qu})):console.warn("Requires GSAP 3.11.0 or later"),qu(),rn(At,"scroll",js);var n=_t.hasAttribute("style"),i=_t.style,s=i.borderTopStyle,o=Ce.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=cr(_t),Zt.m=Math.round(a.top+Zt.sc())||0,Dn.m=Math.round(a.left+Dn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_t.setAttribute("style",""),_t.removeAttribute("style")),bl=setInterval(Jp,250),Ce.delayedCall(.5,function(){return Al=0}),rn(At,"touchcancel",zi),rn(_t,"touchstart",zi),Cl(rn,At,"pointerdown,touchstart,mousedown",Xp),Cl(rn,At,"pointerup,touchend,mouseup",qp),Ef=Ce.utils.checkPrefix("transform"),Tc.push(Ef),so=mn(),zc=Ce.delayedCall(.2,vs).pause(),oo=[At,"visibilitychange",function(){var c=st.innerWidth,u=st.innerHeight;At.hidden?(Vp=c,Hp=u):(Vp!==c||Hp!==u)&&ha()},At,"DOMContentLoaded",vs,st,"load",vs,st,"resize",ha],Rl(rn),nt.forEach(function(c){return c.enable(0,1)}),l=0;l<ot.length;l+=3)Pl(nn,ot[l],ot[l+1]),Pl(nn,ot[l],ot[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Gu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(bl)||(bl=i)&&setInterval(Jp,i),"ignoreMobileResize"in n&&(wf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Rl(nn)||Rl(rn,n.autoRefreshEvents||"none"),H_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Nn(n),o=ot.indexOf(s),a=Ps(s);~o&&ot.splice(o,a?6:2),i&&(a?Gi.unshift(st,i,_t,i,Qn,i):Gi.unshift(s,i))},r.clearMatchMedia=function(n){nt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Zn(n)?Nn(n):n).getBoundingClientRect(),a=o[s?Ts:Es]*i||0;return s?o.right-a>0&&o.left+a<st.innerWidth:o.bottom-a>0&&o.top+a<st.innerHeight},r.positionInViewport=function(n,i,s){Zn(n)&&(n=Nn(n));var o=n.getBoundingClientRect(),a=o[s?Ts:Es],l=i==null?a/2:i in Vc?Vc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/st.innerWidth:(o.top+l)/st.innerHeight},r.killAll=function(n){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ds.killAll||[];Ds={},i.forEach(function(s){return s()})}},r}();lt.version="3.13.0";lt.saveStyles=function(r){return r?ka(r).forEach(function(e){if(e&&e.style){var t=Kn.indexOf(e);t>=0&&Kn.splice(t,5),Kn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),bf())}}):Kn};lt.revert=function(r,e){return xd(!r,e)};lt.create=function(r,e){return new lt(r,e)};lt.refresh=function(r){return r?ha(!0):(so||lt.register())&&vs(!0)};lt.update=function(r){return++ot.cache&&pr(r===!0?2:0)};lt.clearScrollMemory=e0;lt.maxScroll=function(r,e){return Vi(r,e?Dn:Zt)};lt.getScrollFunc=function(r,e){return Jr(Nn(r),e?Dn:Zt)};lt.getById=function(r){return Rf[r]};lt.getAll=function(){return nt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};lt.isScrolling=function(){return!!wi};lt.snapDirectional=vd;lt.addEventListener=function(r,e){var t=Ds[r]||(Ds[r]=[]);~t.indexOf(e)||t.push(e)};lt.removeEventListener=function(r,e){var t=Ds[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};lt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ce.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&vn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return vn(s)&&(s=s(),rn(lt,"refresh",function(){return s=e.batchMax()})),ka(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(lt.create(c))}),t};var tm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},$u=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(kt.isTouch?" pinch-zoom":""):"none",e===Qn&&r(_t,t)},Nl={auto:1,scroll:1},ME=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ce.core.getCache(s),a=mn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Nl[(l=_i(s)).overflowY]||Nl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ps(s)&&(Nl[(l=_i(s)).overflowY]||Nl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},i0=function(e,t,n,i){return kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ME,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&rn(At,kt.eventTypes[0],im,!1,!0)},onDisable:function(){return nn(At,kt.eventTypes[0],im,!0)}})},TE=/(input|label|select|textarea)/i,nm,im=function(e){var t=TE.test(e.target.tagName);(t||nm)&&(e._gsapAllow=!0,nm=t)},EE=function(e){ms(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Nn(e.target)||Qn,u=Ce.core.globals().ScrollSmoother,h=u&&u.get(),f=Dr&&(e.content&&Nn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Jr(c,Zt),g=Jr(c,Dn),_=1,m=(kt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,p=0,M=vn(i)?function(){return i(a)}:function(){return i||2.8},S,v,w=i0(c,e.type,!0,s),T=function(){return v=!1},E=zi,b=zi,x=function(){l=Vi(c,Zt),b=va(Dr?1:0,l),n&&(E=va(0,Vi(c,Dn))),S=ws},y=function(){f._gsap.y=ca(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},C=function(){if(v){requestAnimationFrame(T);var V=ca(a.deltaY/2),j=b(d.v-V);if(f&&j!==d.v+d.offset){d.offset=j-d.v;var P=ca((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=ot.cache,pr()}return!0}d.offset&&y(),v=!0},L,N,F,z,O=function(){x(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return f&&Ce.set(f,{y:"+=0"}),e.ignoreCheck=function(H){return Dr&&H.type==="touchmove"&&C()||_>1.05&&H.type!=="touchstart"||a.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){v=!1;var H=_;_=ca((st.visualViewport&&st.visualViewport.scale||1)/m),L.pause(),H!==_&&$u(c,_>1.01?!0:n?!1:"x"),N=g(),F=d(),x(),S=ws},e.onRelease=e.onGestureStart=function(H,V){if(d.offset&&y(),!V)z.restart(!0);else{ot.cache++;var j=M(),P,te;n&&(P=g(),te=P+j*.05*-H.velocityX/.227,j*=tm(g,P,te,Vi(c,Dn)),L.vars.scrollX=E(te)),P=d(),te=P+j*.05*-H.velocityY/.227,j*=tm(d,P,te,Vi(c,Zt)),L.vars.scrollY=b(te),L.invalidate().duration(j).play(.01),(Dr&&L.vars.scrollY>=l||P>=l-1)&&Ce.to({},{onUpdate:O,duration:j})}o&&o(H)},e.onWheel=function(){L._ts&&L.pause(),mn()-p>1e3&&(S=0,p=mn())},e.onChange=function(H,V,j,P,te){if(ws!==S&&x(),V&&n&&g(E(P[2]===V?N+(H.startX-H.x):g()+V-P[1])),j){d.offset&&y();var Te=te[2]===j,we=Te?F+H.startY-H.y:d()+j-te[1],q=b(we);Te&&we!==q&&(F+=q-we),d(q)}(j||V)&&pr()},e.onEnable=function(){$u(c,n?!1:"x"),lt.addEventListener("refresh",O),rn(st,"resize",O),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){$u(c,!0),nn(st,"resize",O),lt.removeEventListener("refresh",O),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new kt(e),a.iOS=Dr,Dr&&!d()&&d(1),Dr&&Ce.ticker.add(zi),z=a._dc,L=Ce.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:n0(d,d(),function(){return L.pause()})},onUpdate:pr,onComplete:z.vars.onComplete}),a};lt.sort=function(r){if(vn(r))return nt.sort(r);var e=st.pageYOffset||0;return lt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),nt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};lt.observe=function(r){return new kt(r)};lt.normalizeScroll=function(r){if(typeof r>"u")return An;if(r===!0&&An)return An.enable();if(r===!1){An&&An.kill(),An=r;return}var e=r instanceof kt?r:EE(r);return An&&An.target===e.target&&An.kill(),Ps(e.target)&&(An=e),e};lt.core={_getVelocityProp:Tf,_inputObserver:i0,_scrollers:ot,_proxies:Gi,bridge:{ss:function(){wi||Ls("scrollStart"),wi=mn()},ref:function(){return pn}}};q_()&&Ce.registerPlugin(lt);var wE="1.3.4";function r0(r,e,t){return Math.max(r,Math.min(e,t))}function bE(r,e,t){return(1-t)*r+t*e}function AE(r,e,t,n){return bE(r,e,1-Math.exp(-t*n))}function RE(r,e){return(r%e+e)%e}var CE=class{constructor(){ze(this,"isRunning",!1);ze(this,"value",0);ze(this,"from",0);ze(this,"to",0);ze(this,"currentTime",0);ze(this,"lerp");ze(this,"duration");ze(this,"easing");ze(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=r0(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=AE(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function PE(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var DE=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){ze(this,"width",0);ze(this,"height",0);ze(this,"scrollHeight",0);ze(this,"scrollWidth",0);ze(this,"debouncedResize");ze(this,"wrapperResizeObserver");ze(this,"contentResizeObserver");ze(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});ze(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});ze(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=PE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},s0=class{constructor(){ze(this,"events",{})}emit(r,...e){var n;let t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){var t;return(t=this.events[r])!=null&&t.push(e)||(this.events[r]=[e]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>e!==i)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}},rm=100/6,wr={passive:!1},LE=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){ze(this,"touchStart",{x:0,y:0});ze(this,"lastDelta",{x:0,y:0});ze(this,"window",{width:0,height:0});ze(this,"emitter",new s0);ze(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});ze(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});ze(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});ze(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?rm:n===2?this.window.width:1,s=n===1?rm:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});ze(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,wr),this.element.addEventListener("touchstart",this.onTouchStart,wr),this.element.addEventListener("touchmove",this.onTouchMove,wr),this.element.addEventListener("touchend",this.onTouchEnd,wr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,wr),this.element.removeEventListener("touchstart",this.onTouchStart,wr),this.element.removeEventListener("touchmove",this.onTouchMove,wr),this.element.removeEventListener("touchend",this.onTouchEnd,wr)}},sm=r=>Math.min(1,1.001-Math.pow(2,-10*r)),UE=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f="vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:M=!0,autoRaf:S=!1,anchors:v=!1,autoToggle:w=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:E=!1}={}){ze(this,"_isScrolling",!1);ze(this,"_isStopped",!1);ze(this,"_isLocked",!1);ze(this,"_preventNextNativeScrollEvent",!1);ze(this,"_resetVelocityTimeout",null);ze(this,"__rafID",null);ze(this,"isTouching");ze(this,"time",0);ze(this,"userData",{});ze(this,"lastVelocity",0);ze(this,"velocity",0);ze(this,"direction",0);ze(this,"options");ze(this,"targetScroll");ze(this,"animatedScroll");ze(this,"animate",new CE);ze(this,"emitter",new s0);ze(this,"dimensions");ze(this,"virtualScroll");ze(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});ze(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});ze(this,"onTransitionEnd",r=>{if(r.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.stop():this.start()}});ze(this,"onClick",r=>{const t=r.composedPath().find(n=>{var i,s,o;return n instanceof HTMLAnchorElement&&(((i=n.getAttribute("href"))==null?void 0:i.startsWith("#"))||((s=n.getAttribute("href"))==null?void 0:s.startsWith("/#"))||((o=n.getAttribute("href"))==null?void 0:o.startsWith("./#")))});if(t){const n=t.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;let s=`#${n.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(n)&&(s=0),this.scrollTo(s,i)}}});ze(this,"onPointerDown",r=>{r.button===1&&this.reset()});ze(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>{var p,M,S;return m instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(m))||((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent"))||i&&((M=m.hasAttribute)==null?void 0:M.call(m,"data-lenis-prevent-touch"))||s&&((S=m.hasAttribute)==null?void 0:S.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const d=i&&this.options.syncTouch,_=i&&n.type==="touchend"&&Math.abs(f)>5;_&&(f=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});ze(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});ze(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=wE,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=sm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:M,autoRaf:S,anchors:v,autoToggle:w,allowNestedScroll:T,__experimental__naiveDimensions:E},this.dimensions=new DE(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new LE(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?f=document.querySelector(r):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(f=r),f){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const f=r-this.animatedScroll;f>this.limit/2?r=r-this.limit:f<-this.limit/2&&(r=r+this.limit)}}else r=r0(0,r,this.limit);if(r===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=r),typeof i=="number"&&typeof s!="function"?s=sm:typeof s=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??(r._lenis={});let s,o,a,l,c,u,h,f;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);i.computedStyle=w;const T=w.overflowX,E=w.overflowY;if(s=["auto","overlay","scroll"].includes(T),o=["auto","overlay","scroll"].includes(E),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,f=r.clientHeight,a=c>h,l=u>f,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=f}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,f=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let g;if(d==="horizontal")g="x";else if(d==="vertical")g="y";else{const w=e!==0,T=t!==0;w&&s&&a&&(g="x"),T&&o&&l&&(g="y")}if(!g)return!1;let _,m,p,M,S;if(g==="x")_=r.scrollLeft,m=c-h,p=e,M=s,S=a;else if(g==="y")_=r.scrollTop,m=u-f,p=t,M=o,S=l;else return!1;return(p>0?_<m:_>0)&&M&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?RE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};let Ju,br,Jo,os,om,Ku=[],Ol=new Xe,Zu=0;function IE(){let r=document.querySelector("#aboutPageMyImg").getBoundingClientRect(),e={x:r.left+r.width/2-window.innerWidth/2,y:r.top+r.height/2-window.innerHeight/2};const t=new UE;function n(S){t.raf(S),requestAnimationFrame(n)}requestAnimationFrame(n),at.registerPlugin(lt);let i=0,s=0;t.on("scroll",({scroll:S})=>{s=S;let v=Math.sign(s-i);i=s,document.body.scrollHeight-S-document.querySelector(".page3").offsetHeight<15&&v===1&&l()});let o=!1;const a=document.querySelectorAll(".footer-image"),l=()=>{if(o)return;o=!0,document.body.scrollHeight;const S=window.innerWidth;a.forEach(v=>{const w=at.utils.random(.7,1,.01),T=at.utils.random(-S*0,S*.95),E=Math.random()<.5?1:-1,b=at.utils.random(400,570),x=at.utils.random(-100,100);at.set(v,{x:0,y:0,scale:w,left:T+"px",top:"100%",rotate:0,opacity:1}),at.to(v,{y:-b,x:E*150/2,rotate:x,duration:1.5,ease:"power2.out",onComplete:()=>{at.to(v,{opacity:0,y:0,duration:1.5,ease:"power2.in",onComplete:()=>{o=!1}})}})})},c=`
  //   attribute vec3 color;
  varying vec3 vColor;
  
  void main() {
    vColor = color;
    gl_PointSize = 3.5;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,u=`
    varying vec3 vColor;
    uniform float uOpacity;
    void main() {
      
    float dist = length(gl_PointCoord - vec2(0.5));
    // if (dist > 0.5) discard;
    
    gl_FragColor = vec4(vColor,uOpacity);
    }
    `,h={logoPath:"images/myimg1.jpg",logoSize:480,logoScaleX:.5,logoScaleY:.5,distortionRadius:600,forceStrength:.015,maxDisplacement:100,returnForce:.06};Ju=new Hf,br=new Yc(-window.innerWidth/2,window.innerWidth/2,window.innerHeight/2,-window.innerHeight/2,-1e3,1e3),br.position.z=1;let f=document.querySelector("#aboutCanvas");Jo=new Yf({antialias:!0,canvas:f,alpha:!0}),Jo.setSize(window.innerWidth,window.innerHeight);const d=new Image;d.crossOrigin="anonymous",d.src=h.logoPath,d.onload=()=>g(d);function g(S){const v=document.createElement("canvas"),w=v.getContext("2d");v.width=h.logoSize,v.height=h.logoSize;const E=h.logoSize*.9,b=(h.logoSize-E)/2;w.drawImage(S,b,b,E,E);const x=w.getImageData(0,0,h.logoSize,h.logoSize).data,y=[],C=[];for(let N=0;N<h.logoSize;N++)for(let F=0;F<h.logoSize;F++){const z=(N*h.logoSize+F)*4;if(x[z+3]>10){const H=x[z]/255,V=x[z+1]/255,j=x[z+2]/255,P=(F-h.logoSize/2)*2*h.logoScaleX+e.x,te=-(N-h.logoSize/2)*2*h.logoScaleY-e.y;y.push(P,te,0),C.push(H,V,j),Ku.push({originalX:P,originalY:te,x:P,y:te,vx:0,vy:0})}}os=new bi,os.setAttribute("position",new Bn(y,3)),os.setAttribute("color",new Bn(C,3));const L=new It({vertexShader:c,fragmentShader:u,uniforms:{uOpacity:{value:0}},transparent:!0,vertexColors:!0});at.to(L.uniforms.uOpacity,{value:1,duration:1.5,ease:"power1.in"}),om=new Ag(os,L),Ju.add(om),_()}window.addEventListener("mousemove",S=>{const v=Jo.domElement.getBoundingClientRect();Ol.x=S.clientX-v.left-window.innerWidth/2,Ol.y=-(S.clientY-v.top-window.innerHeight/2),Zu=300}),window.addEventListener("resize",()=>{Jo.setSize(window.innerWidth,window.innerHeight),br.left=-window.innerWidth/2,br.right=window.innerWidth/2,br.top=window.innerHeight/2,br.bottom=-window.innerHeight/2,br.updateProjectionMatrix()});function _(){requestAnimationFrame(_),m(),Jo.render(Ju,br)}function m(){if(!os||Zu<=0)return;Zu--;const S=os.attributes.position.array,v=h.distortionRadius*h.distortionRadius;for(let w=0;w<Ku.length;w++){const T=Ku[w],E=Ol.x-T.x,b=Ol.y-T.y,x=E*E+b*b;if(x<v&&x>0){const z=-v/x,O=Math.atan2(b,E),H=Math.sqrt((T.x-T.originalX)**2+(T.y-T.originalY)**2),V=Math.max(.1,1-H/(h.maxDisplacement*2));T.vx+=Math.cos(O)*z*h.forceStrength*V,T.vy+=Math.sin(O)*z*h.forceStrength*V}T.vx*=.82,T.vy*=.82;const y=T.x+T.vx+(T.originalX-T.x)*h.returnForce,C=T.y+T.vy+(T.originalY-T.y)*h.returnForce,L=y-T.originalX,N=C-T.originalY,F=Math.hypot(L,N);if(F>h.maxDisplacement){const z=F-h.maxDisplacement,O=h.maxDisplacement/F,H=O+(1-O)*Math.exp(-z*.02);T.x=T.originalX+L*H,T.y=T.originalY+N*H,T.vx*=.7,T.vy*=.7}else T.x=y,T.y=C;S[w*3]=T.x,S[w*3+1]=T.y}os.attributes.position.needsUpdate=!0}document.querySelectorAll("#textOnLoad").forEach(S=>{let v=S.querySelectorAll("span");at.fromTo(v,{y:"100%"},{y:"0%",stagger:.03,duration:1})}),at.to(".beep",{opacity:1,repeat:-1,duration:.5,yoyo:!0,ease:"linear"}),at.fromTo(".page3 #scrollText span",{y:"105%"},{y:"0%",stagger:.015,duration:.8,scrollTrigger:{trigger:".page3 #scrollText",scroller:document.body,start:"top 75%"}}),document.querySelectorAll("#HoverText").forEach(S=>{let v=S.querySelectorAll("p");S.addEventListener("mouseenter",()=>{at.to(v,{y:"-100%",duration:.3})}),S.addEventListener("mouseleave",()=>{at.to(v,{y:"0%",duration:.3})})}),document.querySelectorAll(".page2 .elem").forEach(S=>{S.addEventListener("mouseenter",()=>{let v=S.querySelector("#bg");at.to(v,{width:"100%",duration:.7,opacity:1})}),S.addEventListener("mouseleave",()=>{let v=S.querySelector("#bg");at.to(v,{width:"0%",opacity:0})})}),document.querySelectorAll(".page2 #scrollText").forEach(S=>{let v=S.querySelectorAll("span");at.fromTo(v,{y:"105%"},{y:"0%",duration:.8,scrollTrigger:{trigger:S,scroller:document.body,start:"top 80%"}})}),console.log("about Start")}IE();class NE extends jv{constructor(e){super(e),this.type=yn}parse(e){const o=function(b,x){switch(b){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},u=`
`,h=function(b,x,y){x=x||1024;let L=b.pos,N=-1,F=0,z="",O=String.fromCharCode.apply(null,new Uint16Array(b.subarray(L,L+128)));for(;0>(N=O.indexOf(u))&&F<x&&L<b.byteLength;)z+=O,F+=O.length,L+=128,O+=String.fromCharCode.apply(null,new Uint16Array(b.subarray(L,L+128)));return-1<N?(b.pos+=F+N+1,z+O.slice(0,N)):!1},f=function(b){const x=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,N=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let z,O;for((b.pos>=b.byteLength||!(z=h(b)))&&o(1,"no header found"),(O=z.match(x))||o(3,"bad initial token"),F.valid|=1,F.programtype=O[1],F.string+=z+`
`;z=h(b),z!==!1;){if(F.string+=z+`
`,z.charAt(0)==="#"){F.comments+=z+`
`;continue}if((O=z.match(y))&&(F.gamma=parseFloat(O[1])),(O=z.match(C))&&(F.exposure=parseFloat(O[1])),(O=z.match(L))&&(F.valid|=2,F.format=O[1]),(O=z.match(N))&&(F.valid|=4,F.height=parseInt(O[1],10),F.width=parseInt(O[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||o(3,"missing format specifier"),F.valid&4||o(3,"missing image size specifier"),F},d=function(b,x,y){const C=x;if(C<8||C>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);C!==(b[2]<<8|b[3])&&o(3,"wrong scanline width");const L=new Uint8Array(4*x*y);L.length||o(4,"unable to allocate buffer space");let N=0,F=0;const z=4*C,O=new Uint8Array(4),H=new Uint8Array(z);let V=y;for(;V>0&&F<b.byteLength;){F+4>b.byteLength&&o(1),O[0]=b[F++],O[1]=b[F++],O[2]=b[F++],O[3]=b[F++],(O[0]!=2||O[1]!=2||(O[2]<<8|O[3])!=C)&&o(3,"bad rgbe scanline format");let j=0,P;for(;j<z&&F<b.byteLength;){P=b[F++];const Te=P>128;if(Te&&(P-=128),(P===0||j+P>z)&&o(3,"bad scanline data"),Te){const we=b[F++];for(let q=0;q<P;q++)H[j++]=we}else H.set(b.subarray(F,F+P),j),j+=P,F+=P}const te=C;for(let Te=0;Te<te;Te++){let we=0;L[N]=H[Te+we],we+=C,L[N+1]=H[Te+we],we+=C,L[N+2]=H[Te+we],we+=C,L[N+3]=H[Te+we],N+=4}V--}return L},g=function(b,x,y,C){const L=b[x+3],N=Math.pow(2,L-128)/255;y[C+0]=b[x+0]*N,y[C+1]=b[x+1]*N,y[C+2]=b[x+2]*N,y[C+3]=1},_=function(b,x,y,C){const L=b[x+3],N=Math.pow(2,L-128)/255;y[C+0]=al.toHalfFloat(Math.min(b[x+0]*N,65504)),y[C+1]=al.toHalfFloat(Math.min(b[x+1]*N,65504)),y[C+2]=al.toHalfFloat(Math.min(b[x+2]*N,65504)),y[C+3]=al.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=f(m),M=p.width,S=p.height,v=d(m.subarray(m.pos),M,S);let w,T,E;switch(this.type){case vi:E=v.length/4;const b=new Float32Array(E*4);for(let y=0;y<E;y++)g(v,y*4,b,y*4);w=b,T=vi;break;case yn:E=v.length/4;const x=new Uint16Array(E*4);for(let y=0;y<E;y++)_(v,y*4,x,y*4);w=x,T=yn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:M,height:S,data:w,header:p.string,gamma:p.gamma,exposure:p.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case vi:case yn:o.colorSpace=Rs,o.minFilter=sn,o.magFilter=sn,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}}const bs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class zo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const OE=new Yc(-1,1,1,-1,0,1);class FE extends bi{constructor(){super(),this.setAttribute("position",new Bn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bn([0,2,0,0,2,0],2))}}const zE=new FE;class yd{constructor(e){this._mesh=new ni(zE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,OE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class o0 extends zo{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=lr.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new yd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class am extends zo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class BE extends zo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class kE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Xe);this._width=n.width,this._height=n.height,t=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new o0(bs),this.copyPass.material.blending=Gt,this.clock=new Rg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}am!==void 0&&(o instanceof am?n=!0:o instanceof BE&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class VE extends zo{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new et}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const HE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new et(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Io extends zo{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Xe(e.x,e.y):new Xe(256,256),this.clearColor=new et(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(s,o,{type:yn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new gn(s,o,{type:yn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new gn(s,o,{type:yn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=HE;this.highPassUniforms=lr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Xe(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=lr.clone(bs.uniforms),this.blendMaterial=new It({uniforms:this.copyUniforms,vertexShader:bs.vertexShader,fragmentShader:bs.fragmentShader,blending:xh,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new et,this._oldClearAlpha=1,this._basic=new La,this._fsQuad=new yd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Xe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Io.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Io.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new It({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Xe(.5,.5)},direction:{value:new Xe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new It({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Io.BlurDirectionX=new Xe(1,0);Io.BlurDirectionY=new Xe(0,1);const Oi={defines:{MAX_STEP:0,PERSPECTIVE_CAMERA:!0,DISTANCE_ATTENUATION:!0,FRESNEL:!0,INFINITE_THICK:!1,SELECTIVE:!1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tMetalness:{value:null},tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Xe},cameraProjectionMatrix:{value:new qt},cameraInverseProjectionMatrix:{value:new qt},opacity:{value:.5},maxDistance:{value:180},cameraRange:{value:0},thickness:{value:.018}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`
		// precision highp float;
		precision highp sampler2D;
		varying vec2 vUv;
		uniform sampler2D tDepth;
		uniform sampler2D tNormal;
		uniform sampler2D tMetalness;
		uniform sampler2D tDiffuse;
		uniform float cameraRange;
		uniform vec2 resolution;
		uniform float opacity;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform float maxDistance;
		uniform float thickness;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;
		#include <packing>
		float pointToLineDistance(vec3 x0, vec3 x1, vec3 x2) {
			//x0: point, x1: linePointA, x2: linePointB
			//https://mathworld.wolfram.com/Point-LineDistance3-Dimensional.html
			return length(cross(x0-x1,x0-x2))/length(x2-x1);
		}
		float pointPlaneDistance(vec3 point,vec3 planePoint,vec3 planeNormal){
			// https://mathworld.wolfram.com/Point-PlaneDistance.html
			//// https://en.wikipedia.org/wiki/Plane_(geometry)
			//// http://paulbourke.net/geometry/pointlineplane/
			float a=planeNormal.x,b=planeNormal.y,c=planeNormal.z;
			float x0=point.x,y0=point.y,z0=point.z;
			float x=planePoint.x,y=planePoint.y,z=planePoint.z;
			float d=-(a*x+b*y+c*z);
			float distance=(a*x0+b*y0+c*z0+d)/sqrt(a*a+b*b+c*c);
			return distance;
		}
		float getDepth( const in vec2 uv ) {
			return texture2D( tDepth, uv ).x;
		}
		float getViewZ( const in float depth ) {
			#ifdef PERSPECTIVE_CAMERA
				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}
		vec3 getViewPosition( const in vec2 uv, const in float depth/*clip space*/, const in float clipW ) {
			vec4 clipPosition = vec4( ( vec3( uv, depth ) - 0.5 ) * 2.0, 1.0 );//ndc
			clipPosition *= clipW; //clip
			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;//view
		}
		vec3 getViewNormal( const in vec2 uv ) {
			return unpackRGBToNormal( texture2D( tNormal, uv ).xyz );
		}
		vec2 viewPositionToXY(vec3 viewPosition){
			vec2 xy;
			vec4 clip=cameraProjectionMatrix*vec4(viewPosition,1);
			xy=clip.xy;//clip
			float clipW=clip.w;
			xy/=clipW;//NDC
			xy=(xy+1.)/2.;//uv
			xy*=resolution;//screen
			return xy;
		}
		void main(){
			#ifdef SELECTIVE
				float metalness=texture2D(tMetalness,vUv).r;
				if(metalness==0.) return;
			#endif

			float depth = getDepth( vUv );
			float viewZ = getViewZ( depth );
			if(-viewZ>=cameraFar) return;

			float clipW = cameraProjectionMatrix[2][3] * viewZ+cameraProjectionMatrix[3][3];
			vec3 viewPosition=getViewPosition( vUv, depth, clipW );

			vec2 d0=gl_FragCoord.xy;
			vec2 d1;

			vec3 viewNormal=getViewNormal( vUv );

			#ifdef PERSPECTIVE_CAMERA
				vec3 viewIncidentDir=normalize(viewPosition);
				vec3 viewReflectDir=reflect(viewIncidentDir,viewNormal);
			#else
				vec3 viewIncidentDir=vec3(0,0,-1);
				vec3 viewReflectDir=reflect(viewIncidentDir,viewNormal);
			#endif

			float maxReflectRayLen=maxDistance/dot(-viewIncidentDir,viewNormal);
			// dot(a,b)==length(a)*length(b)*cos(theta) // https://www.mathsisfun.com/algebra/vectors-dot-product.html
			// if(a.isNormalized&&b.isNormalized) dot(a,b)==cos(theta)
			// maxDistance/maxReflectRayLen=cos(theta)
			// maxDistance/maxReflectRayLen==dot(a,b)
			// maxReflectRayLen==maxDistance/dot(a,b)

			vec3 d1viewPosition=viewPosition+viewReflectDir*maxReflectRayLen;
			#ifdef PERSPECTIVE_CAMERA
				if(d1viewPosition.z>-cameraNear){
					//https://tutorial.math.lamar.edu/Classes/CalcIII/EqnsOfLines.aspx
					float t=(-cameraNear-viewPosition.z)/viewReflectDir.z;
					d1viewPosition=viewPosition+viewReflectDir*t;
				}
			#endif
			d1=viewPositionToXY(d1viewPosition);

			float totalLen=length(d1-d0);
			float xLen=d1.x-d0.x;
			float yLen=d1.y-d0.y;
			float totalStep=max(abs(xLen),abs(yLen));
			float xSpan=xLen/totalStep;
			float ySpan=yLen/totalStep;
			for(float i=0.;i<float(MAX_STEP);i++){
				if(i>=totalStep) break;
				vec2 xy=vec2(d0.x+i*xSpan,d0.y+i*ySpan);
				if(xy.x<0.||xy.x>resolution.x||xy.y<0.||xy.y>resolution.y) break;
				float s=length(xy-d0)/totalLen;
				vec2 uv=xy/resolution;

				float d = getDepth(uv);
				float vZ = getViewZ( d );
				if(-vZ>=cameraFar) continue;
				float cW = cameraProjectionMatrix[2][3] * vZ+cameraProjectionMatrix[3][3];
				vec3 vP=getViewPosition( uv, d, cW );

				#ifdef PERSPECTIVE_CAMERA
					// https://comp.nus.edu.sg/~lowkl/publications/lowk_persp_interp_techrep.pdf
					float recipVPZ=1./viewPosition.z;
					float viewReflectRayZ=1./(recipVPZ+s*(1./d1viewPosition.z-recipVPZ));
				#else
					float viewReflectRayZ=viewPosition.z+s*(d1viewPosition.z-viewPosition.z);
				#endif

				// if(viewReflectRayZ>vZ) continue; // will cause "npm run make-screenshot webgl_postprocessing_ssr" high probability hang.
				// https://github.com/mrdoob/three.js/pull/21539#issuecomment-821061164
				if(viewReflectRayZ<=vZ){

					bool hit;
					#ifdef INFINITE_THICK
						hit=true;
					#else
						float away=pointToLineDistance(vP,viewPosition,d1viewPosition);

						float minThickness;
						vec2 xyNeighbor=xy;
						xyNeighbor.x+=1.;
						vec2 uvNeighbor=xyNeighbor/resolution;
						vec3 vPNeighbor=getViewPosition(uvNeighbor,d,cW);
						minThickness=vPNeighbor.x-vP.x;
						minThickness*=3.;
						float tk=max(minThickness,thickness);

						hit=away<=tk;
					#endif

					if(hit){
						vec3 vN=getViewNormal( uv );
						if(dot(viewReflectDir,vN)>=0.) continue;
						float distance=pointPlaneDistance(vP,viewPosition,viewNormal);
						if(distance>maxDistance) break;
						float op=opacity;
						#ifdef DISTANCE_ATTENUATION
							float ratio=1.-(distance/maxDistance);
							float attenuation=ratio*ratio;
							op=opacity*attenuation;
						#endif
						#ifdef FRESNEL
							float fresnelCoe=(dot(viewIncidentDir,viewReflectDir)+1.)/2.;
							op*=fresnelCoe;
						#endif
						vec4 reflectColor=texture2D(tDiffuse,uv);
						gl_FragColor.xyz=reflectColor.xyz;
						gl_FragColor.a=op;
						break;
					}
				}
			}
		}
	`},Fl={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 uv ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, uv ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, uv ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			float d = 1.0 - depth;
			// d=(d-.999)*1000.;
			gl_FragColor = vec4( vec3( d ), 1.0 );

		}

	`},Ar={uniforms:{tDiffuse:{value:null},resolution:{value:new Xe},opacity:{value:.5}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;
		void main() {
			//reverse engineering from PhotoShop blur filter, then change coefficient

			vec2 texelSize = ( 1.0 / resolution );

			vec4 c=texture2D(tDiffuse,vUv);

			vec2 offset;

			offset=(vec2(-1,0))*texelSize;
			vec4 cl=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(1,0))*texelSize;
			vec4 cr=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(0,-1))*texelSize;
			vec4 cb=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(0,1))*texelSize;
			vec4 ct=texture2D(tDiffuse,vUv+offset);

			// float coeCenter=.5;
			// float coeSide=.125;
			float coeCenter=.2;
			float coeSide=.2;
			float a=c.a*coeCenter+cl.a*coeSide+cr.a*coeSide+cb.a*coeSide+ct.a*coeSide;
			vec3 rgb=(c.rgb*c.a*coeCenter+cl.rgb*cl.a*coeSide+cr.rgb*cr.a*coeSide+cb.rgb*cb.a*coeSide+ct.rgb*ct.a*coeSide)/a;
			gl_FragColor=vec4(rgb,a);

		}
	`};class sr extends zo{constructor({renderer:e,scene:t,camera:n,width:i=512,height:s=512,selects:o=null,bouncing:a=!1,groundReflector:l=null}){super(),this.width=i,this.height=s,this.clear=!0,this.renderer=e,this.scene=t,this.camera=n,this.groundReflector=l,this.opacity=Oi.uniforms.opacity.value,this.output=0,this.maxDistance=Oi.uniforms.maxDistance.value,this.thickness=Oi.uniforms.thickness.value,this.tempColor=new et,this._selects=o,this.selective=Array.isArray(this._selects),Object.defineProperty(this,"selects",{get(){return this._selects},set(u){this._selects!==u&&(this._selects=u,Array.isArray(u)?(this.selective=!0,this.ssrMaterial.defines.SELECTIVE=!0,this.ssrMaterial.needsUpdate=!0):(this.selective=!1,this.ssrMaterial.defines.SELECTIVE=!1,this.ssrMaterial.needsUpdate=!0))}}),this._bouncing=a,Object.defineProperty(this,"bouncing",{get(){return this._bouncing},set(u){this._bouncing!==u&&(this._bouncing=u,u?this.ssrMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture:this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture)}}),this.blur=!0,this._distanceAttenuation=Oi.defines.DISTANCE_ATTENUATION,Object.defineProperty(this,"distanceAttenuation",{get(){return this._distanceAttenuation},set(u){this._distanceAttenuation!==u&&(this._distanceAttenuation=u,this.ssrMaterial.defines.DISTANCE_ATTENUATION=u,this.ssrMaterial.needsUpdate=!0)}}),this._fresnel=Oi.defines.FRESNEL,Object.defineProperty(this,"fresnel",{get(){return this._fresnel},set(u){this._fresnel!==u&&(this._fresnel=u,this.ssrMaterial.defines.FRESNEL=u,this.ssrMaterial.needsUpdate=!0)}}),this._infiniteThick=Oi.defines.INFINITE_THICK,Object.defineProperty(this,"infiniteThick",{get(){return this._infiniteThick},set(u){this._infiniteThick!==u&&(this._infiniteThick=u,this.ssrMaterial.defines.INFINITE_THICK=u,this.ssrMaterial.needsUpdate=!0)}});const c=new Wf;c.type=wo,c.minFilter=yt,c.magFilter=yt,this.beautyRenderTarget=new gn(this.width,this.height,{minFilter:yt,magFilter:yt,type:yn,depthTexture:c,depthBuffer:!0}),this.prevRenderTarget=new gn(this.width,this.height,{minFilter:yt,magFilter:yt}),this.normalRenderTarget=new gn(this.width,this.height,{minFilter:yt,magFilter:yt,type:yn}),this.metalnessRenderTarget=new gn(this.width,this.height,{minFilter:yt,magFilter:yt,type:yn}),this.ssrRenderTarget=new gn(this.width,this.height,{minFilter:yt,magFilter:yt}),this.blurRenderTarget=this.ssrRenderTarget.clone(),this.blurRenderTarget2=this.ssrRenderTarget.clone(),this.ssrMaterial=new It({defines:Object.assign({},Oi.defines,{MAX_STEP:Math.sqrt(this.width*this.width+this.height*this.height)}),uniforms:lr.clone(Oi.uniforms),vertexShader:Oi.vertexShader,fragmentShader:Oi.fragmentShader,blending:Gt}),this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssrMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssrMaterial.defines.SELECTIVE=this.selective,this.ssrMaterial.needsUpdate=!0,this.ssrMaterial.uniforms.tMetalness.value=this.metalnessRenderTarget.texture,this.ssrMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.ssrMaterial.uniforms.cameraNear.value=this.camera.near,this.ssrMaterial.uniforms.cameraFar.value=this.camera.far,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.ssrMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Wv,this.normalMaterial.blending=Gt,this.metalnessOnMaterial=new La({color:"white"}),this.metalnessOffMaterial=new La({color:"black"}),this.blurMaterial=new It({defines:Object.assign({},Ar.defines),uniforms:lr.clone(Ar.uniforms),vertexShader:Ar.vertexShader,fragmentShader:Ar.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.blurMaterial2=new It({defines:Object.assign({},Ar.defines),uniforms:lr.clone(Ar.uniforms),vertexShader:Ar.vertexShader,fragmentShader:Ar.fragmentShader}),this.blurMaterial2.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.blurMaterial2.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new It({defines:Object.assign({},Fl.defines),uniforms:lr.clone(Fl.uniforms),vertexShader:Fl.vertexShader,fragmentShader:Fl.fragmentShader,blending:Gt}),this.depthRenderMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new It({uniforms:lr.clone(bs.uniforms),vertexShader:bs.vertexShader,fragmentShader:bs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ba,blendDst:Aa,blendEquation:or,blendSrcAlpha:ba,blendDstAlpha:Aa,blendEquationAlpha:or}),this.fsQuad=new yd(null),this.originalClearColor=new et}dispose(){this.beautyRenderTarget.dispose(),this.prevRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.metalnessRenderTarget.dispose(),this.ssrRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.blurRenderTarget2.dispose(),this.normalMaterial.dispose(),this.metalnessOnMaterial.dispose(),this.metalnessOffMaterial.dispose(),this.blurMaterial.dispose(),this.blurMaterial2.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t){switch(e.setRenderTarget(this.beautyRenderTarget),e.clear(),this.groundReflector&&(this.groundReflector.visible=!1,this.groundReflector.doRender(this.renderer,this.scene,this.camera),this.groundReflector.visible=!0),e.render(this.scene,this.camera),this.groundReflector&&(this.groundReflector.visible=!1),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,0,0),this.selective&&this._renderMetalness(e,this.metalnessOnMaterial,this.metalnessRenderTarget,0,0),this.ssrMaterial.uniforms.opacity.value=this.opacity,this.ssrMaterial.uniforms.maxDistance.value=this.maxDistance,this.ssrMaterial.uniforms.thickness.value=this.thickness,this._renderPass(e,this.ssrMaterial,this.ssrRenderTarget),this.blur&&(this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this._renderPass(e,this.blurMaterial2,this.blurRenderTarget2)),this.output){case sr.OUTPUT.Default:this.bouncing?(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.prevRenderTarget),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=fr,this._renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t)):(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=fr,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t));break;case sr.OUTPUT.SSR:this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.bouncing&&(this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=fr,this._renderPass(e,this.copyMaterial,this.prevRenderTarget));break;case sr.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case sr.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case sr.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case sr.OUTPUT.Metalness:this.copyMaterial.uniforms.tDiffuse.value=this.metalnessRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSRPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssrMaterial.defines.MAX_STEP=Math.sqrt(e*e+t*t),this.ssrMaterial.needsUpdate=!0,this.beautyRenderTarget.setSize(e,t),this.prevRenderTarget.setSize(e,t),this.ssrRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.metalnessRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.blurRenderTarget2.setSize(e,t),this.ssrMaterial.uniforms.resolution.value.set(e,t),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t),this.blurMaterial2.uniforms.resolution.value.set(e,t)}_renderPass(e,t,n,i,s){this.originalClearColor.copy(e.getClearColor(this.tempColor));const o=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,i,s){this.originalClearColor.copy(e.getClearColor(this.tempColor));const o=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}_renderMetalness(e,t,n,i,s){this.originalClearColor.copy(e.getClearColor(this.tempColor));const o=e.getClearAlpha(this.tempColor),a=e.autoClear,l=this.scene.background,c=this.scene.fog;e.setRenderTarget(n),e.autoClear=!1,this.scene.background=null,this.scene.fog=null,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.traverseVisible(u=>{u._SSRPassBackupMaterial=u.material,this._selects.includes(u)?u.material=this.metalnessOnMaterial:u.material=this.metalnessOffMaterial}),e.render(this.scene,this.camera),this.scene.traverseVisible(u=>{u.material=u._SSRPassBackupMaterial}),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o),this.scene.background=l,this.scene.fog=c}}sr.OUTPUT={Default:0,SSR:1,Beauty:3,Depth:4,Normal:5,Metalness:7};class lm{constructor(e,t,n,i,s){this.sender=e,this.receiver=t,this.message=n,this.delay=i,this.data=s}toJSON(){return{type:this.constructor.name,sender:this.sender.uuid,receiver:this.receiver.uuid,message:this.message,delay:this.delay,data:this.data}}fromJSON(e){return this.sender=e.sender,this.receiver=e.receiver,this.message=e.message,this.delay=e.delay,this.data=e.data,this}resolveReferences(e){return this.sender=e.get(this.sender),this.receiver=e.get(this.receiver),this}}class Ni{static setLevel(e){zl=e}static log(...e){zl<=Ni.LEVEL.LOG&&console.log(...e)}static warn(...e){zl<=Ni.LEVEL.WARN&&console.warn(...e)}static error(...e){zl<=Ni.LEVEL.ERROR&&console.error(...e)}}Ni.LEVEL=Object.freeze({LOG:0,WARN:1,ERROR:2,SILENT:3});let zl=Ni.LEVEL.WARN;class GE{constructor(){this.delayedTelegrams=new Array}deliver(e){const t=e.receiver;return t.handleMessage(e)===!1&&Ni.warn("YUKA.MessageDispatcher: Message not handled by receiver: %o",t),this}dispatch(e,t,n,i,s){const o=new lm(e,t,n,i,s);return i<=0?this.deliver(o):this.delayedTelegrams.push(o),this}dispatchDelayedMessages(e){let t=this.delayedTelegrams.length;for(;t--;){const n=this.delayedTelegrams[t];n.delay-=e,n.delay<=0&&(this.deliver(n),this.delayedTelegrams.pop())}return this}clear(){return this.delayedTelegrams.length=0,this}toJSON(){const e={type:this.constructor.name,delayedTelegrams:new Array};for(let t=0,n=this.delayedTelegrams.length;t<n;t++){const i=this.delayedTelegrams[t];e.delayedTelegrams.push(i.toJSON())}return e}fromJSON(e){this.clear();const t=e.delayedTelegrams;for(let n=0,i=t.length;n<i;n++){const s=t[n],o=new lm().fromJSON(s);this.delayedTelegrams.push(o)}return this}resolveReferences(e){const t=this.delayedTelegrams;for(let n=0,i=t.length;n<i;n++)t[n].resolveReferences(e);return this}}const ln=new Array;for(let r=0;r<256;r++)ln[r]=(r<16?"0":"")+r.toString(16);class Ha{static area(e,t,n){return(n.x-e.x)*(t.z-e.z)-(t.x-e.x)*(n.z-e.z)}static argmax(e){const t=Math.max(...e),n=[];for(let i=0,s=e.length;i<s;i++)e[i]===t&&n.push(i);return n}static choice(e,t=null){const n=Math.random();if(t===null)return e[Math.floor(Math.random()*e.length)];{let i=0;const s=e.map((o,a)=>(i+=t[a],i)).findIndex(o=>o>=n);return e[s]}}static clamp(e,t,n){return Math.max(t,Math.min(n,e))}static generateUUID(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[e&255]+ln[e>>8&255]+ln[e>>16&255]+ln[e>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[n&63|128]+ln[n>>8&255]+"-"+ln[n>>16&255]+ln[n>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toUpperCase()}static randFloat(e,t){return e+Math.random()*(t-e)}static randInt(e,t){return e+Math.floor(Math.random()*(t-e+1))}}class ae{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}clone(){return new this.constructor().copy(this)}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.x/=e,this.y/=e,this.z/=e,this}divideVectors(e,t){return this.x=e.x/t.x,this.y=e.y/t.y,this.z=e.z/t.z,this}reflect(e){return this.sub(WE.copy(e).multiplyScalar(2*this.dot(e)))}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}cross(e){const t=this.x,n=this.y,i=this.z;return this.x=n*e.z-i*e.y,this.y=i*e.x-t*e.z,this.z=t*e.y-n*e.x,this}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}angleTo(e){const t=Math.sqrt(this.squaredLength()*e.squaredLength());if(t===0)return 0;const n=this.dot(e)/t;return Math.acos(Ha.clamp(n,-1,1))}length(){return Math.sqrt(this.squaredLength())}squaredLength(){return this.dot(this)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}distanceTo(e){return Math.sqrt(this.squaredDistanceTo(e))}squaredDistanceTo(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return Math.abs(t)+Math.abs(n)+Math.abs(i)}normalize(){return this.divideScalar(this.length()||1)}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyRotation(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,h=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}extractPositionFromMatrix(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}fromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}fromMatrix4Column(e,t){return this.fromArray(e.elements,t*4)}fromSpherical(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}fromArray(e,t=0){return this.x=e[t+0],this.y=e[t+1],this.z=e[t+2],this}toArray(e,t=0){return e[t+0]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}}const WE=new ae,cm=new ae(0,1,0),um=new ae,Ko=new ae,hm=new ae,fm=new ae,ju=[2,2,1],Qu=[1,0,0];class Sd{constructor(){this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[3]=t,u[6]=n,u[1]=i,u[4]=s,u[7]=o,u[2]=a,u[5]=l,u[8]=c,this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}clone(){return new this.constructor().copy(this)}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],S=i[4],v=i[7],w=i[2],T=i[5],E=i[8];return s[0]=o*_+a*M+l*w,s[3]=o*m+a*S+l*T,s[6]=o*p+a*v+l*E,s[1]=c*_+u*M+h*w,s[4]=c*m+u*S+h*T,s[7]=c*p+u*v+h*E,s[2]=f*_+d*M+g*w,s[5]=f*m+d*S+g*T,s[8]=f*p+d*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}extractBasis(e,t,n){return e.fromMatrix3Column(this,0),t.fromMatrix3Column(this,1),n.fromMatrix3Column(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,e.y,t.y,n.y,e.z,t.z,n.z),this}lookAt(e,t,n){return um.crossVectors(n,e).normalize(),Ko.crossVectors(cm,t).normalize(),Ko.squaredLength()===0&&(fm.copy(t).addScalar(Number.EPSILON),Ko.crossVectors(cm,fm).normalize()),hm.crossVectors(t,Ko).normalize(),Qs.makeBasis(Ko,hm,t),Bl.makeBasis(um,n,e),this.multiplyMatrices(Qs,Bl.transpose()),this}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getElementIndex(e,t){return e*3+t}frobeniusNorm(){const e=this.elements;let t=0;for(let n=0;n<9;n++)t+=e[n]*e[n];return Math.sqrt(t)}offDiagonalFrobeniusNorm(){const e=this.elements;let t=0;for(let n=0;n<3;n++){const i=e[this.getElementIndex(ju[n],Qu[n])];t+=2*i*i}return Math.sqrt(t)}eigenDecomposition(e){let t=0,n=0;const i=10;e.unitary.identity(),e.diagonal.copy(this);const s=e.unitary,o=e.diagonal,a=Number.EPSILON*o.frobeniusNorm();for(;n<i&&o.offDiagonalFrobeniusNorm()>a;)o.shurDecomposition(Qs),Bl.copy(Qs).transpose(),o.multiply(Qs),o.premultiply(Bl),s.multiply(Qs),++t>2&&(n++,t=0);return e}shurDecomposition(e){let t=0,n=1;const i=this.elements;for(let c=0;c<3;c++){const u=Math.abs(i[this.getElementIndex(ju[c],Qu[c])]);u>t&&(t=u,n=c)}let s=1,o=0;const a=Qu[n],l=ju[n];if(Math.abs(i[this.getElementIndex(l,a)])>Number.EPSILON){const c=i[this.getElementIndex(l,l)],u=i[this.getElementIndex(a,a)],h=i[this.getElementIndex(l,a)],f=(c-u)/2/h;let d;f<0?d=-1/(-f+Math.sqrt(1+f*f)):d=1/(f+Math.sqrt(1+f*f)),s=1/Math.sqrt(1+d*d),o=d*s}return e.identity(),e.elements[this.getElementIndex(a,a)]=s,e.elements[this.getElementIndex(l,l)]=s,e.elements[this.getElementIndex(l,a)]=o,e.elements[this.getElementIndex(a,l)]=-o,e}fromQuaternion(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=e.w,a=n+n,l=i+i,c=s+s,u=n*a,h=n*l,f=n*c,d=i*l,g=i*c,_=s*c,m=o*a,p=o*l,M=o*c;return t[0]=1-(d+_),t[3]=h-M,t[6]=f+p,t[1]=h+M,t[4]=1-(u+_),t[7]=g-m,t[2]=f-p,t[5]=g+m,t[8]=1-(u+d),this}fromMatrix4(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],this}fromArray(e,t=0){const n=this.elements;for(let i=0;i<9;i++)n[i]=e[i+t];return this}toArray(e,t=0){const n=this.elements;return e[t+0]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}}const Qs=new Sd,Bl=new Sd,kl=new Sd,eh=new ae;class Hc{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}clone(){return new this.constructor().copy(this)}inverse(){return this.conjugate().normalize()}conjugate(){return this.x*=-1,this.y*=-1,this.z*=-1,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}length(){return Math.sqrt(this.squaredLength())}squaredLength(){return this.dot(this)}normalize(){let e=this.length();return e===0?(this.x=0,this.y=0,this.z=0,this.w=1):(e=1/e,this.x=this.x*e,this.y=this.y*e,this.z=this.z*e,this.w=this.w*e),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e.x,i=e.y,s=e.z,o=e.w,a=t.x,l=t.y,c=t.z,u=t.w;return this.x=n*u+o*a+i*c-s*l,this.y=i*u+o*l+s*a-n*c,this.z=s*u+o*c+n*l-i*a,this.w=o*u-n*a-i*l-s*c,this}angleTo(e){return 2*Math.acos(Math.abs(Ha.clamp(this.dot(e),-1,1)))}rotateTo(e,t,n=1e-4){const i=this.angleTo(e);if(i<n)return!0;const s=Math.min(1,t/i);return this.slerp(e,s),!1}lookAt(e,t,n){kl.lookAt(e,t,n),this.fromMatrix3(kl)}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this.x,i=this.y,s=this.z,o=this.w;let a=o*e.w+n*e.x+i*e.y+s*e.z;if(a<0?(this.w=-e.w,this.x=-e.x,this.y=-e.y,this.z=-e.z,a=-a):this.copy(e),a>=1)return this.w=o,this.x=n,this.y=i,this.z=s,this;const l=Math.sqrt(1-a*a);if(Math.abs(l)<.001)return this.w=.5*(o+this.w),this.x=.5*(n+this.x),this.y=.5*(i+this.y),this.z=.5*(s+this.z),this;const c=Math.atan2(l,a),u=Math.sin((1-t)*c)/l,h=Math.sin(t*c)/l;return this.w=o*u+this.w*h,this.x=n*u+this.x*h,this.y=i*u+this.y*h,this.z=s*u+this.z*h,this}extractRotationFromMatrix(e){const t=kl.elements,n=e.elements,i=1/eh.fromMatrix4Column(e,0).length(),s=1/eh.fromMatrix4Column(e,1).length(),o=1/eh.fromMatrix4Column(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=n[4]*s,t[4]=n[5]*s,t[5]=n[6]*s,t[6]=n[8]*o,t[7]=n[9]*o,t[8]=n[10]*o,this.fromMatrix3(kl),this}fromEuler(e,t,n){const i=Math.cos(t/2),s=Math.cos(e/2),o=Math.cos(n/2),a=Math.sin(t/2),l=Math.sin(e/2),c=Math.sin(n/2);return this.w=i*s*o+a*l*c,this.x=i*l*o+a*s*c,this.y=a*s*o-i*l*c,this.z=i*s*c-a*l*o,this}toEuler(e){const t=-2*(this.y*this.z-this.x*this.w);return Math.abs(t)>.9999?(e.x=Math.PI*.5*t,e.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),e.z=0):(e.x=Math.asin(t),e.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),e.z=Math.atan2(this.x*this.y+this.w*this.z,.5-this.x*this.x-this.z*this.z)),e}fromMatrix3(e){const t=e.elements,n=t[0],i=t[3],s=t[6],o=t[1],a=t[4],l=t[7],c=t[2],u=t[5],h=t[8],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this.w=.25/d,this.x=(u-l)*d,this.y=(s-c)*d,this.z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this.w=(u-l)/d,this.x=.25*d,this.y=(i+o)/d,this.z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this.w=(s-c)/d,this.x=(i+o)/d,this.y=.25*d,this.z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this.w=(o-i)/d,this.x=(s+c)/d,this.y=(l+u)/d,this.z=.25*d}return this}fromArray(e,t=0){return this.x=e[t+0],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e,t=0){return e[t+0]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}}class Ga{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}clone(){return new this.constructor().copy(this)}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],S=n[7],v=n[11],w=n[15],T=i[0],E=i[4],b=i[8],x=i[12],y=i[1],C=i[5],L=i[9],N=i[13],F=i[2],z=i[6],O=i[10],H=i[14],V=i[3],j=i[7],P=i[11],te=i[15];return s[0]=o*T+a*y+l*F+c*V,s[4]=o*E+a*C+l*z+c*j,s[8]=o*b+a*L+l*O+c*P,s[12]=o*x+a*N+l*H+c*te,s[1]=u*T+h*y+f*F+d*V,s[5]=u*E+h*C+f*z+d*j,s[9]=u*b+h*L+f*O+d*P,s[13]=u*x+h*N+f*H+d*te,s[2]=g*T+_*y+m*F+p*V,s[6]=g*E+_*C+m*z+p*j,s[10]=g*b+_*L+m*O+p*P,s[14]=g*x+_*N+m*H+p*te,s[3]=M*T+S*y+v*F+w*V,s[7]=M*E+S*C+v*z+w*j,s[11]=M*b+S*L+v*O+w*P,s[15]=M*x+S*N+v*H+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}extractBasis(e,t,n){return e.fromMatrix4Column(this,0),t.fromMatrix4Column(this,1),n.fromMatrix4Column(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}compose(e,t,n){return this.fromQuaternion(t),this.scale(n),this.setPosition(e),this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}setPosition(e){const t=this.elements;return t[12]=e.x,t[13]=e.y,t[14]=e.z,this}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}getInverse(e){const t=this.elements,n=e.elements,i=t[0],s=t[1],o=t[2],a=t[3],l=t[4],c=t[5],u=t[6],h=t[7],f=t[8],d=t[9],g=t[10],_=t[11],m=t[12],p=t[13],M=t[14],S=t[15],v=d*M*h-p*g*h+p*u*_-c*M*_-d*u*S+c*g*S,w=m*g*h-f*M*h-m*u*_+l*M*_+f*u*S-l*g*S,T=f*p*h-m*d*h+m*c*_-l*p*_-f*c*S+l*d*S,E=m*d*u-f*p*u-m*c*g+l*p*g+f*c*M-l*d*M,b=i*v+s*w+o*T+a*E;if(b===0)return e.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/b;return n[0]=v*x,n[1]=(p*g*a-d*M*a-p*o*_+s*M*_+d*o*S-s*g*S)*x,n[2]=(c*M*a-p*u*a+p*o*h-s*M*h-c*o*S+s*u*S)*x,n[3]=(d*u*a-c*g*a-d*o*h+s*g*h+c*o*_-s*u*_)*x,n[4]=w*x,n[5]=(f*M*a-m*g*a+m*o*_-i*M*_-f*o*S+i*g*S)*x,n[6]=(m*u*a-l*M*a-m*o*h+i*M*h+l*o*S-i*u*S)*x,n[7]=(l*g*a-f*u*a+f*o*h-i*g*h-l*o*_+i*u*_)*x,n[8]=T*x,n[9]=(m*d*a-f*p*a-m*s*_+i*p*_+f*s*S-i*d*S)*x,n[10]=(l*p*a-m*c*a+m*s*h-i*p*h-l*s*S+i*c*S)*x,n[11]=(f*c*a-l*d*a-f*s*h+i*d*h+l*s*_-i*c*_)*x,n[12]=E*x,n[13]=(f*p*o-m*d*o+m*s*g-i*p*g-f*s*M+i*d*M)*x,n[14]=(m*c*o-l*p*o-m*s*u+i*p*u+l*s*M-i*c*M)*x,n[15]=(l*d*o-f*c*o+f*s*u-i*d*u-l*s*g+i*c*g)*x,e}getMaxScale(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}fromQuaternion(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=e.w,a=n+n,l=i+i,c=s+s,u=n*a,h=n*l,f=n*c,d=i*l,g=i*c,_=s*c,m=o*a,p=o*l,M=o*c;return t[0]=1-(d+_),t[4]=h-M,t[8]=f+p,t[1]=h+M,t[5]=1-(u+_),t[9]=g-m,t[2]=f-p,t[6]=g+m,t[10]=1-(u+d),t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}fromMatrix3(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=0,t[4]=n[3],t[5]=n[4],t[6]=n[5],t[7]=0,t[8]=n[6],t[9]=n[7],t[10]=n[8],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}fromArray(e,t=0){const n=this.elements;for(let i=0;i<16;i++)n[i]=e[i+t];return this}toArray(e,t=0){const n=this.elements;return e[t+0]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}}const Vl=new Hc,Rr=new ae,Hl=new ae,eo=new Hc;class Md{constructor(){this.name="",this.active=!0,this.children=new Array,this.parent=null,this.neighbors=new Array,this.neighborhoodRadius=1,this.updateNeighborhood=!1,this.position=new ae,this.rotation=new Hc,this.scale=new ae(1,1,1),this.forward=new ae(0,0,1),this.up=new ae(0,1,0),this.boundingRadius=0,this.maxTurnRate=Math.PI,this.canActivateTrigger=!0,this.manager=null,this._localMatrix=new Ga,this._worldMatrix=new Ga,this._cache={position:new ae,rotation:new Hc,scale:new ae(1,1,1)},this._renderComponent=null,this._renderComponentCallback=null,this._started=!1,this._uuid=null,this._worldMatrixDirty=!1}get worldMatrix(){return this._updateWorldMatrix(),this._worldMatrix}get uuid(){return this._uuid===null&&(this._uuid=Ha.generateUUID()),this._uuid}start(){return this}update(){return this}add(e){return e.parent!==null&&e.parent.remove(e),this.children.push(e),e.parent=this,this}remove(e){const t=this.children.indexOf(e);return this.children.splice(t,1),e.parent=null,this}getDirection(e){return e.copy(this.forward).applyRotation(this.rotation).normalize()}lookAt(e){const t=this.parent;return t!==null?(this.getWorldPosition(Hl),Rr.subVectors(e,Hl).normalize(),this.rotation.lookAt(this.forward,Rr,this.up),eo.extractRotationFromMatrix(t.worldMatrix).inverse(),this.rotation.premultiply(eo)):(Rr.subVectors(e,this.position).normalize(),this.rotation.lookAt(this.forward,Rr,this.up)),this}rotateTo(e,t,n=1e-4){const i=this.parent;return i!==null?(this.getWorldPosition(Hl),Rr.subVectors(e,Hl).normalize(),Vl.lookAt(this.forward,Rr,this.up),eo.extractRotationFromMatrix(i.worldMatrix).inverse(),Vl.premultiply(eo)):(Rr.subVectors(e,this.position).normalize(),Vl.lookAt(this.forward,Rr,this.up)),this.rotation.rotateTo(Vl,this.maxTurnRate*t,n)}getWorldDirection(e){return eo.extractRotationFromMatrix(this.worldMatrix),e.copy(this.forward).applyRotation(eo).normalize()}getWorldPosition(e){return e.extractPositionFromMatrix(this.worldMatrix)}setRenderComponent(e,t){return this._renderComponent=e,this._renderComponentCallback=t,this}handleMessage(){return!1}lineOfSightTest(){return null}sendMessage(e,t,n=0,i=null){return this.manager!==null?this.manager.sendMessage(this,e,t,n,i):Ni.error("YUKA.GameEntity: The game entity must be added to a manager in order to send a message."),this}toJSON(){return{type:this.constructor.name,uuid:this.uuid,name:this.name,active:this.active,children:dm(this.children),parent:this.parent!==null?this.parent.uuid:null,neighbors:dm(this.neighbors),neighborhoodRadius:this.neighborhoodRadius,updateNeighborhood:this.updateNeighborhood,position:this.position.toArray(new Array),rotation:this.rotation.toArray(new Array),scale:this.scale.toArray(new Array),forward:this.forward.toArray(new Array),up:this.up.toArray(new Array),boundingRadius:this.boundingRadius,maxTurnRate:this.maxTurnRate,canActivateTrigger:this.canActivateTrigger,worldMatrix:this.worldMatrix.toArray(new Array),_localMatrix:this._localMatrix.toArray(new Array),_cache:{position:this._cache.position.toArray(new Array),rotation:this._cache.rotation.toArray(new Array),scale:this._cache.scale.toArray(new Array)},_started:this._started}}fromJSON(e){return this.name=e.name,this.active=e.active,this.neighborhoodRadius=e.neighborhoodRadius,this.updateNeighborhood=e.updateNeighborhood,this.position.fromArray(e.position),this.rotation.fromArray(e.rotation),this.scale.fromArray(e.scale),this.forward.fromArray(e.forward),this.up.fromArray(e.up),this.boundingRadius=e.boundingRadius,this.maxTurnRate=e.maxTurnRate,this.canActivateTrigger=e.canActivateTrigger,this.children=e.children.slice(),this.neighbors=e.neighbors.slice(),this.parent=e.parent,this._localMatrix.fromArray(e._localMatrix),this._worldMatrix.fromArray(e.worldMatrix),this._cache.position.fromArray(e._cache.position),this._cache.rotation.fromArray(e._cache.rotation),this._cache.scale.fromArray(e._cache.scale),this._started=e._started,this._uuid=e.uuid,this}resolveReferences(e){const t=this.neighbors;for(let i=0,s=t.length;i<s;i++)t[i]=e.get(t[i]);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i]=e.get(n[i]);return this.parent=e.get(this.parent)||null,this}_updateMatrix(){const e=this._cache;e.position.equals(this.position)&&e.rotation.equals(this.rotation)&&e.scale.equals(this.scale)||(this._localMatrix.compose(this.position,this.rotation,this.scale),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale),this._worldMatrixDirty=!0)}_updateWorldMatrix(){const e=this.parent;if(e!==null&&e._updateWorldMatrix(),this._updateMatrix(),this._worldMatrixDirty===!0){e===null?this._worldMatrix.copy(this._localMatrix):this._worldMatrix.multiplyMatrices(this.parent._worldMatrix,this._localMatrix),this._worldMatrixDirty=!1;const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];s._worldMatrixDirty=!0}}}updateWorldMatrix(){return console.warn("GameEntity: .updateWorldMatrix() has been removed. World matrices are automatically updated on access."),this}}function dm(r){const e=new Array;for(let t=0,n=r.length;t<n;t++)e.push(r[t].uuid);return e}const pm=new ae,th=new ae;class a0 extends Md{constructor(){super(),this.velocity=new ae,this.maxSpeed=1,this.updateOrientation=!0}update(e){return this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),pm.copy(this.velocity).multiplyScalar(e),th.copy(this.position).add(pm),this.updateOrientation&&this.getSpeedSquared()>1e-8&&this.lookAt(th),this.position.copy(th),this}getSpeed(){return this.velocity.length()}getSpeedSquared(){return this.velocity.squaredLength()}toJSON(){const e=super.toJSON();return e.velocity=this.velocity.toArray(new Array),e.maxSpeed=this.maxSpeed,e.updateOrientation=this.updateOrientation,e}fromJSON(e){return super.fromJSON(e),this.velocity.fromArray(e.velocity),this.maxSpeed=e.maxSpeed,this.updateOrientation=e.updateOrientation,this}}class Xn{constructor(){this.active=!0,this.weight=1}calculate(){}toJSON(){return{type:this.constructor.name,active:this.active,weight:this.weight}}fromJSON(e){return this.active=e.active,this.weight=e.weight,this}resolveReferences(){}}const Gl=new ae,Wl=new ae;class XE extends Xn{constructor(){super()}calculate(e,t){Gl.set(0,0,0);const n=e.neighbors;for(let i=0,s=n.length;i<s;i++)n[i].getDirection(Wl),Gl.add(Wl);return n.length>0&&(Gl.divideScalar(n.length),e.getDirection(Wl),t.subVectors(Gl,Wl)),t}}const nh=new ae,ih=new ae;class Qc extends Xn{constructor(e=new ae,t=3,n=0){super(),this.target=e,this.deceleration=t,this.tolerance=n}calculate(e,t){const n=this.target,i=this.deceleration;ih.subVectors(n,e.position);const s=ih.length();if(s>this.tolerance){let o=s/i;o=Math.min(o,e.maxSpeed),nh.copy(ih).multiplyScalar(o/s)}else nh.set(0,0,0);return t.subVectors(nh,e.velocity)}toJSON(){const e=super.toJSON();return e.target=this.target.toArray(new Array),e.deceleration=this.deceleration,e}fromJSON(e){return super.fromJSON(e),this.target.fromArray(e.target),this.deceleration=e.deceleration,this}}const rh=new ae;class eu extends Xn{constructor(e=new ae){super(),this.target=e}calculate(e,t){const n=this.target;return rh.subVectors(n,e.position).normalize(),rh.multiplyScalar(e.maxSpeed),t.subVectors(rh,e.velocity)}toJSON(){const e=super.toJSON();return e.target=this.target.toArray(new Array),e}fromJSON(e){return super.fromJSON(e),this.target.fromArray(e.target),this}}const Xl=new ae;class qE extends Xn{constructor(){super(),this._seek=new eu}calculate(e,t){Xl.set(0,0,0);const n=e.neighbors;for(let i=0,s=n.length;i<s;i++){const o=n[i];Xl.add(o.position)}return n.length>0&&(Xl.divideScalar(n.length),this._seek.target=Xl,this._seek.calculate(e,t),t.normalize()),t}}const Zo=new ae;class l0 extends Xn{constructor(e=new ae,t=10){super(),this.target=e,this.panicDistance=t}calculate(e,t){const n=this.target;return e.position.squaredDistanceTo(n)<=this.panicDistance*this.panicDistance&&(Zo.subVectors(e.position,n).normalize(),Zo.squaredLength()===0&&Zo.set(0,0,1),Zo.multiplyScalar(e.maxSpeed),t.subVectors(Zo,e.velocity)),t}toJSON(){const e=super.toJSON();return e.target=this.target.toArray(new Array),e.panicDistance=this.panicDistance,e}fromJSON(e){return super.fromJSON(e),this.target.fromArray(e.target),this.panicDistance=e.panicDistance,this}}const mm=new ae,gm=new ae,_m=new ae;class YE extends Xn{constructor(e=null,t=10,n=1){super(),this.pursuer=e,this.panicDistance=t,this.predictionFactor=n,this._flee=new l0}calculate(e,t){const n=this.pursuer;mm.subVectors(n.position,e.position);let i=mm.length()/(e.maxSpeed+n.getSpeed());return i*=this.predictionFactor,gm.copy(n.velocity).multiplyScalar(i),_m.addVectors(n.position,gm),this._flee.target=_m,this._flee.panicDistance=this.panicDistance,this._flee.calculate(e,t),t}toJSON(){const e=super.toJSON();return e.pursuer=this.pursuer?this.pursuer.uuid:null,e.panicDistance=this.panicDistance,e.predictionFactor=this.predictionFactor,e}fromJSON(e){return super.fromJSON(e),this.pursuer=e.pursuer,this.panicDistance=e.panicDistance,this.predictionFactor=e.predictionFactor,this}resolveReferences(e){this.pursuer=e.get(this.pursuer)||null}}class c0{constructor(){this.loop=!1,this._waypoints=new Array,this._index=0}add(e){return this._waypoints.push(e),this}clear(){return this._waypoints.length=0,this._index=0,this}current(){return this._waypoints[this._index]}finished(){const e=this._waypoints.length-1;return this.loop===!0?!1:this._index===e}advance(){return this._index++,this._index===this._waypoints.length&&(this.loop===!0?this._index=0:this._index--),this}toJSON(){const e={type:this.constructor.name,loop:this.loop,_waypoints:new Array,_index:this._index},t=this._waypoints;for(let n=0,i=t.length;n<i;n++){const s=t[n];e._waypoints.push(s.toArray(new Array))}return e}fromJSON(e){this.loop=e.loop,this._index=e._index;const t=e._waypoints;for(let n=0,i=t.length;n<i;n++){const s=t[n];this._waypoints.push(new ae().fromArray(s))}return this}}class u0 extends Xn{constructor(e=new c0,t=1){super(),this.path=e,this.nextWaypointDistance=t,this._arrive=new Qc,this._seek=new eu}calculate(e,t){const n=this.path;n.current().squaredDistanceTo(e.position)<this.nextWaypointDistance*this.nextWaypointDistance&&n.advance();const s=n.current();return n.finished()===!0?(this._arrive.target=s,this._arrive.calculate(e,t)):(this._seek.target=s,this._seek.calculate(e,t)),t}toJSON(){const e=super.toJSON();return e.path=this.path.toJSON(),e.nextWaypointDistance=this.nextWaypointDistance,e}fromJSON(e){return super.fromJSON(e),this.path.fromJSON(e.path),this.nextWaypointDistance=e.nextWaypointDistance,this}}const ql=new ae,Yl=new ae,vm=new ae,xm=new ae;class $E extends Xn{constructor(e=null,t=null,n=3){super(),this.entity1=e,this.entity2=t,this.deceleration=n,this._arrive=new Qc}calculate(e,t){const n=this.entity1,i=this.entity2;ql.addVectors(n.position,i.position).multiplyScalar(.5);const s=e.position.distanceTo(ql)/e.maxSpeed;return Yl.copy(n.velocity).multiplyScalar(s),vm.addVectors(n.position,Yl),Yl.copy(i.velocity).multiplyScalar(s),xm.addVectors(i.position,Yl),ql.addVectors(vm,xm).multiplyScalar(.5),this._arrive.deceleration=this.deceleration,this._arrive.target=ql,this._arrive.calculate(e,t),t}toJSON(){const e=super.toJSON();return e.entity1=this.entity1?this.entity1.uuid:null,e.entity2=this.entity2?this.entity2.uuid:null,e.deceleration=this.deceleration,e}fromJSON(e){return super.fromJSON(e),this.entity1=e.entity1,this.entity2=e.entity2,this.deceleration=e.deceleration,this}resolveReferences(e){this.entity1=e.get(this.entity1)||null,this.entity2=e.get(this.entity2)||null}}const hi=new ae,jo=new ae,Cr=new ae,ji=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae];class Td{constructor(e=new ae,t=new ae){this.min=e,this.max=t}set(e,t){return this.min=e,this.max=t,this}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}clone(){return new this.constructor().copy(this)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max),t}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}expand(e){return this.min.min(e),this.max.max(e),this}getCenter(e){return e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e.subVectors(this.max,this.min)}intersectsAABB(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsBoundingSphere(e){return this.clampPoint(e.center,hi),hi.squaredDistanceTo(e.center)<=e.radius*e.radius}intersectsPlane(e){const t=e.normal;this.getCenter(jo),Cr.subVectors(this.max,jo);const n=Cr.x*Math.abs(t.x)+Cr.y*Math.abs(t.y)+Cr.z*Math.abs(t.z),i=e.distanceToPoint(jo);return Math.abs(i)<=n}getNormalFromSurfacePoint(e,t){t.set(0,0,0);let n,i=1/0;return this.getCenter(jo),this.getSize(Cr),hi.copy(e).sub(jo),n=Math.abs(Cr.x-Math.abs(hi.x)),n<i&&(i=n,t.set(1*Math.sign(hi.x),0,0)),n=Math.abs(Cr.y-Math.abs(hi.y)),n<i&&(i=n,t.set(0,1*Math.sign(hi.y),0)),n=Math.abs(Cr.z-Math.abs(hi.z)),n<i&&t.set(0,0,1*Math.sign(hi.z)),t}fromCenterAndSize(e,t){return hi.copy(t).multiplyScalar(.5),this.min.copy(e).sub(hi),this.max.copy(e).add(hi),this}fromPoints(e){this.min.set(1/0,1/0,1/0),this.max.set(-1/0,-1/0,-1/0);for(let t=0,n=e.length;t<n;t++)this.expand(e[t]);return this}applyMatrix4(e){const t=this.min,n=this.max;return ji[0].set(t.x,t.y,t.z).applyMatrix4(e),ji[1].set(t.x,t.y,n.z).applyMatrix4(e),ji[2].set(t.x,n.y,t.z).applyMatrix4(e),ji[3].set(t.x,n.y,n.z).applyMatrix4(e),ji[4].set(n.x,t.y,t.z).applyMatrix4(e),ji[5].set(n.x,t.y,n.z).applyMatrix4(e),ji[6].set(n.x,n.y,t.z).applyMatrix4(e),ji[7].set(n.x,n.y,n.z).applyMatrix4(e),this.fromPoints(ji)}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{type:this.constructor.name,min:this.min.toArray(new Array),max:this.max.toArray(new Array)}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sh=new Td;class tu{constructor(e=new ae,t=0){this.center=e,this.radius=t}set(e,t){return this.center=e,this.radius=t,this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}clone(){return new this.constructor().copy(this)}clampPoint(e,t){return t.copy(e),this.center.squaredDistanceTo(e)>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}containsPoint(e){return e.squaredDistanceTo(this.center)<=this.radius*this.radius}intersectsBoundingSphere(e){const t=this.radius+e.radius;return e.center.squaredDistanceTo(this.center)<=t*t}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}getNormalFromSurfacePoint(e,t){return t.subVectors(e,this.center).normalize()}fromPoints(e){return sh.fromPoints(e),sh.getCenter(this.center),this.radius=this.center.distanceTo(sh.max),this}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScale(),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}toJSON(){return{type:this.constructor.name,center:this.center.toArray(new Array),radius:this.radius}}fromJSON(e){return this.center.fromArray(e.center),this.radius=e.radius,this}}const fi=new ae,oh=new ae,$l=new ae,ah=new ae,ym=new ae,Jl=new Ga,JE=new Ga,Sm=new Td;class h0{constructor(e=new ae,t=new ae){this.origin=e,this.direction=t}set(e,t){return this.origin=e,this.direction=t,this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}clone(){return new this.constructor().copy(this)}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}intersectBoundingSphere(e,t){fi.subVectors(e.center,this.origin);const n=fi.dot(this.direction),i=fi.dot(fi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsBoundingSphere(e){const t=new ae;let n;const i=t.subVectors(e.center,this.origin).dot(this.direction);return i<0?n=this.origin.squaredDistanceTo(e.center):(t.copy(this.direction).multiplyScalar(i).add(this.origin),n=t.squaredDistanceTo(e.center)),n<=e.radius*e.radius}intersectAABB(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsAABB(e){return this.intersectAABB(e,fi)!==null}intersectPlane(e,t){let n;const i=e.normal.dot(this.direction);if(i===0)if(e.distanceToPoint(this.origin)===0)n=0;else return null;else n=-(this.origin.dot(e.normal)+e.constant)/i;return n>=0?this.at(n,t):null}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectOBB(e,t){return e.getSize(ym),Sm.fromCenterAndSize(fi.set(0,0,0),ym),Jl.fromMatrix3(e.rotation),Jl.setPosition(e.center),Mm.copy(this).applyMatrix4(Jl.getInverse(JE)),Mm.intersectAABB(Sm,t)?t.applyMatrix4(Jl):null}intersectsOBB(e){return this.intersectOBB(e,fi)!==null}intersectConvexHull(e,t){const n=e.faces;let i=-1/0,s=1/0;for(let o=0,a=n.length;o<a;o++){const c=n[o].plane,u=c.distanceToPoint(this.origin),h=c.normal.dot(this.direction);if(u>0&&h>=0)return null;const f=h!==0?-u/h:0;if(!(f<=0)&&(h>0?s=Math.min(f,s):i=Math.max(f,i),i>s))return null}return i!==-1/0?this.at(i,t):this.at(s,t),t}intersectsConvexHull(e){return this.intersectConvexHull(e,fi)!==null}intersectTriangle(e,t,n){const i=e.a,s=e.b,o=e.c;oh.subVectors(s,i),$l.subVectors(o,i),ah.crossVectors(oh,$l);let a=this.direction.dot(ah),l;if(a>0){if(t)return null;l=1}else if(a<0)l=-1,a=-a;else return null;fi.subVectors(this.origin,i);const c=l*this.direction.dot($l.crossVectors(fi,$l));if(c<0)return null;const u=l*this.direction.dot(oh.cross(fi));if(u<0||c+u>a)return null;const h=-l*fi.dot(ah);return h<0?null:this.at(h/a,n)}intersectBVH(e,t){return e.root.intersectRay(this,t)}intersectsBVH(e){return e.root.intersectsRay(this)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}}const Mm=new h0,Tm=new Ga,to=new ae,Kl=new ae,lh=new ae,ch=new tu,KE=new h0(new ae(0,0,0),new ae(0,0,1));class ZE extends Xn{constructor(e=new Array){super(),this.obstacles=e,this.brakingWeight=.2,this.dBoxMinLength=4}calculate(e,t){const n=this.obstacles;let i=null,s=1/0;const o=this.dBoxMinLength+e.getSpeed()/e.maxSpeed*this.dBoxMinLength;e.worldMatrix.getInverse(Tm);for(let a=0,l=n.length;a<l;a++){const c=n[a];if(c!==e&&(to.copy(c.position).applyMatrix4(Tm),to.z>0&&Math.abs(to.z)<o)){const u=c.boundingRadius+e.boundingRadius;Math.abs(to.x)<u&&(ch.center.copy(to),ch.radius=u,KE.intersectBoundingSphere(ch,lh),lh.z<s&&(s=lh.z,i=c,Kl.copy(to)))}}if(i!==null){const a=1+(o-Kl.z)/o;t.x=(i.boundingRadius-Kl.x)*a,t.z=(i.boundingRadius-Kl.z)*this.brakingWeight,t.applyRotation(e.rotation)}return t}toJSON(){const e=super.toJSON();e.obstacles=new Array,e.brakingWeight=this.brakingWeight,e.dBoxMinLength=this.dBoxMinLength;for(let t=0,n=this.obstacles.length;t<n;t++)e.obstacles.push(this.obstacles[t].uuid);return e}fromJSON(e){return super.fromJSON(e),this.obstacles=e.obstacles,this.brakingWeight=e.brakingWeight,this.dBoxMinLength=e.dBoxMinLength,this}resolveReferences(e){const t=this.obstacles;for(let n=0,i=t.length;n<i;n++)t[n]=e.get(t[n])}}const uh=new ae,Em=new ae,wm=new ae,bm=new ae;class jE extends Xn{constructor(e=null,t=new ae){super(),this.leader=e,this.offset=t,this._arrive=new Qc,this._arrive.deceleration=1.5}calculate(e,t){const n=this.leader,i=this.offset;uh.copy(i).applyMatrix4(n.worldMatrix),Em.subVectors(uh,e.position);const s=Em.length()/(e.maxSpeed+n.getSpeed());return wm.copy(n.velocity).multiplyScalar(s),bm.addVectors(uh,wm),this._arrive.target=bm,this._arrive.calculate(e,t),t}toJSON(){const e=super.toJSON();return e.leader=this.leader?this.leader.uuid:null,e.offset=this.offset,e}fromJSON(e){return super.fromJSON(e),this.leader=e.leader,this.offset=e.offset,this}resolveReferences(e){this.leader=e.get(this.leader)||null}}const hh=new ae,fh=new ae,Am=new ae,Rm=new ae,Cm=new ae;class QE extends Xn{constructor(e=null,t=1){super(),this.evader=e,this.predictionFactor=t,this._seek=new eu}calculate(e,t){const n=this.evader;hh.subVectors(n.position,e.position),e.getDirection(fh),n.getDirection(Am);const i=hh.dot(fh)>0,s=fh.dot(Am)<-.95;if(i===!0&&s===!0)return this._seek.target=n.position,this._seek.calculate(e,t),t;let o=hh.length()/(e.maxSpeed+n.getSpeed());return o*=this.predictionFactor,Rm.copy(n.velocity).multiplyScalar(o),Cm.addVectors(n.position,Rm),this._seek.target=Cm,this._seek.calculate(e,t),t}toJSON(){const e=super.toJSON();return e.evader=this.evader?this.evader.uuid:null,e.predictionFactor=this.predictionFactor,e}fromJSON(e){return super.fromJSON(e),this.evader=e.evader,this.predictionFactor=e.predictionFactor,this}resolveReferences(e){this.evader=e.get(this.evader)||null}}const Zl=new ae;class ew extends Xn{constructor(){super()}calculate(e,t){const n=e.neighbors;for(let i=0,s=n.length;i<s;i++){const o=n[i];Zl.subVectors(e.position,o.position);let a=Zl.length();a===0&&(a=1e-4),Zl.normalize().divideScalar(a),t.add(Zl)}return t}}const jl=new ae,dh=new ae;class tw extends Xn{constructor(e=1,t=5,n=5){super(),this.radius=e,this.distance=t,this.jitter=n,this._targetLocal=new ae,nw(this.radius,this._targetLocal)}calculate(e,t,n){const i=this.jitter*n;return dh.x=Ha.randFloat(-1,1)*i,dh.z=Ha.randFloat(-1,1)*i,this._targetLocal.add(dh),this._targetLocal.normalize(),this._targetLocal.multiplyScalar(this.radius),jl.copy(this._targetLocal),jl.z+=this.distance,jl.applyMatrix4(e.worldMatrix),t.subVectors(jl,e.position),t}toJSON(){const e=super.toJSON();return e.radius=this.radius,e.distance=this.distance,e.jitter=this.jitter,e._targetLocal=this._targetLocal.toArray(new Array),e}fromJSON(e){return super.fromJSON(e),this.radius=e.radius,this.distance=e.distance,this.jitter=e.jitter,this._targetLocal.fromArray(e._targetLocal),this}}function nw(r,e){const t=Math.random()*Math.PI*2;e.x=r*Math.cos(t),e.z=r*Math.sin(t)}const Ql=new ae;class Pm{constructor(e){this.vehicle=e,this.behaviors=new Array,this._steeringForce=new ae,this._typesMap=new Map}add(e){return this.behaviors.push(e),this}remove(e){const t=this.behaviors.indexOf(e);return this.behaviors.splice(t,1),this}clear(){return this.behaviors.length=0,this}calculate(e,t){return this._calculateByOrder(e),t.copy(this._steeringForce)}_accumulate(e){const t=this._steeringForce.length(),n=this.vehicle.maxForce-t;return n<=0?!1:(e.length()>n&&e.normalize().multiplyScalar(n),this._steeringForce.add(e),!0)}_calculateByOrder(e){const t=this.behaviors;this._steeringForce.set(0,0,0);for(let n=0,i=t.length;n<i;n++){const s=t[n];if(s.active===!0&&(Ql.set(0,0,0),s.calculate(this.vehicle,Ql,e),Ql.multiplyScalar(s.weight),this._accumulate(Ql)===!1))return}}toJSON(){const e={type:"SteeringManager",behaviors:new Array},t=this.behaviors;for(let n=0,i=t.length;n<i;n++){const s=t[n];e.behaviors.push(s.toJSON())}return e}fromJSON(e){this.clear();const t=e.behaviors;for(let n=0,i=t.length;n<i;n++){const s=t[n],o=s.type;let a;switch(o){case"SteeringBehavior":a=new Xn().fromJSON(s);break;case"AlignmentBehavior":a=new XE().fromJSON(s);break;case"ArriveBehavior":a=new Qc().fromJSON(s);break;case"CohesionBehavior":a=new qE().fromJSON(s);break;case"EvadeBehavior":a=new YE().fromJSON(s);break;case"FleeBehavior":a=new l0().fromJSON(s);break;case"FollowPathBehavior":a=new u0().fromJSON(s);break;case"InterposeBehavior":a=new $E().fromJSON(s);break;case"ObstacleAvoidanceBehavior":a=new ZE().fromJSON(s);break;case"OffsetPursuitBehavior":a=new jE().fromJSON(s);break;case"PursuitBehavior":a=new QE().fromJSON(s);break;case"SeekBehavior":a=new eu().fromJSON(s);break;case"SeparationBehavior":a=new ew().fromJSON(s);break;case"WanderBehavior":a=new tw().fromJSON(s);break;default:const l=this._typesMap.get(o);if(l!==void 0)a=new l().fromJSON(s);else{Ni.warn("YUKA.SteeringManager: Unsupported steering behavior type:",o);continue}}this.add(a)}return this}registerType(e,t){return this._typesMap.set(e,t),this}resolveReferences(e){const t=this.behaviors;for(let n=0,i=t.length;n<i;n++)t[n].resolveReferences(e);return this}}class iw{constructor(e=10){this.count=e,this._history=new Array,this._slot=0;for(let t=0;t<this.count;t++)this._history[t]=new ae}calculate(e,t){t.set(0,0,0),this._slot===this.count&&(this._slot=0),this._history[this._slot].copy(e),this._slot++;for(let n=0;n<this.count;n++)t.add(this._history[n]);return t.divideScalar(this.count),t}toJSON(){const e={type:this.constructor.name,count:this.count,_history:new Array,_slot:this._slot},t=this._history;for(let n=0,i=t.length;n<i;n++){const s=t[n];e._history.push(s.toArray(new Array))}return e}fromJSON(e){this.count=e.count,this._slot=e._slot;const t=e._history;this._history.length=0;for(let n=0,i=t.length;n<i;n++){const s=t[n];this._history.push(new ae().fromArray(s))}return this}}const Dm=new ae,ec=new ae,Lm=new ae,Qo=new ae,Um=new ae;class f0 extends a0{constructor(){super(),this.mass=1,this.maxForce=100,this.steering=new Pm(this),this.smoother=null}update(e){return this.steering.calculate(e,Dm),Lm.copy(Dm).divideScalar(this.mass),this.velocity.add(Lm.multiplyScalar(e)),this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),ec.copy(this.velocity).multiplyScalar(e),Qo.copy(this.position).add(ec),this.updateOrientation===!0&&this.smoother===null&&this.getSpeedSquared()>1e-8&&this.lookAt(Qo),this.position.copy(Qo),this.updateOrientation===!0&&this.smoother!==null&&(this.smoother.calculate(this.velocity,Um),ec.copy(Um).multiplyScalar(e),Qo.copy(this.position).add(ec),this.lookAt(Qo)),this}toJSON(){const e=super.toJSON();return e.mass=this.mass,e.maxForce=this.maxForce,e.steering=this.steering.toJSON(),e.smoother=this.smoother?this.smoother.toJSON():null,e}fromJSON(e){return super.fromJSON(e),this.mass=e.mass,this.maxForce=e.maxForce,this.steering=new Pm(this).fromJSON(e.steering),this.smoother=e.smoother?new iw().fromJSON(e.smoother):null,this}resolveReferences(e){super.resolveReferences(e),this.steering.resolveReferences(e)}}class Gc{touching(){return!1}update(){return this}toJSON(){return{type:this.constructor.name}}fromJSON(){return this}}const Im=new tu,Nm=new ae;class rw extends Gc{constructor(e=new ae){super(),this.size=e,this._aabb=new Td}touching(e){return Im.set(e.position,e.boundingRadius),this._aabb.intersectsBoundingSphere(Im)}update(e){return e.getWorldPosition(Nm),this._aabb.fromCenterAndSize(Nm,this.size),this}toJSON(){const e=super.toJSON();return e.size=this.size.toArray(new Array),e}fromJSON(e){return super.fromJSON(e),this.size.fromArray(e.size),this}}const ph=new tu;class sw extends Gc{constructor(e=0){super(),this.radius=e,this._boundingSphere=new tu}touching(e){return e.getWorldPosition(ph.center),ph.radius=e.boundingRadius,this._boundingSphere.intersectsBoundingSphere(ph)}update(e){return e.getWorldPosition(this._boundingSphere.center),this._boundingSphere.radius=this.radius,this}toJSON(){const e=super.toJSON();return e.radius=this.radius,e}fromJSON(e){return super.fromJSON(e),this.radius=e.radius,this}}class Om extends Md{constructor(e=new Gc){super(),this.region=e,this.canActivateTrigger=!1,this._typesMap=new Map}check(e){return this.region.touching(e)===!0&&this.execute(e),this}execute(){}updateRegion(){return this.region.update(this),this}toJSON(){const e=super.toJSON();return e.region=this.region.toJSON(),e}fromJSON(e){super.fromJSON(e);const t=e.region;let n=t.type;switch(n){case"TriggerRegion":this.region=new Gc().fromJSON(t);break;case"RectangularTriggerRegion":this.region=new rw().fromJSON(t);break;case"SphericalTriggerRegion":this.region=new sw().fromJSON(t);break;default:const i=this._typesMap.get(n);i!==void 0?this.region=new i().fromJSON(t):Ni.warn("YUKA.Trigger: Unsupported trigger region type:",t.type)}return this}registerType(e,t){return this._typesMap.set(e,t),this}}const ea=new Array;class ow{constructor(){this.entities=new Array,this.spatialIndex=null,this._triggers=new Array,this._indexMap=new Map,this._typesMap=new Map,this._messageDispatcher=new GE}add(e){return this.entities.push(e),e.manager=this,this}remove(e){const t=this.entities.indexOf(e);return this.entities.splice(t,1),e.manager=null,this}clear(){return this.entities.length=0,this._messageDispatcher.clear(),this}getEntityByName(e){const t=this.entities;for(let n=0,i=t.length;n<i;n++){const s=t[n];if(s.name===e)return s}return null}update(e){const t=this.entities,n=this._triggers;for(let i=t.length-1;i>=0;i--){const s=t[i];this.updateEntity(s,e)}for(let i=n.length-1;i>=0;i--){const s=n[i];this.processTrigger(s)}return this._triggers.length=0,this._messageDispatcher.dispatchDelayedMessages(e),this}updateEntity(e,t){if(e.active===!0){this.updateNeighborhood(e),e._started===!1&&(e.start(),e._started=!0),e.update(t);const n=e.children;for(let o=n.length-1;o>=0;o--){const a=n[o];this.updateEntity(a,t)}if(e instanceof Om&&this._triggers.push(e),this.spatialIndex!==null){let o=this._indexMap.get(e)||-1;o=this.spatialIndex.updateEntity(e,o),this._indexMap.set(e,o)}const i=e._renderComponent,s=e._renderComponentCallback;i!==null&&s!==null&&s(e,i)}return this}updateNeighborhood(e){if(e.updateNeighborhood===!0){e.neighbors.length=0,this.spatialIndex!==null?this.spatialIndex.query(e.position,e.neighborhoodRadius,ea):(ea.length=0,ea.push(...this.entities));const t=e.neighborhoodRadius*e.neighborhoodRadius;for(let n=0,i=ea.length;n<i;n++){const s=ea[n];e!==s&&s.active===!0&&e.position.squaredDistanceTo(s.position)<=t&&e.neighbors.push(s)}}return this}processTrigger(e){e.updateRegion();const t=this.entities;for(let n=t.length-1;n>=0;n--){const i=t[n];e!==i&&i.active===!0&&i.canActivateTrigger===!0&&e.check(i)}return this}sendMessage(e,t,n,i,s){return this._messageDispatcher.dispatch(e,t,n,i,s),this}toJSON(){const e={type:this.constructor.name,entities:new Array,_messageDispatcher:this._messageDispatcher.toJSON()};function t(n){e.entities.push(n.toJSON());for(let i=0,s=n.children.length;i<s;i++)t(n.children[i])}for(let n=0,i=this.entities.length;n<i;n++)t(this.entities[n]);return e}fromJSON(e){this.clear();const t=e.entities,n=e._messageDispatcher,i=new Map;for(let s=0,o=t.length;s<o;s++){const a=t[s],l=a.type;let c;switch(l){case"GameEntity":c=new Md().fromJSON(a);break;case"MovingEntity":c=new a0().fromJSON(a);break;case"Vehicle":c=new f0().fromJSON(a);break;case"Trigger":c=new Om().fromJSON(a);break;default:const u=this._typesMap.get(l);if(u!==void 0)c=new u().fromJSON(a);else{Ni.warn("YUKA.EntityManager: Unsupported entity type:",l);continue}}i.set(c.uuid,c),c.parent===null&&this.add(c)}for(let s of i.values())s.resolveReferences(i);return this._messageDispatcher.fromJSON(n),this}registerType(e,t){return this._typesMap.set(e,t),this}}new Array;new Array;new Array;var aw=`uniform float uTime;\r
float grain(vec2 coord) {\r
    return fract(sin(dot(coord * uTime, vec2(12.9898, 78.233))) * 43758.5453);\r
}

uniform vec2 uMouse;\r
uniform vec2 uMouseDirection;\r
uniform sampler2D tDiffuse;\r
varying vec2 vUv;

void main() {

    vec2 uv = vUv;\r
    vec4 baseState = texture2D(tDiffuse , uv);

    vec2 gridUV = floor(uv * vec2(80.0,80.0)) /  vec2(80.0,80.0);

    vec2 centerOfPixel = gridUV + vec2(1.0 / 160.0 , 1.0 / 160.0);

    vec2 pixelToMouseDirection = centerOfPixel - uMouse;\r
    \r
    float pixelDistanceToMouse = length(pixelToMouseDirection);\r
    float strength = smoothstep(0.2 ,0.0 , pixelDistanceToMouse) ;\r
    vec2 distortion = vec2(0.04) * strength  * uMouseDirection ;\r
   \r
    vec4 colorR = texture2D(tDiffuse , clamp(uv + distortion *0.7, 0.0, 1.0));\r
    vec4 colorG = texture2D(tDiffuse , clamp(uv + distortion*0.6, 0.0, 1.0));\r
    vec4 colorB = texture2D(tDiffuse ,clamp(uv + distortion*0.5, 0.0, 1.0));\r
    vec4 finalColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);

   gl_FragColor = vec4(finalColor);

   }`,lw=`float hash( in vec2 p ) \r
{\r
    return fract(sin(p.x*15.32+p.y*35.78) * 43758.23);\r
}

vec2 hash2(vec2 p)\r
{\r
	return vec2(hash(p*.754),hash(1.5743*p.yx+4.5891))-.5;\r
}\r

vec2 add = vec2(1.0, 0.0);

vec2 noise2(vec2 x)\r
{\r
    vec2 p = floor(x);\r
    vec2 f = fract(x);\r
    f = f*f*(3.0-2.0*f);\r
    \r
    vec2 res = mix(mix( hash2(p),          hash2(p + add.xy),f.x),\r
                    mix( hash2(p + add.yx), hash2(p + add.xx),f.x),f.y);\r
    return res;\r
}

vec2 noise2b( in vec2 p )
{\r
    const float K1 = 0.366025404; 
    const float K2 = 0.211324865; 
	p /=2.;\r
	vec2 i = floor( p + (p.x+p.y)*K1 );\r
	\r
    vec2 a = p - i + (i.x+i.y)*K2;\r
    vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0); 
    vec2 b = a - o + K2;\r
	vec2 c = a - 1.0 + 2.0*K2;

    vec3 h = max( 0.5-vec3(dot(a,a), dot(b,b), dot(c,c) ), 0.0 );

	vec3 nx = h*h*h*h*vec3( dot(a,hash2(i+0.0)), dot(b,hash2(i+o)), dot(c,hash2(i+1.0)));\r
    vec3 ny = h*h*h*h*vec3( dot(a,hash2(i+4.5)), dot(b,hash2(i+o+4.5)), dot(c,hash2(i+1.0+4.5)));

    return vec2(dot( nx, vec3(70.0) ),dot( ny, vec3(70.0) ));\r
	\r
}\r

mat2 m2;

vec2 fbm2(vec2 x)\r
{\r
    vec2 r = vec2(0.0);\r
    float a = 1.;\r
    \r
    for (int i = 0; i < 6; i++)\r
    {\r
        r += m2*noise2b(x+r)*a; \r
        x +=.3*r+.4;\r
    }     \r
    return r;\r
}\r

vec2 water(vec2 x)\r
{\r
    x=fbm2(x);\r
    x=abs(x)/dot(x,x)-1.;\r
    return abs(x)/dot(x,x)-1.;\r
}\r

uniform vec2 iResolution;\r
uniform float iTime;\r
uniform sampler2D iChannel0;\r
varying vec2 vUv;\r

void main() {\r
    vec2 uv = vUv * 10.0;

    float t = 1.5 * iTime;\r
    float st = sin(t), ct = cos(t);\r
    m2 = mat2(ct, st, -st, ct);

    vec2 p = water(uv + 2.0 * iTime) + 2.0;\r
    float c = length(p) / 7.0;\r
    c = clamp(pow(c, 3.0), 0.0, 1.0);

    vec3 col = texture2D(iChannel0, uv / 20.0 + p / 45.0).rgb;\r
    col = mix(col, vec3(0.7, 0., 0.9), c);

    gl_FragColor = vec4(col, 1.0);\r
}`,cw=`varying vec2 vUv;

void main() {\r
    vUv = uv; 
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,mh={exports:{}},Fm;function uw(){return Fm||(Fm=1,function(r){(function(e){function t(c){function u(h,f,d){this.x=h,this.y=f,this.z=d}u.prototype.dot2=function(h,f){return this.x*h+this.y*f},u.prototype.dot3=function(h,f,d){return this.x*h+this.y*f+this.z*d},this.grad3=[new u(1,1,0),new u(-1,1,0),new u(1,-1,0),new u(-1,-1,0),new u(1,0,1),new u(-1,0,1),new u(1,0,-1),new u(-1,0,-1),new u(0,1,1),new u(0,-1,1),new u(0,1,-1),new u(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(c||0)}t.prototype.seed=function(c){c>0&&c<1&&(c*=65536),c=Math.floor(c),c<256&&(c|=c<<8);for(var u=this.p,h=0;h<256;h++){var f;h&1?f=u[h]^c&255:f=u[h]^c>>8&255;var d=this.perm,g=this.gradP;d[h]=d[h+256]=f,g[h]=g[h+256]=this.grad3[f%12]}};var n=.5*(Math.sqrt(3)-1),i=(3-Math.sqrt(3))/6,s=1/3,o=1/6;t.prototype.simplex2=function(c,u){var h,f,d,g=(c+u)*n,_=Math.floor(c+g),m=Math.floor(u+g),p=(_+m)*i,M=c-_+p,S=u-m+p,v,w;M>S?(v=1,w=0):(v=0,w=1);var T=M-v+i,E=S-w+i,b=M-1+2*i,x=S-1+2*i;_&=255,m&=255;var y=this.perm,C=this.gradP,L=C[_+y[m]],N=C[_+v+y[m+w]],F=C[_+1+y[m+1]],z=.5-M*M-S*S;z<0?h=0:(z*=z,h=z*z*L.dot2(M,S));var O=.5-T*T-E*E;O<0?f=0:(O*=O,f=O*O*N.dot2(T,E));var H=.5-b*b-x*x;return H<0?d=0:(H*=H,d=H*H*F.dot2(b,x)),70*(h+f+d)},t.prototype.simplex3=function(c,u,h){var f,d,g,_,m=(c+u+h)*s,p=Math.floor(c+m),M=Math.floor(u+m),S=Math.floor(h+m),v=(p+M+S)*o,w=c-p+v,T=u-M+v,E=h-S+v,b,x,y,C,L,N;w>=T?T>=E?(b=1,x=0,y=0,C=1,L=1,N=0):w>=E?(b=1,x=0,y=0,C=1,L=0,N=1):(b=0,x=0,y=1,C=1,L=0,N=1):T<E?(b=0,x=0,y=1,C=0,L=1,N=1):w<E?(b=0,x=1,y=0,C=0,L=1,N=1):(b=0,x=1,y=0,C=1,L=1,N=0);var F=w-b+o,z=T-x+o,O=E-y+o,H=w-C+2*o,V=T-L+2*o,j=E-N+2*o,P=w-1+3*o,te=T-1+3*o,Te=E-1+3*o;p&=255,M&=255,S&=255;var we=this.perm,q=this.gradP,ne=q[p+we[M+we[S]]],fe=q[p+b+we[M+x+we[S+y]]],oe=q[p+C+we[M+L+we[S+N]]],xe=q[p+1+we[M+1+we[S+1]]],Be=.5-w*w-T*T-E*E;Be<0?f=0:(Be*=Be,f=Be*Be*ne.dot3(w,T,E));var de=.5-F*F-z*z-O*O;de<0?d=0:(de*=de,d=de*de*fe.dot3(F,z,O));var $e=.5-H*H-V*V-j*j;$e<0?g=0:($e*=$e,g=$e*$e*oe.dot3(H,V,j));var Ke=.5-P*P-te*te-Te*Te;return Ke<0?_=0:(Ke*=Ke,_=Ke*Ke*xe.dot3(P,te,Te)),32*(f+d+g+_)};function a(c){return c*c*c*(c*(c*6-15)+10)}function l(c,u,h){return(1-h)*c+h*u}t.prototype.perlin2=function(c,u){var h=Math.floor(c),f=Math.floor(u);c=c-h,u=u-f,h=h&255,f=f&255;var d=this.perm,g=this.gradP,_=g[h+d[f]].dot2(c,u),m=g[h+d[f+1]].dot2(c,u-1),p=g[h+1+d[f]].dot2(c-1,u),M=g[h+1+d[f+1]].dot2(c-1,u-1),S=a(c);return l(l(_,p,S),l(m,M,S),a(u))},t.prototype.perlin3=function(c,u,h){var f=Math.floor(c),d=Math.floor(u),g=Math.floor(h);c=c-f,u=u-d,h=h-g,f=f&255,d=d&255,g=g&255;var _=this.perm,m=this.gradP,p=m[f+_[d+_[g]]].dot3(c,u,h),M=m[f+_[d+_[g+1]]].dot3(c,u,h-1),S=m[f+_[d+1+_[g]]].dot3(c,u-1,h),v=m[f+_[d+1+_[g+1]]].dot3(c,u-1,h-1),w=m[f+1+_[d+_[g]]].dot3(c-1,u,h),T=m[f+1+_[d+_[g+1]]].dot3(c-1,u,h-1),E=m[f+1+_[d+1+_[g]]].dot3(c-1,u-1,h),b=m[f+1+_[d+1+_[g+1]]].dot3(c-1,u-1,h-1),x=a(c),y=a(u),C=a(h);return l(l(l(p,w,x),l(M,T,x),C),l(l(S,E,x),l(v,b,x),C),y)},e.Noise=t})(r.exports)}(mh)),mh.exports}var hw=uw();let Qi,as,ls,cs,er,zm,ta,na,tc,gh,Bm,_h,no,io,nc,km=0,ic={x:.5,y:.5},rc={x:.5,y:.5},Vm,sc=[],us,vh,tr;function fw(){const r=document.querySelector(".canvas");Qi=new Hf,Qi.background=new et(0),as=new mi(45,window.innerWidth/window.innerHeight,.1,100),as.position.set(0,2,5),ls=new Yf({antialias:!0,canvas:r,alpha:!0}),ls.setClearColor(0,0),ls.setSize(window.innerWidth,window.innerHeight),ls.outputEncoding=void 0,ls.setPixelRatio(window.devicePixelRatio),new NE().load("HDRI/hdri1.hdr",v=>{v.mapping=wc,Qi.environment=v});const e=new tx(16777215,5);Qi.add(e);const t=12.5,n=6.75,i=new Xf(t,t,n,600,1,!0);gh=new Gv({side:Ui,flatShading:!1,metalness:.5,roughness:.3}),tc=new ni(i,gh),tc.position.y=n/2-1,Qi.add(tc),na=new ni(new Oo(100,100),new It({color:0,metalness:.1,roughness:.9,uniforms:{iResolution:{value:new Xe(window.innerWidth,window.innerHeight)},iTime:{value:0},iChannel0:{value:null}},vertexShader:`
        varying vec2 vUv;
        void main() {
         vUv = uv;
         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }  `,fragmentShader:lw})),na.rotation.x=-Math.PI/2,na.position.y=-1,Qi.add(na),cs=new kE(ls),cs.addPass(new VE(Qi,as)),er=new sr({renderer:ls,scene:Qi,camera:as,width:window.innerWidth,height:window.innerHeight}),er.opacity=.4,er.enableBlur=!0,er.blurKernelSize=30,er.blurSharpness=15,er.maxDistance=5,er.thickness=.8,er.enableDistanceAttenuation=!0,cs.addPass(er),zm=new Io(new Xe(window.innerWidth,window.innerHeight),.3,.4,.85),cs.addPass(zm),us=document.getElementById("videoCanvas"),vh=us.getContext("2d"),sc=[document.getElementById("v1"),document.getElementById("v2"),document.getElementById("v3"),document.getElementById("v4")];const s=512,o=512;us.width=s*sc.length,us.height=o,tr=new Gf(us),tr.wrapS=bc,tr.wrapT=xn,tr.minFilter=sn,tr.repeat.set(1,1),tr.center.set(0,0),tr.needsUpdate=!0;function a(){vh.clearRect(0,0,us.width,us.height),sc.forEach((v,w)=>{vh.drawImage(v,w*s,0,s,o)}),tr.needsUpdate=!0,gh.map=tr,requestAnimationFrame(a)}a(),sc.forEach((v,w)=>{v.muted=!0,v.loop=!0,v.play().catch(T=>console.warn(`Video ${w} error:`,T))}),at.to("nav",{y:-100}),_h=new ow,no=new f0,no.position.set(-5,0,50),io=new c0,io.add(new ae(-5,0,50)),io.add(new ae(2,1,25)),io.add(new ae(28,2.5,-2)),io.loop=!1,no.setRenderComponent(as,(v,w)=>{w.position.copy(v.position),v.position.z<=15&&(at.to(as.rotation,{y:Math.PI/2*(15-as.position.z)/15,duration:1}),at.to("nav",{delay:5,y:0,opacity:1,duration:1}))});const l=new u0(io,15);no.steering.add(l),no.maxSpeed=40,_h.add(no);const c={vertexShader:cw,fragmentShader:aw,uniforms:{tDiffuse:{value:null},uMouse:{value:new Xe(.5,.5)},uMouseDirection:{value:new Xe(0,0)},uTime:{value:0}}};ta=new o0(c),cs.addPass(ta),cs.setSize(window.innerWidth,window.innerHeight);const u=new hw.Noise(Math.random()),h=70,f=new Float32Array(h*3),d=new Float32Array(h);for(let v=0;v<h;v++)f[v*3+0]=(Math.random()-.5)*40.5,f[v*3+1]=(Math.random()-.1)*20.5,f[v*3+2]=(Math.random()-.5)*40.5,d[v]=2.25+Math.random()*10.2;const g=new bi;g.setAttribute("position",new Ei(f,3)),g.setAttribute("speed",new Ei(d,1));const _=new It({transparent:!0,side:Ui,depthWrite:!1,uniforms:{size:{value:4},scale:{value:4},color:{value:new et(16777215)}},vertexShader:Li.points.vertexShader,fragmentShader:`
      uniform vec3 color;
      void main() {
        vec2 xy = gl_PointCoord.xy - vec2(0.5);
        float ll = length(xy);
        float r = step(length(xy + vec2(0.01, 0.0)), 0.5);
        float g = step(ll, 0.5);
        float b = step(length(xy - vec2(0.01, 0.0)), 0.5);
        gl_FragColor = vec4(r, g, b, 1.0)*0.6 ;
      }
    `});Bm=new Ag(g,_),Qi.add(Bm),nc=new Rg;function m(){const v=nc.getElapsedTime(),w=g.attributes.position.array,T=g.attributes.speed.array;for(let E=0;E<h;E++){const b=E*3,x=u.simplex3(w[b]*.5,w[b+1]*.5,v*.2),y=u.simplex3(w[b+1]*.5,w[b+2]*.5,v*.2),C=u.simplex3(w[b+2]*.5,w[b]*.5,v*.2);w[b+0]+=x*.01*T[E],w[b+1]+=y*.01*T[E],w[b+2]+=C*.01*T[E]}g.attributes.position.needsUpdate=!0}function p(){requestAnimationFrame(p);const v=nc.getDelta();tc.rotation.y=nc.getElapsedTime()*.05-Math.PI/8,ta.uniforms.uTime.value=performance.now()/1e3,_h.update(v*km),na.material.uniforms.iTime.value=performance.now()/1e4,m(),cs.render()}p(),window.addEventListener("mousemove",M);function M(v){let w=v.x/window.innerWidth,T=1-v.y/window.innerHeight;rc.x=w,rc.y=T,at.to(ta.uniforms.uMouseDirection.value,{x:-Math.sign(rc.x-ic.x),y:-Math.sign(rc.y-ic.y)}),ic.x=w,ic.y=T,at.to(ta.uniforms.uMouse.value,{x:w,y:T,duration:.5,ease:"power2.out"})}function S(){const v=document.getElementById("sound");v.volume=.1,v.currentTime=0,v.play()}document.querySelectorAll(".hero .NavButton").forEach(v=>{v.addEventListener("mouseenter",()=>{at.to(v,{backgroundColor:"#FFFFFF",color:"black",duration:.7})}),v.addEventListener("mouseleave",()=>{at.to(v,{backgroundColor:"transparent",color:"white",duration:.7})})}),document.querySelectorAll("#playSound").forEach(v=>{v.addEventListener("mouseenter",()=>{S()})}),Vm=at.timeline(),Vm.to(".loadingPage .loader",{height:"40vh",duration:2,ease:"power2.in"}).to(".loadingPage",{opacity:0,duration:.5,ease:"power2.in",onComplete:()=>{document.querySelector(".loadingPage").style.display="none",km=1}}),console.log("home Start")}fw();const kr=[{title:"Motion Study",image:"images/works1.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2024,href:"/"},{title:"Digital Bloom",image:"images/works2.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2023,href:"/"},{title:"Echo Design",image:"images/works3.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2022,href:"/"},{title:"Waveform Art",image:"images/works4.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2024,href:"/"},{title:"Pixel Flow",image:"images/works5.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2021,href:"/"},{title:"Neon Trails",image:"images/works6.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2023,href:"/"},{title:"Visual Drift",image:"images/works7.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2022,href:"/"},{title:"Reactive Grid",image:"images/works8.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2020,href:"/"},{title:"Geometry Loop",image:"images/works9.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2023,href:"/"},{title:"Pattern Code",image:"images/works10.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2024,href:"/"},{title:"Signal Noise",image:"images/works11.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2021,href:"/"},{title:"Light Canvas",image:"images/works12.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2022,href:"/"},{title:"Echo Pulse",image:"images/works13.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2023,href:"/"},{title:"Fragment Flow",image:"images/works14.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2024,href:"/"},{title:"Frame Sync",image:"images/works15.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2020,href:"/"},{title:"Generative Mesh",image:"images/works16.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2021,href:"/"},{title:"Visual Memory",image:"images/works17.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2022,href:"/"},{title:"Data Pulse",image:"images/works18.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2024,href:"/"},{title:"Motion Language",image:"images/works19.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2023,href:"/"},{title:"Layer Drift",image:"images/works20.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2022,href:"/"},{title:"Echo Layer",image:"images/works21.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2021,href:"/"},{title:"Form Noise",image:"images/works22.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2020,href:"/"},{title:"Mesh Vibe",image:"images/works23.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2023,href:"/"},{title:"Rhythm Grid",image:"images/works24.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2024,href:"/"},{title:"Sketch Synth",image:"images/works25.jpg",hoverColor:"rgba(100,100,100,0.1)",year:2022,href:"/"}],dw=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,pw=`
  uniform vec2 uOffset;
  uniform vec2 uResolution;
  uniform vec4 uBorderColor;
  uniform vec4 uHoverColor;
  uniform vec4 uBackgroundColor;
  uniform vec2 uMousePos;
  uniform float uZoom;
  uniform float uCellSize;
  uniform float uTextureCount;
  uniform sampler2D uImageAtlas;
  uniform sampler2D uTextAtlas;

  varying vec2 vUv;

  void main() {
    vec2 screenUV = (vUv - 0.5) *2.0;

    float radius = length(screenUV);
    float distortion = 1.0 - 0.11 * radius * radius;
    vec2 distortedUV = screenUV * distortion;

    vec2 aspectRatio = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 worldCoord = distortedUV * aspectRatio;

    worldCoord *= uZoom;
    worldCoord += uOffset;

    vec2 cellPos = worldCoord / uCellSize;
    vec2 cellId = floor(cellPos);
    vec2 cellUV = fract(cellPos);

    vec2 mouseScreenUV = (uMousePos / uResolution) * 2.0 - 1.0;
    mouseScreenUV.y = -mouseScreenUV.y;

    float mouseRadius = length(mouseScreenUV);
    float mouseDistortion = 1.0 - 0.08 * mouseRadius * mouseRadius;
    vec2 mouseDistortedUV = mouseScreenUV * mouseDistortion;
    vec2 mouseWorldCoord = mouseDistortedUV * aspectRatio;
    mouseWorldCoord *= uZoom;
    mouseWorldCoord += uOffset;

    vec2 mouseCellPos = mouseWorldCoord / uCellSize;
    vec2 mouseCellId = floor(mouseCellPos);

    vec2 cellCenter = cellId + 0.5;
    vec2 mouseCellCenter = mouseCellId + 0.5;

    float cellDistance = length(cellCenter - mouseCellCenter);
    float hoverIntensity = 1.0 - smoothstep(0.4, 0.7, cellDistance);
    bool isHovered = hoverIntensity > 0.0 && uMousePos.x >= 0.0;

    vec3 backgroundColor = uBackgroundColor.rgb;
    if (isHovered) {
      backgroundColor = mix(uBackgroundColor.rgb, uHoverColor.rgb, hoverIntensity * uHoverColor.a);
    }

    float lineWidth = 0.005;
    float gridX = smoothstep(0.0, lineWidth, cellUV.x) * smoothstep(0.0, lineWidth, 1.0 - cellUV.x);
    float gridY = smoothstep(0.0, lineWidth, cellUV.y) * smoothstep(0.0, lineWidth, 1.0 - cellUV.y);
    float gridMask = gridX * gridY;

    float imageSize = 0.6;
    float imageBorder = (1.0 - imageSize) * 0.5;
    vec2 imageUV = (cellUV - imageBorder) / imageSize;

    float edgeSmooth = 0.01;
    vec2 imageMask = smoothstep(-edgeSmooth, edgeSmooth, imageUV) *
                     smoothstep(-edgeSmooth, edgeSmooth, 1.0 - imageUV);
    float imageAlpha = imageMask.x * imageMask.y;

    bool inImageArea = imageUV.x >= 0.0 && imageUV.x <= 1.0 &&
                       imageUV.y >= 0.0 && imageUV.y <= 1.0;

    float textHeight = 0.08;
    float textY = 0.88;

    bool inTextArea = cellUV.x >= 0.05 && cellUV.x <= 0.95 &&
                      cellUV.y >= textY && cellUV.y <= (textY + textHeight);

    float textIndex = mod(cellId.x + cellId.y * 3.0, uTextureCount);

    vec3 color = backgroundColor;

    if (inImageArea && imageAlpha > 0.0) {
      float atlasSize = ceil(sqrt(uTextureCount));
      vec2 atlasPos = vec2(mod(textIndex, atlasSize), floor(textIndex / atlasSize));
      vec2 atlasUV = (atlasPos + imageUV) / atlasSize;
      atlasUV.y = 1.0 - atlasUV.y;

      vec3 imageColor = texture2D(uImageAtlas, atlasUV).rgb;
      color = mix(color, imageColor, imageAlpha);
    }

    if (inTextArea) {
      vec2 textCoord = vec2((cellUV.x - 0.05) / 0.9, (cellUV.y - textY) / textHeight);
      textCoord.y = 1.0 - textCoord.y;

      float atlasSize = ceil(sqrt(uTextureCount));
      vec2 atlasPos = vec2(mod(textIndex, atlasSize), floor(textIndex / atlasSize));
      vec2 atlasUV = (atlasPos + textCoord) / atlasSize;

      vec4 textColor = texture2D(uTextAtlas, atlasUV);
      vec3 textBgColor = backgroundColor;
      color = mix(textBgColor, textColor.rgb, textColor.a);
    }

    vec3 borderRGB = uBorderColor.rgb;
    float borderAlpha = uBorderColor.a;
    color = mix(color, borderRGB, (1.0 - gridMask) * borderAlpha);

    float fade = 1.0 - smoothstep(1.2, 1.8, radius);
    gl_FragColor = vec4(color * fade, 1.0);
  }
`,Ti={cellSize:.65,zoomlevel:1.25,lerpFactor:.075,borderColor:"rgba(255,255,255,0.1)",backgroundColor:"rgba(0,0,0,1)",textColor:"rgba(128,128,128,1)"};let Df,Wc,Fn,jt,Wa=!1,Ed=!0,d0=0,ho={x:0,y:0},Lr={x:0,y:0},Hi={x:0,y:0},fo={x:0,y:0},Vr={x:-1,y:-1},Ea=1,Xa=1,Lf=[];const oc=r=>{const e=r.match(/rgba?\(([^)]+)\)/);return e?e[1].split(",").map((t,n)=>n<3?parseFloat(t.trim())/255:parseFloat(t.trim()||1)):[1,1,1,1]},mw=(r,e)=>{const t=document.createElement("canvas");t.width=2048,t.height=256;const n=t.getContext("2d");n.clearRect(0,0,2048,256),n.font="bold 100px Anton",n.fillStyle=Ti.textColor,n.textBaseline="middle",n.imageSmoothingEnabled=!0,n.textAlign="left",n.fillText(r.toUpperCase(),30,128),n.textAlign="right",n.fillText(e.toString().toUpperCase(),2018,128);const i=new Gf(t);return Object.assign(i,{wrapS:xn,wrapT:xn,minFilter:yt,magFilter:yt,flipY:!1,generateMipmaps:!1,format:xi}),i},Hm=(r,e=!1)=>{const t=Math.ceil(Math.sqrt(r.length)),n=512,i=document.createElement("canvas");i.width=i.height=t*n;const s=i.getContext("2d");e?s.clearRect(0,0,i.width,i.height):(s.fillStyle="black",s.fillRect(0,0,i.width,i.height)),r.forEach((a,l)=>{var h,f;const c=l%t*n,u=Math.floor(l/t)*n;e&&((h=a.source)!=null&&h.data)?s.drawImage(a.source.data,c,u,n,n):!e&&((f=a.image)!=null&&f.complete)&&s.drawImage(a.image,c,u,n,n)});const o=new Gf(i);return Object.assign(o,{wrapS:xn,wrapT:xn,minFilter:yt,magFilter:yt,flipY:!1}),o},gw=()=>{const r=new Qv,e=[];let t=0;return new Promise(n=>{kr.forEach(i=>{const s=r.load(i.image,()=>{++t===kr.length&&n(e)});Object.assign(s,{wrapS:xn,wrapT:xn,minFilter:sn,magFilter:sn}),e.push(s),Lf.push(mw(i.title,i.year))})})},Gm=r=>{const e=Fn.domElement.getBoundingClientRect();Vr.x=r.clientX-e.left,Vr.y=r.clientY-e.top,jt==null||jt.material.uniforms.uMousePos.value.set(Vr.x,Vr.y)},p0=(r,e)=>{Wa=!0,Ed=!0,d0=Date.now(),document.body.classList.add("dragging"),ho.x=r,ho.y=e,Xa=Ti.zoomlevel},m0=(r,e)=>{if(!Wa||r===void 0||e===void 0)return;const t=r-ho.x,n=e-ho.y;(Math.abs(t)>2||Math.abs(n)>2)&&(Ed=!1,Xa===1&&(Xa=Ti.zoomlevel)),Hi.x-=t*.007,Hi.y+=n*.007,fo.y=Hi.y,fo.x=Hi.x,ho.x=r,ho.y=e},Wm=r=>p0(r.clientX,r.clientY),Xm=r=>m0(r.clientX,r.clientY),ro=r=>{var e,t,n,i,s;if(Wa=!1,document.body.classList.remove("dragging"),Xa=1,Ed&&Date.now()-d0<200){const o=r.clientX||((t=(e=r.changedTouches)==null?void 0:e[0])==null?void 0:t.clientX),a=r.clientY||((i=(n=r.changedTouches)==null?void 0:n[0])==null?void 0:i.clientY);if(o!==void 0&&a!==void 0){const l=Fn.domElement.getBoundingClientRect(),c=(o-l.left)/l.width*2-1,u=-((a-l.top)/l.height)*2-1,h=Math.sqrt(c*c+u*u),f=1-.08*h*h;let d=c*f*(l.width/l.height)*Ea+Lr.x,g=u*f*Ea+Lr.y;const _=Math.floor(d/Ti.cellSize),m=Math.floor(g/Ti.cellSize),p=Math.floor((_+m*3)%kr.length),M=p<0?kr.length+p:p;(s=kr[M])!=null&&s.href&&(window.location.href=kr[M].href)}}},qm=r=>{r.preventDefault(),p0(r.touches[0].clientX,r.touches[0].clientY)},Ym=r=>{r.preventDefault(),m0(r.touches[0].clientX,r.touches[0].clientY)},$m=()=>{const r=document.getElementById("gallery");if(!r)return;const{offsetWidth:e,offsetHeight:t}=r;Wc.updateProjectionMatrix(),Fn.setSize(e,t),Fn.setPixelRatio(window.devicePixelRatio),jt==null||jt.material.uniforms.uResolution.value.set(e,t)};function _w(){let r=document.querySelector("#gallery");r&&(r.addEventListener("mousedown",Wm),r.addEventListener("mousemove",Xm),r.addEventListener("mouseup",ro),r.addEventListener("mouseleave",ro),r.addEventListener("touchstart",qm,{passive:!1}),r.addEventListener("touchmove",Ym,{passive:!1}),r.addEventListener("touchend",ro,{passive:!1}),window.addEventListener("resize",$m),document.addEventListener("contextmenu",e=>e.preventDefault()),Fn.domElement.addEventListener("mousemove",Gm),window.addEventListener("mousemove",e=>{let t=e.x/window.innerWidth*2-1,n=e.y/window.innerHeight*2-1;Wa||(Hi.x=-t*.1+fo.x,Hi.y=n*.1+fo.y)}),Fn.domElement.addEventListener("mouseleave",()=>{Vr.x=Vr.y=-1,jt==null||jt.material.uniforms.uMousePos.value.set(-1,-1)}),Fn.domElement,Fn.domElement)}function g0(){requestAnimationFrame(g0),Lr.x+=(Hi.x-Lr.x)*Ti.lerpFactor,Lr.y+=(Hi.y-Lr.y)*Ti.lerpFactor,Ea+=(Xa-Ea)*Ti.lerpFactor,jt!=null&&jt.material.uniforms&&(jt.material.uniforms.uOffset.value.set(Lr.x,Lr.y),jt.material.uniforms.uZoom.value=Ea),Fn.render(Df,Wc)}async function vw(){Lf=[];let r=document.getElementById("gallery");if(!r)return;Df=new Hf,Wc=new Yc(-1,1,1,-1,.1,10),Wc.position.z=3,Fn=new Yf({antialias:!0,alpha:!1}),Fn.setSize(r.offsetWidth,r.offsetHeight),Fn.setPixelRatio(window.devicePixelRatio);const e=oc(Ti.backgroundColor);Fn.setClearColor(new et(e[0],e[1],e[2]),e[3]),r.appendChild(Fn.domElement);const t=await gw(),n=Hm(t,!1),i=Hm(Lf,!0);let s={uOffset:{value:new Xe(0,0)},uResolution:{value:new Xe(r.offsetWidth,r.offsetHeight)},uBorderColor:{value:new Dt(...oc(Ti.borderColor))},uHoverColor:{value:0},uBackgroundColor:{value:new Dt(...oc(Ti.backgroundColor))},uMousePos:{value:new Xe(-1,-1)},uZoom:{value:1},uCellSize:{value:Ti.cellSize},uTextureCount:{value:kr.length},uImageAtlas:{value:n},uTextAtlas:{value:i}};kr.forEach(f=>{s.uHoverColor.value=new Dt(...oc(f.hoverColor))});const o=new Oo(2,2),a=new It({vertexShader:dw,fragmentShader:pw,uniforms:s});jt=new ni(o,a),Df.add(jt),_w(),g0();let l=!1,c=document.querySelector(".PageShiftButton1"),u=document.querySelector(".PageShiftButton2"),h=document.querySelector(".PageShiftButton3");c&&u&&h&&(c.addEventListener("click",()=>{if(l)return;l=!0;let f=document.querySelector(".transitionButtons .bgButton"),d=document.querySelector(".transitionButtons").getBoundingClientRect(),g=c.getBoundingClientRect();at.to(f,{left:g.left-d.left+"px",onComplete:()=>{l=!1}})}),u.addEventListener("click",()=>{if(l)return;l=!0;let f=document.querySelector(".transitionButtons .bgButton"),d=document.querySelector(".transitionButtons").getBoundingClientRect(),g=u.getBoundingClientRect();at.to(f,{left:g.left-d.left+"px",onComplete:()=>{l=!1}})}),h.addEventListener("click",()=>{if(l)return;l=!0;let f=document.querySelector(".transitionButtons .bgButton"),d=document.querySelector(".transitionButtons").getBoundingClientRect(),g=h.getBoundingClientRect();at.to(f,{left:g.left-d.left+"px",onComplete:()=>{l=!1}})})),console.log("work Start")}vw();/*!
 * paths 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xw=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,yw=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,Sw=Math.PI/180,ac=Math.sin,lc=Math.cos,wa=Math.abs,ia=Math.sqrt,Mw=function(e){return typeof e=="number"},Jm=1e5,Pr=function(e){return Math.round(e*Jm)/Jm||0};function Tw(r,e,t,n,i,s,o){for(var a=r.length,l,c,u,h,f;--a>-1;)for(l=r[a],c=l.length,u=0;u<c;u+=2)h=l[u],f=l[u+1],l[u]=h*e+f*n+s,l[u+1]=h*t+f*i+o;return r._dirty=1,r}function Ew(r,e,t,n,i,s,o,a,l){if(!(r===a&&e===l)){t=wa(t),n=wa(n);var c=i%360*Sw,u=lc(c),h=ac(c),f=Math.PI,d=f*2,g=(r-a)/2,_=(e-l)/2,m=u*g+h*_,p=-h*g+u*_,M=m*m,S=p*p,v=M/(t*t)+S/(n*n);v>1&&(t=ia(v)*t,n=ia(v)*n);var w=t*t,T=n*n,E=(w*T-w*S-T*M)/(w*S+T*M);E<0&&(E=0);var b=(s===o?-1:1)*ia(E),x=b*(t*p/n),y=b*-(n*m/t),C=(r+a)/2,L=(e+l)/2,N=C+(u*x-h*y),F=L+(h*x+u*y),z=(m-x)/t,O=(p-y)/n,H=(-m-x)/t,V=(-p-y)/n,j=z*z+O*O,P=(O<0?-1:1)*Math.acos(z/ia(j)),te=(z*V-O*H<0?-1:1)*Math.acos((z*H+O*V)/ia(j*(H*H+V*V)));isNaN(te)&&(te=f),!o&&te>0?te-=d:o&&te<0&&(te+=d),P%=d,te%=d;var Te=Math.ceil(wa(te)/(d/4)),we=[],q=te/Te,ne=4/3*ac(q/2)/(1+lc(q/2)),fe=u*t,oe=h*t,xe=h*-n,Be=u*n,de;for(de=0;de<Te;de++)i=P+de*q,m=lc(i),p=ac(i),z=lc(i+=q),O=ac(i),we.push(m-ne*p,p+ne*m,z+ne*O,O-ne*z,z,O);for(de=0;de<we.length;de+=2)m=we[de],p=we[de+1],we[de]=m*fe+p*xe+N,we[de+1]=m*oe+p*Be+F;return we[de-2]=a,we[de-1]=l,we}}function ww(r){var e=(r+"").replace(yw,function(x){var y=+x;return y<1e-4&&y>-1e-4?0:y}).match(xw)||[],t=[],n=0,i=0,s=2/3,o=e.length,a=0,l="ERROR: malformed path: "+r,c,u,h,f,d,g,_,m,p,M,S,v,w,T,E,b=function(y,C,L,N){M=(L-y)/3,S=(N-C)/3,_.push(y+M,C+S,L-M,N-S,L,N)};if(!r||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(w=d,isNaN(e[c])?(d=e[c].toUpperCase(),g=d!==e[c]):c--,h=+e[c+1],f=+e[c+2],g&&(h+=n,f+=i),c||(m=h,p=f),d==="M")_&&(_.length<8?t.length-=1:a+=_.length),n=m=h,i=p=f,_=[h,f],t.push(_),c+=2,d="L";else if(d==="C")_||(_=[0,0]),g||(n=i=0),_.push(h,f,n+e[c+3]*1,i+e[c+4]*1,n+=e[c+5]*1,i+=e[c+6]*1),c+=6;else if(d==="S")M=n,S=i,(w==="C"||w==="S")&&(M+=n-_[_.length-4],S+=i-_[_.length-3]),g||(n=i=0),_.push(M,S,h,f,n+=e[c+3]*1,i+=e[c+4]*1),c+=4;else if(d==="Q")M=n+(h-n)*s,S=i+(f-i)*s,g||(n=i=0),n+=e[c+3]*1,i+=e[c+4]*1,_.push(M,S,n+(h-n)*s,i+(f-i)*s,n,i),c+=4;else if(d==="T")M=n-_[_.length-4],S=i-_[_.length-3],_.push(n+M,i+S,h+(n+M*1.5-h)*s,f+(i+S*1.5-f)*s,n=h,i=f),c+=2;else if(d==="H")b(n,i,n=h,i),c+=1;else if(d==="V")b(n,i,n,i=h+(g?i-n:0)),c+=1;else if(d==="L"||d==="Z")d==="Z"&&(h=m,f=p,_.closed=!0),(d==="L"||wa(n-h)>.5||wa(i-f)>.5)&&(b(n,i,h,f),d==="L"&&(c+=2)),n=h,i=f;else if(d==="A"){if(T=e[c+4],E=e[c+5],M=e[c+6],S=e[c+7],u=7,T.length>1&&(T.length<3?(S=M,M=E,u--):(S=E,M=T.substr(2),u-=2),E=T.charAt(1),T=T.charAt(0)),v=Ew(n,i,+e[c+1],+e[c+2],+e[c+3],+T,+E,(g?n:0)+M*1,(g?i:0)+S*1),c+=u,v)for(u=0;u<v.length;u++)_.push(v[u]);n=_[_.length-2],i=_[_.length-1]}else console.log(l);return c=_.length,c<6?(t.pop(),c=0):_[0]===_[c-2]&&_[1]===_[c-1]&&(_.closed=!0),t.totalPoints=a+c,t}function bw(r){Mw(r[0])&&(r=[r]);var e="",t=r.length,n,i,s,o;for(i=0;i<t;i++){for(o=r[i],e+="M"+Pr(o[0])+","+Pr(o[1])+" C",n=o.length,s=2;s<n;s++)e+=Pr(o[s++])+","+Pr(o[s++])+" "+Pr(o[s++])+","+Pr(o[s++])+" "+Pr(o[s++])+","+Pr(o[s])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var On,_0,v0=function(){return On||typeof window<"u"&&(On=window.gsap)&&On.registerPlugin&&On},Km=function(){On=v0(),On?(On.registerEase("_CE",Bo.create),_0=1):console.warn("Please gsap.registerPlugin(CustomEase)")},Aw=1e20,cc=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},Rw=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,Cw=/[cLlsSaAhHvVtTqQ]/g,Pw=function(e){var t=e.length,n=Aw,i;for(i=1;i<t;i+=6)+e[i]<n&&(n=+e[i]);return n},Dw=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var i=+e[0]*-1,s=-n,o=e.length,a=1/(+e[o-2]+i),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?Pw(e)+s:+e[o-1]+s),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+i)*a,e[c+1]=(+e[c+1]+s)*l},Lw=function r(e,t,n,i,s,o,a,l,c,u,h){var f=(e+n)/2,d=(t+i)/2,g=(n+s)/2,_=(i+o)/2,m=(s+a)/2,p=(o+l)/2,M=(f+g)/2,S=(d+_)/2,v=(g+m)/2,w=(_+p)/2,T=(M+v)/2,E=(S+w)/2,b=a-e,x=l-t,y=Math.abs((n-a)*x-(i-l)*b),C=Math.abs((s-a)*x-(o-l)*b),L;return u||(u=[{x:e,y:t},{x:a,y:l}],h=1),u.splice(h||u.length-1,0,{x:T,y:E}),(y+C)*(y+C)>c*(b*b+x*x)&&(L=u.length,r(e,t,f,d,M,S,T,E,c,u,h),r(T,E,v,w,m,p,a,l,c,u,h+1+(u.length-L))),u},Bo=function(){function r(t,n,i){_0||Km(),this.id=t,this.setData(n,i)}var e=r.prototype;return e.setData=function(n,i){i=i||{},n=n||"0,0,1,1";var s=n.match(Rw),o=1,a=[],l=[],c=i.precision||1,u=c<=1,h,f,d,g,_,m,p,M,S;if(this.data=n,(Cw.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(s=ww(n)[0]),h=s.length,h===4)s.unshift(0,0),s.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[h-2]!=1)&&Dw(s,i.height,i.originY),this.segment=s,g=2;g<h;g+=6)f={x:+s[g-2],y:+s[g-1]},d={x:+s[g+4],y:+s[g+5]},a.push(f,d),Lw(f.x,f.y,+s[g],+s[g+1],+s[g+2],+s[g+3],d.x,d.y,1/(c*2e5),a,a.length-1);for(h=a.length,g=0;g<h;g++)p=a[g],M=a[g-1]||p,(p.x>M.x||M.y!==p.y&&M.x===p.x||p===M)&&p.x<=1?(M.cx=p.x-M.x,M.cy=p.y-M.y,M.n=p,M.nx=p.x,u&&g>1&&Math.abs(M.cy/M.cx-a[g-2].cy/a[g-2].cx)>2&&(u=0),M.cx<o&&(M.cx?o=M.cx:(M.cx=.001,g===h-1&&(M.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(g--,1),h--);if(h=1/o+1|0,_=1/h,m=0,p=a[0],u){for(g=0;g<h;g++)S=g*_,p.nx<S&&(p=a[++m]),f=p.y+(S-p.x)/p.cx*p.cy,l[g]={x:S,cx:_,y:f,cy:0,nx:9},g&&(l[g-1].cy=f-l[g-1].y);m=a[a.length-1],l[h-1].cy=m.y-f,l[h-1].cx=m.x-l[l.length-1].x}else{for(g=0;g<h;g++)p.nx<g*_&&(p=a[++m]),l[g]=p;m<a.length-1&&(l[g-1]=a[a.length-2])}return this.ease=function(v){var w=l[v*h|0]||l[h-1];return w.nx<v&&(w=w.n),w.y+(v-w.x)/w.cx*w.cy},this.ease.custom=this,this.id&&On&&On.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return r.getSVGData(this,n)},r.create=function(n,i,s){return new r(n,i,s).ease},r.register=function(n){On=n,Km()},r.get=function(n){return On.parseEase(n)},r.getSVGData=function(n,i){i=i||{};var s=i.width||100,o=i.height||100,a=i.x||0,l=(i.y||0)+o,c=On.utils.toArray(i.path)[0],u,h,f,d,g,_,m,p,M,S;if(i.invert&&(o=-o,l=0),typeof n=="string"&&(n=On.parseEase(n)),n.custom&&(n=n.custom),n instanceof r)u=bw(Tw([n.segment],s,0,0,-o,a,l));else{for(u=[a,l],m=Math.max(5,(i.precision||1)*200),d=1/m,m+=2,p=5/m,M=cc(a+d*s),S=cc(l+n(d)*-o),h=(S-l)/(M-a),f=2;f<m;f++)g=cc(a+f*d*s),_=cc(l+n(f*d)*-o),(Math.abs((_-S)/(g-M)-h)>p||f===m-1)&&(u.push(M,S),h=(_-S)/(g-M)),M=g,S=_;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},r}();Bo.version="3.13.0";Bo.headless=!0;v0()&&On.registerPlugin(Bo);at.registerPlugin(Bo);Bo.create("lele","0.7, 0, 0.1, 1");let mr=!1,Zm=document.querySelector(".PageShiftButton1"),jm=document.querySelector(".PageShiftButton2"),Qm=document.querySelector(".PageShiftButton3");Zm.addEventListener("click",()=>{if(mr)return;mr=!0;let r=document.querySelector(".transitionButtons .bgButton"),e=document.querySelector(".transitionButtons").getBoundingClientRect(),t=Zm.getBoundingClientRect();at.to(r,{left:t.left-e.left+"px",onComplete:()=>{mr=!1}})});jm.addEventListener("click",()=>{if(mr)return;mr=!0;let r=document.querySelector(".transitionButtons .bgButton"),e=document.querySelector(".transitionButtons").getBoundingClientRect(),t=jm.getBoundingClientRect();Uw(),at.to(r,{left:t.left-e.left+"px",onComplete:()=>{mr=!1}})});Qm.addEventListener("click",()=>{if(mr)return;mr=!0;let r=document.querySelector(".transitionButtons .bgButton"),e=document.querySelector(".transitionButtons").getBoundingClientRect(),t=Qm.getBoundingClientRect();at.to(r,{left:t.left-e.left+"px",onComplete:()=>{mr=!1}})});document.querySelector(".Home");document.querySelector(".work");let eg=document.querySelector(".about"),tg=document.querySelector(".transition-center");function Uw(){at.timeline(),at.fromTo(tg,{width:"50vw",height:0,top:"70%"},{width:"60vw",height:"60vh",top:"50%",duration:1.25,ease:"lele",onComplete:()=>{eg.style.zIndex=80,at.fromTo(eg,{y:"100%",width:"60vw"},{y:"0%",width:"100vw",duration:.5}),at.to(tg,{width:"100vw",height:"100vh",duration:.5,ease:"power2.in"})}})}
