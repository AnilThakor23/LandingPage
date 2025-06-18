(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Du="177",jm=0,Ph=1,Km=2,kd=1,Zm=2,pi=3,Yi=0,on=1,xn=2,Tt=0,Si=1,Ec=2,Dh=3,Uh=4,Qm=5,vi=100,$m=101,eg=102,tg=103,ng=104,ig=200,rg=201,sg=202,ag=203,ta=204,na=205,og=206,lg=207,cg=208,ug=209,hg=210,fg=211,dg=212,pg=213,mg=214,wc=0,Ac=1,Rc=2,as=3,Cc=4,Pc=5,Dc=6,Uc=7,zd=0,gg=1,_g=2,Wi=0,vg=1,xg=2,yg=3,Sg=4,Mg=5,Tg=6,bg=7,Gd=300,os=301,ls=302,No=303,Lc=304,Zo=306,Oo=1e3,ni=1001,Ic=1002,ft=1003,Eg=1004,Ca=1005,It=1006,vl=1007,zi=1008,Ti=1009,Vd=1010,Hd=1011,cs=1012,Uu=1013,yr=1014,Ln=1015,Jt=1016,Lu=1017,Iu=1018,ia=1020,Wd=35902,Xd=1021,qd=1022,Jn=1023,ra=1026,sa=1027,Yd=1028,Fu=1029,Jd=1030,Nu=1031,Ou=1033,bo=33776,Eo=33777,wo=33778,Ao=33779,Fc=35840,Nc=35841,Oc=35842,Bc=35843,kc=36196,zc=37492,Gc=37496,Vc=37808,Hc=37809,Wc=37810,Xc=37811,qc=37812,Yc=37813,Jc=37814,jc=37815,Kc=37816,Zc=37817,Qc=37818,$c=37819,eu=37820,tu=37821,Ro=36492,nu=36494,iu=36495,jd=36283,ru=36284,su=36285,au=36286,wg=3200,Kd=3201,Bu=0,Ag=1,ki="",Dn="srgb",Sr="srgb-linear",Bo="linear",rt="srgb",Dr=7680,Lh=519,Rg=512,Cg=513,Pg=514,Zd=515,Dg=516,Ug=517,Lg=518,Ig=519,Ih=35044,Fh="300 es",yi=2e3,ko=2001;class xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xl=Math.PI/180,ou=180/Math.PI;function ma(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function $e(s,e,t){return Math.max(e,Math.min(t,s))}function Fg(s,e){return(s%e+e)%e}function yl(s,e,t){return(1-t)*s+t*e}function Is(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function an(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let ga=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],d=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-o;const m=l*f+c*d+u*_+h*g,S=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const E=Math.sqrt(M),A=Math.atan2(E,m*S);p=Math.sin(p*A)/E,o=Math.sin(o*A)/E}const x=o*S;if(l=l*p+f*x,c=c*p+d*x,u=u*p+_*x,h=h*p+g*x,p===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-o*d,e[t+2]=c*_+u*d+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),d=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ie=class Qd{constructor(e=0,t=0,n=0){Qd.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Sl=new ie,Nh=new ga;let Ke=class $d{constructor(e,t,n,i,r,a,o,l,c){$d.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],S=i[1],M=i[4],x=i[7],E=i[2],A=i[5],T=i[8];return r[0]=a*g+o*S+l*E,r[3]=a*p+o*M+l*A,r[6]=a*m+o*x+l*T,r[1]=c*g+u*S+h*E,r[4]=c*p+u*M+h*A,r[7]=c*m+u*x+h*T,r[2]=f*g+d*S+_*E,r[5]=f*p+d*M+_*A,r[8]=f*m+d*x+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ml.makeScale(e,t)),this}rotate(e){return this.premultiply(Ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const Ml=new Ke;function ep(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function zo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ng(){const s=zo("canvas");return s.style.display="block",s}const Oh={};function $r(s){s in Oh||(Oh[s]=!0,console.warn(s))}function Og(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Bg(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kg(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Bh=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kh=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zg(){const s={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ki?Bo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return $r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return $r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Sr]:{primaries:e,whitePoint:n,transfer:Bo,toXYZ:Bh,fromXYZ:kh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Bh,fromXYZ:kh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),s}const it=zg();function Mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ur;class Gg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ur===void 0&&(Ur=zo("canvas")),Ur.width=e.width,Ur.height=e.height;const i=Ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ur}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vg=0;class ku{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=ma(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Tl(i[a].image)):r.push(Tl(i[a]))}else r=Tl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Tl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hg=0;const bl=new ie;class zt extends xs{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=ni,i=ni,r=It,a=zi,o=Jn,l=Ti,c=zt.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=ma(),this.name="",this.source=new ku(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bl).x}get height(){return this.source.getSize(bl).y}get depth(){return this.source.getSize(bl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oo:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oo:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Gd;zt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(d+1)/2,E=(m+1)/2,A=(u+f)/4,T=(h+g)/4,b=(_+p)/4;return M>x&&M>E?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=T/n):x>E?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=b/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=T/r,i=b/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(h-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wg extends xs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new zt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ku(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qt extends Wg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tp extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xg extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Da.subVectors(this.max,Fs),Lr.subVectors(e.a,Fs),Ir.subVectors(e.b,Fs),Fr.subVectors(e.c,Fs),Pi.subVectors(Ir,Lr),Di.subVectors(Fr,Ir),er.subVectors(Lr,Fr);let t=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-er.z,er.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,er.z,0,-er.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-er.y,er.x,0];return!El(t,Lr,Ir,Fr,Da)||(t=[1,0,0,0,1,0,0,0,1],!El(t,Lr,Ir,Fr,Da))?!1:(Ua.crossVectors(Pi,Di),t=[Ua.x,Ua.y,Ua.z],El(t,Lr,Ir,Fr,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Hn=new ie,Pa=new br,Lr=new ie,Ir=new ie,Fr=new ie,Pi=new ie,Di=new ie,er=new ie,Fs=new ie,Da=new ie,Ua=new ie,tr=new ie;function El(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){tr.fromArray(s,r);const o=i.x*Math.abs(tr.x)+i.y*Math.abs(tr.y)+i.z*Math.abs(tr.z),l=e.dot(tr),c=t.dot(tr),u=n.dot(tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qg=new br,Ns=new ie,wl=new ie;class _a{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ns,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(wl)),this.expandByPoint(Ns.copy(e.center).sub(wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const li=new ie,Al=new ie,La=new ie,Ui=new ie,Rl=new ie,Ia=new ie,Cl=new ie;let np=class{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Al.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Al);const r=e.distanceTo(t)*.5,a=-this.direction.dot(La),o=Ui.dot(this.direction),l=-Ui.dot(La),c=Ui.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Al).addScaledVector(La,f),d}intersectSphere(e,t){li.subVectors(e.center,this.origin);const n=li.dot(this.direction),i=li.dot(li)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,i,r){Rl.subVectors(t,e),Ia.subVectors(n,e),Cl.crossVectors(Rl,Ia);let a=this.direction.dot(Cl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ui.subVectors(this.origin,e);const l=o*this.direction.dot(Ia.crossVectors(Ui,Ia));if(l<0)return null;const c=o*this.direction.dot(Rl.cross(Ui));if(c<0||l+c>a)return null;const u=-o*Ui.dot(Cl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},St=class lu{constructor(e,t,n,i,r,a,o,l,c,u,h,f,d,_,g,p){lu.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,f,d,_,g,p)}set(e,t,n,i,r,a,o,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lu().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Nr.setFromMatrixColumn(e,0).length(),r=1/Nr.setFromMatrixColumn(e,1).length(),a=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=a*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yg,e,Jg)}lookAt(e,t,n){const i=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Li.crossVectors(n,gn),Li.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Li.crossVectors(n,gn)),Li.normalize(),Fa.crossVectors(gn,Li),i[0]=Li.x,i[4]=Fa.x,i[8]=gn.x,i[1]=Li.y,i[5]=Fa.y,i[9]=gn.y,i[2]=Li.z,i[6]=Fa.z,i[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],S=n[3],M=n[7],x=n[11],E=n[15],A=i[0],T=i[4],b=i[8],v=i[12],y=i[1],C=i[5],R=i[9],U=i[13],L=i[2],B=i[6],I=i[10],W=i[14],H=i[3],Y=i[7],X=i[11],F=i[15];return r[0]=a*A+o*y+l*L+c*H,r[4]=a*T+o*C+l*B+c*Y,r[8]=a*b+o*R+l*I+c*X,r[12]=a*v+o*U+l*W+c*F,r[1]=u*A+h*y+f*L+d*H,r[5]=u*T+h*C+f*B+d*Y,r[9]=u*b+h*R+f*I+d*X,r[13]=u*v+h*U+f*W+d*F,r[2]=_*A+g*y+p*L+m*H,r[6]=_*T+g*C+p*B+m*Y,r[10]=_*b+g*R+p*I+m*X,r[14]=_*v+g*U+p*W+m*F,r[3]=S*A+M*y+x*L+E*H,r[7]=S*T+M*C+x*B+E*Y,r[11]=S*b+M*R+x*I+E*X,r[15]=S*v+M*U+x*W+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*d-n*l*d)+g*(+t*l*d-t*c*f+r*a*f-i*a*d+i*c*u-r*l*u)+p*(+t*c*h-t*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+m*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],S=h*p*c-g*f*c+g*l*d-o*p*d-h*l*m+o*f*m,M=_*f*c-u*p*c-_*l*d+a*p*d+u*l*m-a*f*m,x=u*g*c-_*h*c+_*o*d-a*g*d-u*o*m+a*h*m,E=_*h*l-u*g*l-_*o*f+a*g*f+u*o*p-a*h*p,A=t*S+n*M+i*x+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=S*T,e[1]=(g*f*r-h*p*r-g*i*d+n*p*d+h*i*m-n*f*m)*T,e[2]=(o*p*r-g*l*r+g*i*c-n*p*c-o*i*m+n*l*m)*T,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*d-n*l*d)*T,e[4]=M*T,e[5]=(u*p*r-_*f*r+_*i*d-t*p*d-u*i*m+t*f*m)*T,e[6]=(_*l*r-a*p*r-_*i*c+t*p*c+a*i*m-t*l*m)*T,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*d+t*l*d)*T,e[8]=x*T,e[9]=(_*h*r-u*g*r-_*n*d+t*g*d+u*n*m-t*h*m)*T,e[10]=(a*g*r-_*o*r+_*n*c-t*g*c-a*n*m+t*o*m)*T,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*d-t*o*d)*T,e[12]=E*T,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*p+t*h*p)*T,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*p-t*o*p)*T,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,_=r*h,g=a*u,p=a*h,m=o*h,S=l*c,M=l*u,x=l*h,E=n.x,A=n.y,T=n.z;return i[0]=(1-(g+m))*E,i[1]=(d+x)*E,i[2]=(_-M)*E,i[3]=0,i[4]=(d-x)*A,i[5]=(1-(f+m))*A,i[6]=(p+S)*A,i[7]=0,i[8]=(_+M)*T,i[9]=(p-S)*T,i[10]=(1-(f+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Nr.set(i[0],i[1],i[2]).length();const a=Nr.set(i[4],i[5],i[6]).length(),o=Nr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Wn.copy(this);const c=1/r,u=1/a,h=1/o;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,t.setFromRotationMatrix(Wn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=yi){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(o===yi)d=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ko)d=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=yi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-r),f=(t+e)*c,d=(n+i)*u;let _,g;if(o===yi)_=(a+r)*h,g=-2*h;else if(o===ko)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};const Nr=new ie,Wn=new St,Yg=new ie(0,0,0),Jg=new ie(1,1,1),Li=new ie,Fa=new ie,gn=new ie,zh=new St,Gh=new ga;class si{constructor(e=0,t=0,n=0,i=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class ip{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jg=0;const Vh=new ie,Or=new ga,ci=new St,Na=new ie,Os=new ie,Kg=new ie,Zg=new ga,Hh=new ie(1,0,0),Wh=new ie(0,1,0),Xh=new ie(0,0,1),qh={type:"added"},Qg={type:"removed"},Br={type:"childadded",child:null},Pl={type:"childremoved",child:null};class en extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new ie,t=new si,n=new ga,i=new ie(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new Ke}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(Hh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Na.copy(e):Na.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Os,Na,this.up):ci.lookAt(Na,Os,this.up),this.quaternion.setFromRotationMatrix(ci),i&&(ci.extractRotation(i.matrixWorld),Or.setFromRotationMatrix(ci),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),Br.child=e,this.dispatchEvent(Br),Br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qg),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,Kg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Zg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}en.DEFAULT_UP=new ie(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new ie,ui=new ie,Dl=new ie,hi=new ie,kr=new ie,zr=new ie,Yh=new ie,Ul=new ie,Ll=new ie,Il=new ie,Fl=new mt,Nl=new mt,Ol=new mt;class Yn{constructor(e=new ie,t=new ie,n=new ie){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xn.subVectors(e,t),i.cross(Xn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xn.subVectors(i,t),ui.subVectors(n,t),Dl.subVectors(e,t);const a=Xn.dot(Xn),o=Xn.dot(ui),l=Xn.dot(Dl),c=ui.dot(ui),u=ui.dot(Dl),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Fl.setScalar(0),Nl.setScalar(0),Ol.setScalar(0),Fl.fromBufferAttribute(e,t),Nl.fromBufferAttribute(e,n),Ol.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Fl,r.x),a.addScaledVector(Nl,r.y),a.addScaledVector(Ol,r.z),a}static isFrontFacing(e,t,n,i){return Xn.subVectors(n,t),ui.subVectors(e,t),Xn.cross(ui).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Xn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;kr.subVectors(i,n),zr.subVectors(r,n),Ul.subVectors(e,n);const l=kr.dot(Ul),c=zr.dot(Ul);if(l<=0&&c<=0)return t.copy(n);Ll.subVectors(e,i);const u=kr.dot(Ll),h=zr.dot(Ll);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(kr,a);Il.subVectors(e,r);const d=kr.dot(Il),_=zr.dot(Il);if(_>=0&&d<=_)return t.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(zr,o);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return Yh.subVectors(r,i),o=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Yh,o);const m=1/(p+g+f);return a=g*m,o=f*m,t.copy(n).addScaledVector(kr,a).addScaledVector(zr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function Bl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=Fg(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Bl(a,r,e+1/3),this.g=Bl(a,r,e),this.b=Bl(a,r,e-1/3)}return it.colorSpaceToWorking(this,i),this}setStyle(e,t=Dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const n=rp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return it.workingToColorSpace(Xt.copy(this),e),Math.round($e(Xt.r*255,0,255))*65536+Math.round($e(Xt.g*255,0,255))*256+Math.round($e(Xt.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,r=Xt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Dn){it.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Oa);const n=yl(Ii.h,Oa.h,t),i=yl(Ii.s,Oa.s,t),r=yl(Ii.l,Oa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Je;Je.NAMES=rp;let $g=0;class Er extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=Si,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=na,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ta&&(n.blendSrc=this.blendSrc),this.blendDst!==na&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mr extends Er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xi=e_();function e_(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function t_(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=$e(s,-65504,65504),xi.floatView[0]=s;const e=xi.uint32View[0],t=e>>23&511;return xi.baseTable[t]+((e&8388607)>>xi.shiftTable[t])}function n_(s){const e=s>>10;return xi.uint32View[0]=xi.mantissaTable[xi.offsetTable[e]+(s&1023)]+xi.exponentTable[e],xi.floatView[0]}class Ba{static toHalfFloat(e){return t_(e)}static fromHalfFloat(e){return n_(e)}}const Mt=new ie,ka=new Ye;let i_=0;class Mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ih,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Is(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Is(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Is(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Is(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ih&&(e.usage=this.usage),e}}class sp extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ap extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class On extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let r_=0;const An=new St,kl=new en,Gr=new ie,_n=new br,Bs=new br,Lt=new ie;class Bn extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ep(e)?ap:sp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return kl.lookAt(e),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new On(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(_n.min,Bs.min),_n.expandByPoint(Lt),Lt.addVectors(_n.max,Bs.max),_n.expandByPoint(Lt)):(_n.expandByPoint(Bs.min),_n.expandByPoint(Bs.max))}_n.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Lt.fromBufferAttribute(o,c),l&&(Gr.fromBufferAttribute(e,c),Lt.add(Gr)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<n.count;b++)o[b]=new ie,l[b]=new ie;const c=new ie,u=new ie,h=new ie,f=new Ye,d=new Ye,_=new Ye,g=new ie,p=new ie;function m(b,v,y){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,b),d.fromBufferAttribute(r,v),_.fromBufferAttribute(r,y),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const C=1/(d.x*_.y-_.x*d.y);isFinite(C)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(C),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(C),o[b].add(g),o[v].add(g),o[y].add(g),l[b].add(p),l[v].add(p),l[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let b=0,v=S.length;b<v;++b){const y=S[b],C=y.start,R=y.count;for(let U=C,L=C+R;U<L;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const M=new ie,x=new ie,E=new ie,A=new ie;function T(b){E.fromBufferAttribute(i,b),A.copy(E);const v=o[b];M.copy(v),M.sub(E.multiplyScalar(E.dot(v))).normalize(),x.crossVectors(A,v);const C=x.dot(l[b])<0?-1:1;a.setXYZW(b,M.x,M.y,M.z,C)}for(let b=0,v=S.length;b<v;++b){const y=S[b],C=y.start,R=y.count;for(let U=C,L=C+R;U<L;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new ie,r=new ie,a=new ie,o=new ie,l=new ie,c=new ie,u=new ie,h=new ie;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new Mn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jh=new St,nr=new np,za=new _a,jh=new ie,Ga=new ie,Va=new ie,Ha=new ie,zl=new ie,Wa=new ie,Kh=new ie,Xa=new ie;class $t extends en{constructor(e=new Bn,t=new Mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(zl.fromBufferAttribute(h,e),a?Wa.addScaledVector(zl,u):Wa.addScaledVector(zl.sub(t),u))}t.add(Wa)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),nr.copy(e.ray).recast(e.near),!(za.containsPoint(nr.origin)===!1&&(nr.intersectSphere(za,jh)===null||nr.origin.distanceToSquared(jh)>(e.far-e.near)**2))&&(Jh.copy(r).invert(),nr.copy(e.ray).applyMatrix4(Jh),!(n.boundingBox!==null&&nr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,nr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],S=Math.max(p.start,d.start),M=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let x=S,E=M;x<E;x+=3){const A=o.getX(x),T=o.getX(x+1),b=o.getX(x+2);i=qa(this,m,e,n,c,u,h,A,T,b),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=o.getX(p),M=o.getX(p+1),x=o.getX(p+2);i=qa(this,a,e,n,c,u,h,S,M,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],S=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=S,E=M;x<E;x+=3){const A=x,T=x+1,b=x+2;i=qa(this,m,e,n,c,u,h,A,T,b),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=p,M=p+1,x=p+2;i=qa(this,a,e,n,c,u,h,S,M,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function s_(s,e,t,n,i,r,a,o){let l;if(e.side===on?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Yi,o),l===null)return null;Xa.copy(o),Xa.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Xa);return c<t.near||c>t.far?null:{distance:c,point:Xa.clone(),object:s}}function qa(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ga),s.getVertexPosition(l,Va),s.getVertexPosition(c,Ha);const u=s_(s,e,t,n,Ga,Va,Ha,Kh);if(u){const h=new ie;Yn.getBarycoord(Kh,Ga,Va,Ha,h),i&&(u.uv=Yn.getInterpolatedAttribute(i,o,l,c,h,new Ye)),r&&(u.uv1=Yn.getInterpolatedAttribute(r,o,l,c,h,new Ye)),a&&(u.normal=Yn.getInterpolatedAttribute(a,o,l,c,h,new ie),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new ie,materialIndex:0};Yn.getNormal(Ga,Va,Ha,f.normal),u.face=f,u.barycoord=h}return u}class va extends Bn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new On(c,3)),this.setAttribute("normal",new On(u,3)),this.setAttribute("uv",new On(h,2));function _(g,p,m,S,M,x,E,A,T,b,v){const y=x/T,C=E/b,R=x/2,U=E/2,L=A/2,B=T+1,I=b+1;let W=0,H=0;const Y=new ie;for(let X=0;X<I;X++){const F=X*C-U;for(let V=0;V<B;V++){const Z=V*y-R;Y[g]=Z*S,Y[p]=F*M,Y[m]=L,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[p]=0,Y[m]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(V/T),h.push(1-X/b),W+=1}}for(let X=0;X<b;X++)for(let F=0;F<T;F++){const V=f+F+B*X,Z=f+F+B*(X+1),N=f+(F+1)+B*(X+1),k=f+(F+1)+B*X;l.push(V,Z,k),l.push(Z,N,k),H+=6}o.addGroup(d,H,v),d+=H,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Zt(s){const e={};for(let t=0;t<s.length;t++){const n=us(s[t]);for(const i in n)e[i]=n[i]}return e}function a_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function op(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const ei={clone:us,merge:Zt};var o_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wt extends Er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o_,this.fragmentShader=l_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=a_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lp extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new ie,Zh=new Ye,Qh=new Ye;class Un extends lp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ou*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ou*2*Math.atan(Math.tan(xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,Zh,Qh),t.subVectors(Qh,Zh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vr=-90,Hr=1;class c_ extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Un(Vr,Hr,e,t);i.layers=this.layers,this.add(i);const r=new Un(Vr,Hr,e,t);r.layers=this.layers,this.add(r);const a=new Un(Vr,Hr,e,t);a.layers=this.layers,this.add(a);const o=new Un(Vr,Hr,e,t);o.layers=this.layers,this.add(o);const l=new Un(Vr,Hr,e,t);l.layers=this.layers,this.add(l);const c=new Un(Vr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class cp extends zt{constructor(e=[],t=os,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class u_ extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new cp(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new va(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Tt});r.uniforms.tEquirect.value=t;const a=new $t(i,r),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=It),new c_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class Ya extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h_={type:"move"};class Gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(h_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ya;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class f_ extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class d_ extends zt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=ft,u=ft,h,f){super(null,a,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class p_ extends Mn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vl=new ie,m_=new ie,g_=new Ke;class cr{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Vl.subVectors(n,t).cross(m_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||g_.getNormalMatrix(e),i=this.coplanarPoint(Vl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new _a,Ja=new ie;class up{constructor(e=new cr,t=new cr,n=new cr,i=new cr,r=new cr,a=new cr){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],S=i[13],M=i[14],x=i[15];if(n[0].setComponents(l-r,f-c,p-d,x-m).normalize(),n[1].setComponents(l+r,f+c,p+d,x+m).normalize(),n[2].setComponents(l+a,f+u,p+_,x+S).normalize(),n[3].setComponents(l-a,f-u,p-_,x-S).normalize(),n[4].setComponents(l-o,f-h,p-g,x-M).normalize(),t===yi)n[5].setComponents(l+o,f+h,p+g,x+M).normalize();else if(t===ko)n[5].setComponents(o,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ja.x=i.normal.x>0?e.max.x:e.min.x,Ja.y=i.normal.y>0?e.max.y:e.min.y,Ja.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class __ extends Er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $h=new St,cu=new np,ja=new _a,Ka=new ie;class v_ extends en{constructor(e=new Bn,t=new __){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(i),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;$h.copy(i).invert(),cu.copy(e.ray).applyMatrix4($h);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);Ka.fromBufferAttribute(h,p),ef(Ka,p,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=f,g=d;_<g;_++)Ka.fromBufferAttribute(h,_),ef(Ka,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ef(s,e,t,n,i,r,a){const o=cu.distanceSqToPoint(s);if(o<t){const l=new ie;cu.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class x_ extends zt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zu extends zt{constructor(e,t,n=yr,i,r,a,o=ft,l=ft,c,u=ra,h=1){if(u!==ra&&u!==sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ku(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gu extends Bn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],d=[];let _=0;const g=[],p=n/2;let m=0;S(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new On(h,3)),this.setAttribute("normal",new On(f,3)),this.setAttribute("uv",new On(d,2));function S(){const x=new ie,E=new ie;let A=0;const T=(t-e)/n;for(let b=0;b<=r;b++){const v=[],y=b/r,C=y*(t-e)+e;for(let R=0;R<=i;R++){const U=R/i,L=U*l+o,B=Math.sin(L),I=Math.cos(L);E.x=C*B,E.y=-y*n+p,E.z=C*I,h.push(E.x,E.y,E.z),x.set(B,T,I).normalize(),f.push(x.x,x.y,x.z),d.push(U,1-y),v.push(_++)}g.push(v)}for(let b=0;b<i;b++)for(let v=0;v<r;v++){const y=g[v][b],C=g[v+1][b],R=g[v+1][b+1],U=g[v][b+1];(e>0||v!==0)&&(u.push(y,C,U),A+=3),(t>0||v!==r-1)&&(u.push(C,R,U),A+=3)}c.addGroup(m,A,0),m+=A}function M(x){const E=_,A=new Ye,T=new ie;let b=0;const v=x===!0?e:t,y=x===!0?1:-1;for(let R=1;R<=i;R++)h.push(0,p*y,0),f.push(0,y,0),d.push(.5,.5),_++;const C=_;for(let R=0;R<=i;R++){const L=R/i*l+o,B=Math.cos(L),I=Math.sin(L);T.x=v*I,T.y=p*y,T.z=v*B,h.push(T.x,T.y,T.z),f.push(0,y,0),A.x=B*.5+.5,A.y=I*.5*y+.5,d.push(A.x,A.y),_++}for(let R=0;R<i;R++){const U=E+R,L=C+R;x===!0?u.push(L,L+1,U):u.push(L+1,L,U),b+=3}c.addGroup(m,b,x===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qi extends Bn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const S=m*f-a;for(let M=0;M<c;M++){const x=M*h-r;_.push(x,-S,0),g.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const M=S+c*m,x=S+c*(m+1),E=S+1+c*(m+1),A=S+1+c*m;d.push(M,x,A),d.push(x,E,A)}this.setIndex(d),this.setAttribute("position",new On(_,3)),this.setAttribute("normal",new On(g,3)),this.setAttribute("uv",new On(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.widthSegments,e.heightSegments)}}class hp extends Er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bu,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class y_ extends Er{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bu,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class fp extends Er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dp extends Er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tf={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class S_{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const M_=new S_;class Vu{constructor(e){this.manager=e!==void 0?e:M_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vu.DEFAULT_MATERIAL_NAME="__DEFAULT";const fi={};class T_ extends Error{constructor(e,t){super(e),this.response=t}}class b_ extends Vu{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=tf.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:n,onError:i});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=fi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){S();function S(){h.read().then(({done:M,value:x})=>{if(M)m.close();else{g+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let A=0,T=u.length;A<T;A++){const b=u[A];b.onProgress&&b.onProgress(E)}m.enqueue(x),S()}},M=>{m.error(M)})}}});return new Response(p)}else throw new T_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{tf.add(e,c);const u=fi[e];delete fi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=fi[e];if(u===void 0)throw this.manager.itemError(e),c;delete fi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class E_ extends Vu{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new d_,o=new b_(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:ni,a.wrapT=c.wrapT!==void 0?c.wrapT:ni,a.magFilter=c.magFilter!==void 0?c.magFilter:It,a.minFilter=c.minFilter!==void 0?c.minFilter:It,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=zi),c.mipmapCount===1&&(a.minFilter=It),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class w_ extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class pp extends lp{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class A_ extends w_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class R_ extends Bn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class C_ extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class mp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nf(){return performance.now()}function rf(s,e,t,n){const i=P_(n);switch(t){case Xd:return s*e;case Yd:return s*e/i.components*i.byteLength;case Fu:return s*e/i.components*i.byteLength;case Jd:return s*e*2/i.components*i.byteLength;case Nu:return s*e*2/i.components*i.byteLength;case qd:return s*e*3/i.components*i.byteLength;case Jn:return s*e*4/i.components*i.byteLength;case Ou:return s*e*4/i.components*i.byteLength;case bo:case Eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wo:case Ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nc:case Bc:return Math.max(s,16)*Math.max(e,8)/4;case Fc:case Oc:return Math.max(s,8)*Math.max(e,8)/2;case kc:case zc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case qc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case jc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $c:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case eu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case tu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ro:case nu:case iu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jd:case ru:return Math.ceil(s/4)*Math.ceil(e/4)*8;case su:case au:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function P_(s){switch(s){case Ti:case Vd:return{byteLength:1,components:1};case cs:case Hd:case Jt:return{byteLength:2,components:1};case Lu:case Iu:return{byteLength:2,components:4};case yr:case Uu:case Ln:return{byteLength:4,components:1};case Wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Du}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Du);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gp(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function D_(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var U_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L_=`#ifdef USE_ALPHAHASH
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
#endif`,I_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B_=`#ifdef USE_AOMAP
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
#endif`,k_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z_=`#ifdef USE_BATCHING
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
#endif`,G_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X_=`#ifdef USE_IRIDESCENCE
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
#endif`,q_=`#ifdef USE_BUMPMAP
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
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,t0=`#define PI 3.141592653589793
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
} // validated`,n0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,i0=`vec3 transformedNormal = objectNormal;
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
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l0="gl_FragColor = linearToOutputTexel( gl_FragColor );",c0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x0=`#ifdef USE_GRADIENTMAP
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
}`,y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T0=`uniform bool receiveShadow;
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
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,E0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C0=`PhysicalMaterial material;
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
#endif`,P0=`struct PhysicalMaterial {
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
}`,D0=`
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G0=`#if defined( USE_POINTS_UV )
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
#endif`,V0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`#ifdef USE_MORPHTARGETS
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
#endif`,J0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ev=`#ifdef USE_NORMALMAP
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
#endif`,tv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,av=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ov=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gv=`float getShadowMask() {
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
}`,_v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vv=`#ifdef USE_SKINNING
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
#endif`,xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yv=`#ifdef USE_SKINNING
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
#endif`,Sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ev=`#ifdef USE_TRANSMISSION
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
#endif`,wv=`#ifdef USE_TRANSMISSION
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uv=`uniform sampler2D t2D;
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
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`#include <common>
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
}`,Bv=`#if DEPTH_PACKING == 3200
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
}`,kv=`#define DISTANCE
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
}`,zv=`#define DISTANCE
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
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`uniform float scale;
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
}`,Wv=`uniform vec3 diffuse;
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
}`,Xv=`#include <common>
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
}`,qv=`uniform vec3 diffuse;
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
}`,Yv=`#define LAMBERT
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
}`,Jv=`#define LAMBERT
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
}`,jv=`#define MATCAP
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
}`,Kv=`#define MATCAP
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
}`,Zv=`#define NORMAL
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
}`,Qv=`#define NORMAL
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
}`,$v=`#define PHONG
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
}`,ex=`#define PHONG
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
}`,tx=`#define STANDARD
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
}`,nx=`#define STANDARD
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
}`,ix=`#define TOON
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
}`,rx=`#define TOON
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
}`,sx=`uniform float size;
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
}`,ax=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,lx=`uniform vec3 color;
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
}`,cx=`uniform float rotation;
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
}`,ux=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:U_,alphahash_pars_fragment:L_,alphamap_fragment:I_,alphamap_pars_fragment:F_,alphatest_fragment:N_,alphatest_pars_fragment:O_,aomap_fragment:B_,aomap_pars_fragment:k_,batching_pars_vertex:z_,batching_vertex:G_,begin_vertex:V_,beginnormal_vertex:H_,bsdfs:W_,iridescence_fragment:X_,bumpmap_pars_fragment:q_,clipping_planes_fragment:Y_,clipping_planes_pars_fragment:J_,clipping_planes_pars_vertex:j_,clipping_planes_vertex:K_,color_fragment:Z_,color_pars_fragment:Q_,color_pars_vertex:$_,color_vertex:e0,common:t0,cube_uv_reflection_fragment:n0,defaultnormal_vertex:i0,displacementmap_pars_vertex:r0,displacementmap_vertex:s0,emissivemap_fragment:a0,emissivemap_pars_fragment:o0,colorspace_fragment:l0,colorspace_pars_fragment:c0,envmap_fragment:u0,envmap_common_pars_fragment:h0,envmap_pars_fragment:f0,envmap_pars_vertex:d0,envmap_physical_pars_fragment:b0,envmap_vertex:p0,fog_vertex:m0,fog_pars_vertex:g0,fog_fragment:_0,fog_pars_fragment:v0,gradientmap_pars_fragment:x0,lightmap_pars_fragment:y0,lights_lambert_fragment:S0,lights_lambert_pars_fragment:M0,lights_pars_begin:T0,lights_toon_fragment:E0,lights_toon_pars_fragment:w0,lights_phong_fragment:A0,lights_phong_pars_fragment:R0,lights_physical_fragment:C0,lights_physical_pars_fragment:P0,lights_fragment_begin:D0,lights_fragment_maps:U0,lights_fragment_end:L0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:F0,logdepthbuf_pars_vertex:N0,logdepthbuf_vertex:O0,map_fragment:B0,map_pars_fragment:k0,map_particle_fragment:z0,map_particle_pars_fragment:G0,metalnessmap_fragment:V0,metalnessmap_pars_fragment:H0,morphinstance_vertex:W0,morphcolor_vertex:X0,morphnormal_vertex:q0,morphtarget_pars_vertex:Y0,morphtarget_vertex:J0,normal_fragment_begin:j0,normal_fragment_maps:K0,normal_pars_fragment:Z0,normal_pars_vertex:Q0,normal_vertex:$0,normalmap_pars_fragment:ev,clearcoat_normal_fragment_begin:tv,clearcoat_normal_fragment_maps:nv,clearcoat_pars_fragment:iv,iridescence_pars_fragment:rv,opaque_fragment:sv,packing:av,premultiplied_alpha_fragment:ov,project_vertex:lv,dithering_fragment:cv,dithering_pars_fragment:uv,roughnessmap_fragment:hv,roughnessmap_pars_fragment:fv,shadowmap_pars_fragment:dv,shadowmap_pars_vertex:pv,shadowmap_vertex:mv,shadowmask_pars_fragment:gv,skinbase_vertex:_v,skinning_pars_vertex:vv,skinning_vertex:xv,skinnormal_vertex:yv,specularmap_fragment:Sv,specularmap_pars_fragment:Mv,tonemapping_fragment:Tv,tonemapping_pars_fragment:bv,transmission_fragment:Ev,transmission_pars_fragment:wv,uv_pars_fragment:Av,uv_pars_vertex:Rv,uv_vertex:Cv,worldpos_vertex:Pv,background_vert:Dv,background_frag:Uv,backgroundCube_vert:Lv,backgroundCube_frag:Iv,cube_vert:Fv,cube_frag:Nv,depth_vert:Ov,depth_frag:Bv,distanceRGBA_vert:kv,distanceRGBA_frag:zv,equirect_vert:Gv,equirect_frag:Vv,linedashed_vert:Hv,linedashed_frag:Wv,meshbasic_vert:Xv,meshbasic_frag:qv,meshlambert_vert:Yv,meshlambert_frag:Jv,meshmatcap_vert:jv,meshmatcap_frag:Kv,meshnormal_vert:Zv,meshnormal_frag:Qv,meshphong_vert:$v,meshphong_frag:ex,meshphysical_vert:tx,meshphysical_frag:nx,meshtoon_vert:ix,meshtoon_frag:rx,points_vert:sx,points_frag:ax,shadow_vert:ox,shadow_frag:lx,sprite_vert:cx,sprite_frag:ux},De={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},qn={basic:{uniforms:Zt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Zt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Je(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Zt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Zt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Zt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Je(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Zt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Zt([De.points,De.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Zt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Zt([De.common,De.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Zt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Zt([De.sprite,De.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Zt([De.common,De.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Zt([De.lights,De.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};qn.physical={uniforms:Zt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Za={r:0,b:0,g:0},rr=new si,hx=new St;function fx(s,e,t,n,i,r,a){const o=new Je(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function g(M){let x=!1;const E=_(M);E===null?m(o,l):E&&E.isColor&&(m(E,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(M,x){const E=_(x);E&&(E.isCubeTexture||E.mapping===Zo)?(u===void 0&&(u=new $t(new va(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:us(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),rr.copy(x.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hx.makeRotationFromEuler(rr)),u.material.toneMapped=it.getTransfer(E.colorSpace)!==rt,(h!==E||f!==E.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,d=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new $t(new Qi(2,2),new wt({name:"BackgroundMaterial",uniforms:us(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=it.getTransfer(E.colorSpace)!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,x){M.getRGB(Za,op(s)),n.buffers.color.setClear(Za.r,Za.g,Za.b,x,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(o,l)},render:g,addToRenderList:p,dispose:S}}function dx(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(y,C,R,U,L){let B=!1;const I=h(U,R,C);r!==I&&(r=I,c(r.object)),B=d(y,U,R,L),B&&_(y,U,R,L),L!==null&&e.update(L,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,x(y,C,R,U),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,C,R){const U=R.wireframe===!0;let L=n[y.id];L===void 0&&(L={},n[y.id]=L);let B=L[C.id];B===void 0&&(B={},L[C.id]=B);let I=B[U];return I===void 0&&(I=f(l()),B[U]=I),I}function f(y){const C=[],R=[],U=[];for(let L=0;L<t;L++)C[L]=0,R[L]=0,U[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:R,attributeDivisors:U,object:y,attributes:{},index:null}}function d(y,C,R,U){const L=r.attributes,B=C.attributes;let I=0;const W=R.getAttributes();for(const H in W)if(W[H].location>=0){const X=L[H];let F=B[H];if(F===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(F=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(F=y.instanceColor)),X===void 0||X.attribute!==F||F&&X.data!==F.data)return!0;I++}return r.attributesNum!==I||r.index!==U}function _(y,C,R,U){const L={},B=C.attributes;let I=0;const W=R.getAttributes();for(const H in W)if(W[H].location>=0){let X=B[H];X===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(X=y.instanceColor));const F={};F.attribute=X,X&&X.data&&(F.data=X.data),L[H]=F,I++}r.attributes=L,r.attributesNum=I,r.index=U}function g(){const y=r.newAttributes;for(let C=0,R=y.length;C<R;C++)y[C]=0}function p(y){m(y,0)}function m(y,C){const R=r.newAttributes,U=r.enabledAttributes,L=r.attributeDivisors;R[y]=1,U[y]===0&&(s.enableVertexAttribArray(y),U[y]=1),L[y]!==C&&(s.vertexAttribDivisor(y,C),L[y]=C)}function S(){const y=r.newAttributes,C=r.enabledAttributes;for(let R=0,U=C.length;R<U;R++)C[R]!==y[R]&&(s.disableVertexAttribArray(R),C[R]=0)}function M(y,C,R,U,L,B,I){I===!0?s.vertexAttribIPointer(y,C,R,L,B):s.vertexAttribPointer(y,C,R,U,L,B)}function x(y,C,R,U){g();const L=U.attributes,B=R.getAttributes(),I=C.defaultAttributeValues;for(const W in B){const H=B[W];if(H.location>=0){let Y=L[W];if(Y===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){const X=Y.normalized,F=Y.itemSize,V=e.get(Y);if(V===void 0)continue;const Z=V.buffer,N=V.type,k=V.bytesPerElement,ne=N===s.INT||N===s.UNSIGNED_INT||Y.gpuType===Uu;if(Y.isInterleavedBufferAttribute){const J=Y.data,ee=J.stride,xe=Y.offset;if(J.isInstancedInterleavedBuffer){for(let pe=0;pe<H.locationSize;pe++)m(H.location+pe,J.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let pe=0;pe<H.locationSize;pe++)p(H.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let pe=0;pe<H.locationSize;pe++)M(H.location+pe,F/H.locationSize,N,X,ee*k,(xe+F/H.locationSize*pe)*k,ne)}else{if(Y.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)m(H.location+J,Y.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let J=0;J<H.locationSize;J++)p(H.location+J);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let J=0;J<H.locationSize;J++)M(H.location+J,F/H.locationSize,N,X,F*k,F/H.locationSize*J*k,ne)}}else if(I!==void 0){const X=I[W];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(H.location,X);break;case 3:s.vertexAttrib3fv(H.location,X);break;case 4:s.vertexAttrib4fv(H.location,X);break;default:s.vertexAttrib1fv(H.location,X)}}}}S()}function E(){b();for(const y in n){const C=n[y];for(const R in C){const U=C[R];for(const L in U)u(U[L].object),delete U[L];delete C[R]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const R in C){const U=C[R];for(const L in U)u(U[L].object),delete U[L];delete C[R]}delete n[y.id]}function T(y){for(const C in n){const R=n[C];if(R[y.id]===void 0)continue;const U=R[y.id];for(const L in U)u(U[L].object),delete U[L];delete R[y.id]}}function b(){v(),a=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:b,resetDefaultState:v,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function px(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function mx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Jn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const b=T===Jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ti&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ln&&!b)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:E,maxSamples:A}}function gx(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new cr,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{const S=r?0:n,M=S*4;let x=m.clippingState||null;l.value=x,x=u(_,f,M,d);for(let E=0;E!==M;++E)x[E]=t[E];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,x=d;M!==g;++M,x+=4)a.copy(h[M]).applyMatrix4(S,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function _x(s){let e=new WeakMap;function t(a,o){return o===No?a.mapping=os:o===Lc&&(a.mapping=ls),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===No||o===Lc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new u_(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Kr=4,sf=[.125,.215,.35,.446,.526,.582],fr=20,Hl=new pp,af=new Je;let Wl=null,Xl=0,ql=0,Yl=!1;const ur=(1+Math.sqrt(5))/2,Wr=1/ur,of=[new ie(-ur,Wr,0),new ie(ur,Wr,0),new ie(-Wr,0,ur),new ie(Wr,0,ur),new ie(0,ur,-Wr),new ie(0,ur,Wr),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)],vx=new ie;class lf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=vx}=r;Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wl,Xl,ql),this._renderer.xr.enabled=Yl,e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:Jt,format:Jn,colorSpace:Sr,depthBuffer:!1},i=cf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xx(r)),this._blurMaterial=yx(r,e,t)}return i}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Hl)}_sceneToCubeUV(e,t,n,i,r){const l=new Un(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(af),h.toneMapping=Wi,h.autoClear=!1;const _=new Mr({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new $t(new va,_);let p=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,p=!0):(_.color.copy(af),p=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const x=this._cubeSize;Qa(i,M*x,S>2?x:0,x,x),h.setRenderTarget(i),p&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===os||e.mapping===ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Qa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Hl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=of[(i-r-1)%of.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $t(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*fr-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):fr;p>fr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fr}`);const m=[];let S=0;for(let T=0;T<fr;++T){const b=T/g,v=Math.exp(-b*b/2);m.push(v),T===0?S+=v:T<p&&(S+=2*v)}for(let T=0;T<m.length;T++)m[T]=m[T]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const x=this._sizeLods[i],E=3*x*(i>M-Kr?i-M+Kr:0),A=4*(this._cubeSize-x);Qa(t,E,A,3*x,2*x),l.setRenderTarget(t),l.render(h,Hl)}}function xx(s){const e=[],t=[],n=[];let i=s;const r=s-Kr+1+sf.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Kr?l=sf[a-s+Kr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,S=new Float32Array(g*_*d),M=new Float32Array(p*_*d),x=new Float32Array(m*_*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,b=A>2?0:-1,v=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];S.set(v,g*_*A),M.set(f,p*_*A);const y=[A,A,A,A,A,A];x.set(y,m*_*A)}const E=new Bn;E.setAttribute("position",new Mn(S,g)),E.setAttribute("uv",new Mn(M,p)),E.setAttribute("faceIndex",new Mn(x,m)),e.push(E),i>Kr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cf(s,e,t){const n=new qt(s,e,t);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function yx(s,e,t){const n=new Float32Array(fr),i=new ie(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Tt,depthTest:!1,depthWrite:!1})}function uf(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Tt,depthTest:!1,depthWrite:!1})}function hf(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tt,depthTest:!1,depthWrite:!1})}function Hu(){return`

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
	`}function Sx(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===No||l===Lc,u=l===os||l===ls;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new lf(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new lf(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Mx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&$r("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tx(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let M=0,x=S.length;M<x;M+=3){const E=S[M+0],A=S[M+1],T=S[M+2];f.push(E,A,A,T,T,E)}}else if(_!==void 0){const S=_.array;g=_.version;for(let M=0,x=S.length/3-1;M<x;M+=3){const E=M+0,A=M+1,T=M+2;f.push(E,A,A,T,T,E)}}else return;const p=new(ep(f)?ap:sp)(f,1);p.version=g;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function bx(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*a,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,n,1)}function h(f,d,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,_);let m=0;for(let S=0;S<_;S++)m+=d[S]*g[S];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ex(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function wx(s,e,t){const n=new WeakMap,i=new mt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let y=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),p===!0&&(x=3);let E=o.attributes.position.count*x,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*A*4*h),b=new tp(T,E,A,h);b.type=Ln,b.needsUpdate=!0;const v=x*4;for(let C=0;C<h;C++){const R=m[C],U=S[C],L=M[C],B=E*A*4*C;for(let I=0;I<R.count;I++){const W=I*v;_===!0&&(i.fromBufferAttribute(R,I),T[B+W+0]=i.x,T[B+W+1]=i.y,T[B+W+2]=i.z,T[B+W+3]=0),g===!0&&(i.fromBufferAttribute(U,I),T[B+W+4]=i.x,T[B+W+5]=i.y,T[B+W+6]=i.z,T[B+W+7]=0),p===!0&&(i.fromBufferAttribute(L,I),T[B+W+8]=i.x,T[B+W+9]=i.y,T[B+W+10]=i.z,T[B+W+11]=L.itemSize===4?i.w:1)}}f={count:h,texture:b,size:new Ye(E,A)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Ax(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const _p=new zt,ff=new zu(1,1),vp=new tp,xp=new Xg,yp=new cp,df=[],pf=[],mf=new Float32Array(16),gf=new Float32Array(9),_f=new Float32Array(4);function ys(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=df[i];if(r===void 0&&(r=new Float32Array(i),df[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Rt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ct(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Qo(s,e){let t=pf[e];t===void 0&&(t=new Int32Array(e),pf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Rx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Cx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2fv(this.addr,e),Ct(t,e)}}function Px(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;s.uniform3fv(this.addr,e),Ct(t,e)}}function Dx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4fv(this.addr,e),Ct(t,e)}}function Ux(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;_f.set(n),s.uniformMatrix2fv(this.addr,!1,_f),Ct(t,n)}}function Lx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;gf.set(n),s.uniformMatrix3fv(this.addr,!1,gf),Ct(t,n)}}function Ix(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;mf.set(n),s.uniformMatrix4fv(this.addr,!1,mf),Ct(t,n)}}function Fx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Nx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2iv(this.addr,e),Ct(t,e)}}function Ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3iv(this.addr,e),Ct(t,e)}}function Bx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4iv(this.addr,e),Ct(t,e)}}function kx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function zx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2uiv(this.addr,e),Ct(t,e)}}function Gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3uiv(this.addr,e),Ct(t,e)}}function Vx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4uiv(this.addr,e),Ct(t,e)}}function Hx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ff.compareFunction=Zd,r=ff):r=_p,t.setTexture2D(e||r,i)}function Wx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xp,i)}function Xx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yp,i)}function qx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vp,i)}function Yx(s){switch(s){case 5126:return Rx;case 35664:return Cx;case 35665:return Px;case 35666:return Dx;case 35674:return Ux;case 35675:return Lx;case 35676:return Ix;case 5124:case 35670:return Fx;case 35667:case 35671:return Nx;case 35668:case 35672:return Ox;case 35669:case 35673:return Bx;case 5125:return kx;case 36294:return zx;case 36295:return Gx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return qx}}function Jx(s,e){s.uniform1fv(this.addr,e)}function jx(s,e){const t=ys(e,this.size,2);s.uniform2fv(this.addr,t)}function Kx(s,e){const t=ys(e,this.size,3);s.uniform3fv(this.addr,t)}function Zx(s,e){const t=ys(e,this.size,4);s.uniform4fv(this.addr,t)}function Qx(s,e){const t=ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $x(s,e){const t=ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function e1(s,e){const t=ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function t1(s,e){s.uniform1iv(this.addr,e)}function n1(s,e){s.uniform2iv(this.addr,e)}function i1(s,e){s.uniform3iv(this.addr,e)}function r1(s,e){s.uniform4iv(this.addr,e)}function s1(s,e){s.uniform1uiv(this.addr,e)}function a1(s,e){s.uniform2uiv(this.addr,e)}function o1(s,e){s.uniform3uiv(this.addr,e)}function l1(s,e){s.uniform4uiv(this.addr,e)}function c1(s,e,t){const n=this.cache,i=e.length,r=Qo(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||_p,r[a])}function u1(s,e,t){const n=this.cache,i=e.length,r=Qo(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||xp,r[a])}function h1(s,e,t){const n=this.cache,i=e.length,r=Qo(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||yp,r[a])}function f1(s,e,t){const n=this.cache,i=e.length,r=Qo(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||vp,r[a])}function d1(s){switch(s){case 5126:return Jx;case 35664:return jx;case 35665:return Kx;case 35666:return Zx;case 35674:return Qx;case 35675:return $x;case 35676:return e1;case 5124:case 35670:return t1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return r1;case 5125:return s1;case 36294:return a1;case 36295:return o1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return f1}}class p1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yx(t.type)}}class m1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d1(t.type)}}class g1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Jl=/(\w+)(\])?(\[|\.)?/g;function vf(s,e){s.seq.push(e),s.map[e.id]=e}function _1(s,e,t){const n=s.name,i=n.length;for(Jl.lastIndex=0;;){const r=Jl.exec(n),a=Jl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){vf(t,c===void 0?new p1(o,s,e):new m1(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new g1(o),vf(t,h)),t=h}}}class Co{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);_1(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function xf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const v1=37297;let x1=0;function y1(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const yf=new Ke;function S1(s){it._getMatrix(yf,it.workingColorSpace,s);const e=`mat3( ${yf.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(s)){case Bo:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Sf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+y1(s.getShaderSource(e),a)}else return i}function M1(s,e){const t=S1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function T1(s,e){let t;switch(e){case vg:t="Linear";break;case xg:t="Reinhard";break;case yg:t="Cineon";break;case Sg:t="ACESFilmic";break;case Tg:t="AgX";break;case bg:t="Neutral";break;case Mg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $a=new ie;function b1(){it.getLuminanceCoefficients($a);const s=$a.x.toFixed(4),e=$a.y.toFixed(4),t=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function w1(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A1(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function qs(s){return s!==""}function Mf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const R1=/^[ \t]*#include +<([\w\d./]+)>/gm;function uu(s){return s.replace(R1,P1)}const C1=new Map;function P1(s,e){let t=je[e];if(t===void 0){const n=C1.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return uu(t)}const D1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bf(s){return s.replace(D1,U1)}function U1(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ef(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function L1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===kd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Zm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function I1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case os:case ls:e="ENVMAP_TYPE_CUBE";break;case Zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function N1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zd:e="ENVMAP_BLENDING_MULTIPLY";break;case gg:e="ENVMAP_BLENDING_MIX";break;case _g:e="ENVMAP_BLENDING_ADD";break}return e}function O1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function B1(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=L1(t),c=I1(t),u=F1(t),h=N1(t),f=O1(t),d=E1(t),_=w1(r),g=i.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(qs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(qs).join(`
`),m.length>0&&(m+=`
`)):(p=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),m=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?je.tonemapping_pars_fragment:"",t.toneMapping!==Wi?T1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,M1("linearToOutputTexel",t.outputColorSpace),b1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),a=uu(a),a=Mf(a,t),a=Tf(a,t),o=uu(o),o=Mf(o,t),o=Tf(o,t),a=bf(a),o=bf(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=S+p+a,x=S+m+o,E=xf(i,i.VERTEX_SHADER,M),A=xf(i,i.FRAGMENT_SHADER,x);i.attachShader(g,E),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(C){if(s.debug.checkShaderErrors){const R=i.getProgramInfoLog(g).trim(),U=i.getShaderInfoLog(E).trim(),L=i.getShaderInfoLog(A).trim();let B=!0,I=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,E,A);else{const W=Sf(i,E,"vertex"),H=Sf(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+W+`
`+H)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(U===""||L==="")&&(I=!1);I&&(C.diagnostics={runnable:B,programLog:R,vertexShader:{log:U,prefix:p},fragmentShader:{log:L,prefix:m}})}i.deleteShader(E),i.deleteShader(A),b=new Co(i,g),v=A1(i,g)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,v1)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x1++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=A,this}let k1=0;class z1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new G1(e),t.set(e,n)),n}}class G1{constructor(e){this.id=k1++,this.code=e,this.usedTimes=0}}function V1(s,e,t,n,i,r,a){const o=new ip,l=new z1,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,y,C,R,U){const L=R.fog,B=U.geometry,I=v.isMeshStandardMaterial?R.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||I),H=W&&W.mapping===Zo?W.image.height:null,Y=_[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const X=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,F=X!==void 0?X.length:0;let V=0;B.morphAttributes.position!==void 0&&(V=1),B.morphAttributes.normal!==void 0&&(V=2),B.morphAttributes.color!==void 0&&(V=3);let Z,N,k,ne;if(Y){const We=qn[Y];Z=We.vertexShader,N=We.fragmentShader}else Z=v.vertexShader,N=v.fragmentShader,l.update(v),k=l.getVertexShaderID(v),ne=l.getFragmentShaderID(v);const J=s.getRenderTarget(),ee=s.state.buffers.depth.getReversed(),xe=U.isInstancedMesh===!0,pe=U.isBatchedMesh===!0,ge=!!v.map,ue=!!v.matcap,Ie=!!W,O=!!v.aoMap,ze=!!v.lightMap,Ce=!!v.bumpMap,Fe=!!v.normalMap,le=!!v.displacementMap,Ee=!!v.emissiveMap,de=!!v.metalnessMap,te=!!v.roughnessMap,Ue=v.anisotropy>0,D=v.clearcoat>0,w=v.dispersion>0,G=v.iridescence>0,ae=v.sheen>0,$=v.transmission>0,Q=Ue&&!!v.anisotropyMap,ye=D&&!!v.clearcoatMap,_e=D&&!!v.clearcoatNormalMap,Me=D&&!!v.clearcoatRoughnessMap,we=G&&!!v.iridescenceMap,oe=G&&!!v.iridescenceThicknessMap,me=ae&&!!v.sheenColorMap,ve=ae&&!!v.sheenRoughnessMap,Ae=!!v.specularMap,Se=!!v.specularColorMap,Ge=!!v.specularIntensityMap,z=$&&!!v.transmissionMap,fe=$&&!!v.thicknessMap,ce=!!v.gradientMap,Le=!!v.alphaMap,he=v.alphaTest>0,se=!!v.alphaHash,Re=!!v.extensions;let Ne=Wi;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ne=s.toneMapping);const Be={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:Z,fragmentShader:N,defines:v.defines,customVertexShaderID:k,customFragmentShaderID:ne,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:pe,batchingColor:pe&&U._colorsTexture!==null,instancing:xe,instancingColor:xe&&U.instanceColor!==null,instancingMorph:xe&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Sr,alphaToCoverage:!!v.alphaToCoverage,map:ge,matcap:ue,envMap:Ie,envMapMode:Ie&&W.mapping,envMapCubeUVHeight:H,aoMap:O,lightMap:ze,bumpMap:Ce,normalMap:Fe,displacementMap:f&&le,emissiveMap:Ee,normalMapObjectSpace:Fe&&v.normalMapType===Ag,normalMapTangentSpace:Fe&&v.normalMapType===Bu,metalnessMap:de,roughnessMap:te,anisotropy:Ue,anisotropyMap:Q,clearcoat:D,clearcoatMap:ye,clearcoatNormalMap:_e,clearcoatRoughnessMap:Me,dispersion:w,iridescence:G,iridescenceMap:we,iridescenceThicknessMap:oe,sheen:ae,sheenColorMap:me,sheenRoughnessMap:ve,specularMap:Ae,specularColorMap:Se,specularIntensityMap:Ge,transmission:$,transmissionMap:z,thicknessMap:fe,gradientMap:ce,opaque:v.transparent===!1&&v.blending===Si&&v.alphaToCoverage===!1,alphaMap:Le,alphaTest:he,alphaHash:se,combine:v.combine,mapUv:ge&&g(v.map.channel),aoMapUv:O&&g(v.aoMap.channel),lightMapUv:ze&&g(v.lightMap.channel),bumpMapUv:Ce&&g(v.bumpMap.channel),normalMapUv:Fe&&g(v.normalMap.channel),displacementMapUv:le&&g(v.displacementMap.channel),emissiveMapUv:Ee&&g(v.emissiveMap.channel),metalnessMapUv:de&&g(v.metalnessMap.channel),roughnessMapUv:te&&g(v.roughnessMap.channel),anisotropyMapUv:Q&&g(v.anisotropyMap.channel),clearcoatMapUv:ye&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:me&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(v.sheenRoughnessMap.channel),specularMapUv:Ae&&g(v.specularMap.channel),specularColorMapUv:Se&&g(v.specularColorMap.channel),specularIntensityMapUv:Ge&&g(v.specularIntensityMap.channel),transmissionMapUv:z&&g(v.transmissionMap.channel),thicknessMapUv:fe&&g(v.thicknessMap.channel),alphaMapUv:Le&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Fe||Ue),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(ge||Le),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ee,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:V,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ne,decodeVideoTexture:ge&&v.map.isVideoTexture===!0&&it.getTransfer(v.map.colorSpace)===rt,decodeVideoTextureEmissive:Ee&&v.emissiveMap.isVideoTexture===!0&&it.getTransfer(v.emissiveMap.colorSpace)===rt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===xn,flipSided:v.side===on,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Re&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&v.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function m(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)y.push(C),y.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(S(y,v),M(y,v),y.push(s.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function S(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function M(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)}function x(v){const y=_[v.type];let C;if(y){const R=qn[y];C=ei.clone(R.uniforms)}else C=v.uniforms;return C}function E(v,y){let C;for(let R=0,U=u.length;R<U;R++){const L=u[R];if(L.cacheKey===y){C=L,++C.usedTimes;break}}return C===void 0&&(C=new B1(s,y,v,r),u.push(C)),C}function A(v){if(--v.usedTimes===0){const y=u.indexOf(v);u[y]=u[u.length-1],u.pop(),v.destroy()}}function T(v){l.remove(v)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:b}}function H1(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function W1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function wf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Af(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,_,g,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function o(h,f,d,_,g,p){const m=a(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,_,g,p){const m=a(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||W1),n.length>1&&n.sort(f||wf),i.length>1&&i.sort(f||wf)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function X1(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Af,s.set(n,[a])):i>=r.length?(a=new Af,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function q1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Je};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=t,t}}}function Y1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let J1=0;function j1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function K1(s){const e=new q1,t=Y1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new ie);const i=new ie,r=new St,a=new St;function o(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,S=0,M=0,x=0,E=0,A=0,T=0;c.sort(j1);for(let v=0,y=c.length;v<y;v++){const C=c[v],R=C.color,U=C.intensity,L=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=R.r*U,h+=R.g*U,f+=R.b*U;else if(C.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(C.sh.coefficients[I],U);T++}else if(C.isDirectionalLight){const I=e.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const W=C.shadow,H=t.get(C);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=C.shadow.matrix,S++}n.directional[d]=I,d++}else if(C.isSpotLight){const I=e.get(C);I.position.setFromMatrixPosition(C.matrixWorld),I.color.copy(R).multiplyScalar(U),I.distance=L,I.coneCos=Math.cos(C.angle),I.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),I.decay=C.decay,n.spot[g]=I;const W=C.shadow;if(C.map&&(n.spotLightMap[E]=C.map,E++,W.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[g]=W.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=B,x++}g++}else if(C.isRectAreaLight){const I=e.get(C);I.color.copy(R).multiplyScalar(U),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=I,p++}else if(C.isPointLight){const I=e.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),I.distance=C.distance,I.decay=C.decay,C.castShadow){const W=C.shadow,H=t.get(C);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=B,n.pointShadowMatrix[_]=C.shadow.matrix,M++}n.point[_]=I,_++}else if(C.isHemisphereLight){const I=e.get(C);I.skyColor.copy(C.color).multiplyScalar(U),I.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[m]=I,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const b=n.hash;(b.directionalLength!==d||b.pointLength!==_||b.spotLength!==g||b.rectAreaLength!==p||b.hemiLength!==m||b.numDirectionalShadows!==S||b.numPointShadows!==M||b.numSpotShadows!==x||b.numSpotMaps!==E||b.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,b.directionalLength=d,b.pointLength=_,b.spotLength=g,b.rectAreaLength=p,b.hemiLength=m,b.numDirectionalShadows=S,b.numPointShadows=M,b.numSpotShadows=x,b.numSpotMaps=E,b.numLightProbes=T,n.version=J1++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const M=c[m];if(M.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),h++}else if(M.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),d++}else if(M.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Rf(s){const e=new K1(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Z1(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Rf(s),e.set(i,[o])):r>=a.length?(o=new Rf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
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
}`;function ey(s,e,t){let n=new up;const i=new Ye,r=new Ye,a=new mt,o=new fp({depthPacking:Kd}),l=new dp,c={},u=t.maxTextureSize,h={[Yi]:on,[on]:Yi,[xn]:xn},f=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Q1,fragmentShader:$1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Bn;_.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $t(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kd;let m=this.type;this.render=function(A,T,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const v=s.getRenderTarget(),y=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),R=s.state;R.setBlending(Tt),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const U=m!==pi&&this.type===pi,L=m===pi&&this.type!==pi;for(let B=0,I=A.length;B<I;B++){const W=A[B],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const Y=H.getFrameExtents();if(i.multiply(Y),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Y.x),i.x=r.x*Y.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Y.y),i.y=r.y*Y.y,H.mapSize.y=r.y)),H.map===null||U===!0||L===!0){const F=this.type!==pi?{minFilter:ft,magFilter:ft}:{};H.map!==null&&H.map.dispose(),H.map=new qt(i.x,i.y,F),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const X=H.getViewportCount();for(let F=0;F<X;F++){const V=H.getViewport(F);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),R.viewport(a),H.updateMatrices(W,F),n=H.getFrustum(),x(T,b,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===pi&&S(H,b),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(v,y,C)};function S(A,T){const b=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new qt(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,b,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,b,d,g,null)}function M(A,T,b,v){let y=null;const C=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=b.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const R=y.uuid,U=T.uuid;let L=c[R];L===void 0&&(L={},c[R]=L);let B=L[U];B===void 0&&(B=y.clone(),L[U]=B,T.addEventListener("dispose",E)),y=B}if(y.visible=T.visible,y.wireframe=T.wireframe,v===pi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const R=s.properties.get(y);R.light=b}return y}function x(A,T,b,v,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===pi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const U=e.update(A),L=A.material;if(Array.isArray(L)){const B=U.groups;for(let I=0,W=B.length;I<W;I++){const H=B[I],Y=L[H.materialIndex];if(Y&&Y.visible){const X=M(A,Y,v,y);A.onBeforeShadow(s,A,T,b,U,X,H),s.renderBufferDirect(b,null,U,X,A,H),A.onAfterShadow(s,A,T,b,U,X,H)}}}else if(L.visible){const B=M(A,L,v,y);A.onBeforeShadow(s,A,T,b,U,B,null),s.renderBufferDirect(b,null,U,B,A,null),A.onAfterShadow(s,A,T,b,U,B,null)}}const R=A.children;for(let U=0,L=R.length;U<L;U++)x(R[U],T,b,v,y)}function E(A){A.target.removeEventListener("dispose",E);for(const b in c){const v=c[b],y=A.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const ty={[wc]:Ac,[Rc]:Dc,[Cc]:Uc,[as]:Pc,[Ac]:wc,[Dc]:Rc,[Uc]:Cc,[Pc]:as};function ny(s,e){function t(){let z=!1;const fe=new mt;let ce=null;const Le=new mt(0,0,0,0);return{setMask:function(he){ce!==he&&!z&&(s.colorMask(he,he,he,he),ce=he)},setLocked:function(he){z=he},setClear:function(he,se,Re,Ne,Be){Be===!0&&(he*=Ne,se*=Ne,Re*=Ne),fe.set(he,se,Re,Ne),Le.equals(fe)===!1&&(s.clearColor(he,se,Re,Ne),Le.copy(fe))},reset:function(){z=!1,ce=null,Le.set(-1,0,0,0)}}}function n(){let z=!1,fe=!1,ce=null,Le=null,he=null;return{setReversed:function(se){if(fe!==se){const Re=e.get("EXT_clip_control");se?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),fe=se;const Ne=he;he=null,this.setClear(Ne)}},getReversed:function(){return fe},setTest:function(se){se?J(s.DEPTH_TEST):ee(s.DEPTH_TEST)},setMask:function(se){ce!==se&&!z&&(s.depthMask(se),ce=se)},setFunc:function(se){if(fe&&(se=ty[se]),Le!==se){switch(se){case wc:s.depthFunc(s.NEVER);break;case Ac:s.depthFunc(s.ALWAYS);break;case Rc:s.depthFunc(s.LESS);break;case as:s.depthFunc(s.LEQUAL);break;case Cc:s.depthFunc(s.EQUAL);break;case Pc:s.depthFunc(s.GEQUAL);break;case Dc:s.depthFunc(s.GREATER);break;case Uc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=se}},setLocked:function(se){z=se},setClear:function(se){he!==se&&(fe&&(se=1-se),s.clearDepth(se),he=se)},reset:function(){z=!1,ce=null,Le=null,he=null,fe=!1}}}function i(){let z=!1,fe=null,ce=null,Le=null,he=null,se=null,Re=null,Ne=null,Be=null;return{setTest:function(We){z||(We?J(s.STENCIL_TEST):ee(s.STENCIL_TEST))},setMask:function(We){fe!==We&&!z&&(s.stencilMask(We),fe=We)},setFunc:function(We,st,lt){(ce!==We||Le!==st||he!==lt)&&(s.stencilFunc(We,st,lt),ce=We,Le=st,he=lt)},setOp:function(We,st,lt){(se!==We||Re!==st||Ne!==lt)&&(s.stencilOp(We,st,lt),se=We,Re=st,Ne=lt)},setLocked:function(We){z=We},setClear:function(We){Be!==We&&(s.clearStencil(We),Be=We)},reset:function(){z=!1,fe=null,ce=null,Le=null,he=null,se=null,Re=null,Ne=null,Be=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,S=null,M=null,x=null,E=null,A=null,T=new Je(0,0,0),b=0,v=!1,y=null,C=null,R=null,U=null,L=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,W=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(H)[1]),I=W>=1):H.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),I=W>=2);let Y=null,X={};const F=s.getParameter(s.SCISSOR_BOX),V=s.getParameter(s.VIEWPORT),Z=new mt().fromArray(F),N=new mt().fromArray(V);function k(z,fe,ce,Le){const he=new Uint8Array(4),se=s.createTexture();s.bindTexture(z,se),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<ce;Re++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(fe,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(fe+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return se}const ne={};ne[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(s.DEPTH_TEST),a.setFunc(as),Ce(!1),Fe(Ph),J(s.CULL_FACE),O(Tt);function J(z){u[z]!==!0&&(s.enable(z),u[z]=!0)}function ee(z){u[z]!==!1&&(s.disable(z),u[z]=!1)}function xe(z,fe){return h[z]!==fe?(s.bindFramebuffer(z,fe),h[z]=fe,z===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=fe),z===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=fe),!0):!1}function pe(z,fe){let ce=d,Le=!1;if(z){ce=f.get(fe),ce===void 0&&(ce=[],f.set(fe,ce));const he=z.textures;if(ce.length!==he.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let se=0,Re=he.length;se<Re;se++)ce[se]=s.COLOR_ATTACHMENT0+se;ce.length=he.length,Le=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,Le=!0);Le&&s.drawBuffers(ce)}function ge(z){return _!==z?(s.useProgram(z),_=z,!0):!1}const ue={[vi]:s.FUNC_ADD,[$m]:s.FUNC_SUBTRACT,[eg]:s.FUNC_REVERSE_SUBTRACT};ue[tg]=s.MIN,ue[ng]=s.MAX;const Ie={[ig]:s.ZERO,[rg]:s.ONE,[sg]:s.SRC_COLOR,[ta]:s.SRC_ALPHA,[hg]:s.SRC_ALPHA_SATURATE,[cg]:s.DST_COLOR,[og]:s.DST_ALPHA,[ag]:s.ONE_MINUS_SRC_COLOR,[na]:s.ONE_MINUS_SRC_ALPHA,[ug]:s.ONE_MINUS_DST_COLOR,[lg]:s.ONE_MINUS_DST_ALPHA,[fg]:s.CONSTANT_COLOR,[dg]:s.ONE_MINUS_CONSTANT_COLOR,[pg]:s.CONSTANT_ALPHA,[mg]:s.ONE_MINUS_CONSTANT_ALPHA};function O(z,fe,ce,Le,he,se,Re,Ne,Be,We){if(z===Tt){g===!0&&(ee(s.BLEND),g=!1);return}if(g===!1&&(J(s.BLEND),g=!0),z!==Qm){if(z!==p||We!==v){if((m!==vi||x!==vi)&&(s.blendEquation(s.FUNC_ADD),m=vi,x=vi),We)switch(z){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ec:s.blendFunc(s.ONE,s.ONE);break;case Dh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ec:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Dh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,M=null,E=null,A=null,T.set(0,0,0),b=0,p=z,v=We}return}he=he||fe,se=se||ce,Re=Re||Le,(fe!==m||he!==x)&&(s.blendEquationSeparate(ue[fe],ue[he]),m=fe,x=he),(ce!==S||Le!==M||se!==E||Re!==A)&&(s.blendFuncSeparate(Ie[ce],Ie[Le],Ie[se],Ie[Re]),S=ce,M=Le,E=se,A=Re),(Ne.equals(T)===!1||Be!==b)&&(s.blendColor(Ne.r,Ne.g,Ne.b,Be),T.copy(Ne),b=Be),p=z,v=!1}function ze(z,fe){z.side===xn?ee(s.CULL_FACE):J(s.CULL_FACE);let ce=z.side===on;fe&&(ce=!ce),Ce(ce),z.blending===Si&&z.transparent===!1?O(Tt):O(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const Le=z.stencilWrite;o.setTest(Le),Le&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ee(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(z){y!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),y=z)}function Fe(z){z!==jm?(J(s.CULL_FACE),z!==C&&(z===Ph?s.cullFace(s.BACK):z===Km?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ee(s.CULL_FACE),C=z}function le(z){z!==R&&(I&&s.lineWidth(z),R=z)}function Ee(z,fe,ce){z?(J(s.POLYGON_OFFSET_FILL),(U!==fe||L!==ce)&&(s.polygonOffset(fe,ce),U=fe,L=ce)):ee(s.POLYGON_OFFSET_FILL)}function de(z){z?J(s.SCISSOR_TEST):ee(s.SCISSOR_TEST)}function te(z){z===void 0&&(z=s.TEXTURE0+B-1),Y!==z&&(s.activeTexture(z),Y=z)}function Ue(z,fe,ce){ce===void 0&&(Y===null?ce=s.TEXTURE0+B-1:ce=Y);let Le=X[ce];Le===void 0&&(Le={type:void 0,texture:void 0},X[ce]=Le),(Le.type!==z||Le.texture!==fe)&&(Y!==ce&&(s.activeTexture(ce),Y=ce),s.bindTexture(z,fe||ne[z]),Le.type=z,Le.texture=fe)}function D(){const z=X[Y];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{s.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{s.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{s.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{s.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{s.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{s.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{s.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{s.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(z){Z.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Z.copy(z))}function ve(z){N.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),N.copy(z))}function Ae(z,fe){let ce=c.get(fe);ce===void 0&&(ce=new WeakMap,c.set(fe,ce));let Le=ce.get(z);Le===void 0&&(Le=s.getUniformBlockIndex(fe,z.name),ce.set(z,Le))}function Se(z,fe){const Le=c.get(fe).get(z);l.get(fe)!==Le&&(s.uniformBlockBinding(fe,Le,z.__bindingPointIndex),l.set(fe,Le))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Y=null,X={},h={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,S=null,M=null,x=null,E=null,A=null,T=new Je(0,0,0),b=0,v=!1,y=null,C=null,R=null,U=null,L=null,Z.set(0,0,s.canvas.width,s.canvas.height),N.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:ee,bindFramebuffer:xe,drawBuffers:pe,useProgram:ge,setBlending:O,setMaterial:ze,setFlipSided:Ce,setCullFace:Fe,setLineWidth:le,setPolygonOffset:Ee,setScissorTest:de,activeTexture:te,bindTexture:Ue,unbindTexture:D,compressedTexImage2D:w,compressedTexImage3D:G,texImage2D:we,texImage3D:oe,updateUBOMapping:Ae,uniformBlockBinding:Se,texStorage2D:_e,texStorage3D:Me,texSubImage2D:ae,texSubImage3D:$,compressedTexSubImage2D:Q,compressedTexSubImage3D:ye,scissor:me,viewport:ve,reset:Ge}}function iy(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,w){return d?new OffscreenCanvas(D,w):zo("canvas")}function g(D,w,G){let ae=1;const $=Ue(D);if(($.width>G||$.height>G)&&(ae=G/Math.max($.width,$.height)),ae<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Q=Math.floor(ae*$.width),ye=Math.floor(ae*$.height);h===void 0&&(h=_(Q,ye));const _e=w?_(Q,ye):h;return _e.width=Q,_e.height=ye,_e.getContext("2d").drawImage(D,0,0,Q,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Q+"x"+ye+")."),_e}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),D;return D}function p(D){return D.generateMipmaps}function m(D){s.generateMipmap(D)}function S(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(D,w,G,ae,$=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Q=w;if(w===s.RED&&(G===s.FLOAT&&(Q=s.R32F),G===s.HALF_FLOAT&&(Q=s.R16F),G===s.UNSIGNED_BYTE&&(Q=s.R8)),w===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(Q=s.R8UI),G===s.UNSIGNED_SHORT&&(Q=s.R16UI),G===s.UNSIGNED_INT&&(Q=s.R32UI),G===s.BYTE&&(Q=s.R8I),G===s.SHORT&&(Q=s.R16I),G===s.INT&&(Q=s.R32I)),w===s.RG&&(G===s.FLOAT&&(Q=s.RG32F),G===s.HALF_FLOAT&&(Q=s.RG16F),G===s.UNSIGNED_BYTE&&(Q=s.RG8)),w===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(Q=s.RG8UI),G===s.UNSIGNED_SHORT&&(Q=s.RG16UI),G===s.UNSIGNED_INT&&(Q=s.RG32UI),G===s.BYTE&&(Q=s.RG8I),G===s.SHORT&&(Q=s.RG16I),G===s.INT&&(Q=s.RG32I)),w===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),G===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),G===s.UNSIGNED_INT&&(Q=s.RGB32UI),G===s.BYTE&&(Q=s.RGB8I),G===s.SHORT&&(Q=s.RGB16I),G===s.INT&&(Q=s.RGB32I)),w===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),G===s.UNSIGNED_INT&&(Q=s.RGBA32UI),G===s.BYTE&&(Q=s.RGBA8I),G===s.SHORT&&(Q=s.RGBA16I),G===s.INT&&(Q=s.RGBA32I)),w===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),w===s.RGBA){const ye=$?Bo:it.getTransfer(ae);G===s.FLOAT&&(Q=s.RGBA32F),G===s.HALF_FLOAT&&(Q=s.RGBA16F),G===s.UNSIGNED_BYTE&&(Q=ye===rt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(D,w){let G;return D?w===null||w===yr||w===ia?G=s.DEPTH24_STENCIL8:w===Ln?G=s.DEPTH32F_STENCIL8:w===cs&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===yr||w===ia?G=s.DEPTH_COMPONENT24:w===Ln?G=s.DEPTH_COMPONENT32F:w===cs&&(G=s.DEPTH_COMPONENT16),G}function E(D,w){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==ft&&D.minFilter!==It?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function A(D){const w=D.target;w.removeEventListener("dispose",A),b(w),w.isVideoTexture&&u.delete(w)}function T(D){const w=D.target;w.removeEventListener("dispose",T),y(w)}function b(D){const w=n.get(D);if(w.__webglInit===void 0)return;const G=D.source,ae=f.get(G);if(ae){const $=ae[w.__cacheKey];$.usedTimes--,$.usedTimes===0&&v(D),Object.keys(ae).length===0&&f.delete(G)}n.remove(D)}function v(D){const w=n.get(D);s.deleteTexture(w.__webglTexture);const G=D.source,ae=f.get(G);delete ae[w.__cacheKey],a.memory.textures--}function y(D){const w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let $=0;$<w.__webglFramebuffer[ae].length;$++)s.deleteFramebuffer(w.__webglFramebuffer[ae][$]);else s.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)s.deleteFramebuffer(w.__webglFramebuffer[ae]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=D.textures;for(let ae=0,$=G.length;ae<$;ae++){const Q=n.get(G[ae]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(G[ae])}n.remove(D)}let C=0;function R(){C=0}function U(){const D=C;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),C+=1,D}function L(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function B(D,w){const G=n.get(D);if(D.isVideoTexture&&de(D),D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){const ae=D.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(G,D,w);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+w)}function I(D,w){const G=n.get(D);if(D.version>0&&G.__version!==D.version){ne(G,D,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+w)}function W(D,w){const G=n.get(D);if(D.version>0&&G.__version!==D.version){ne(G,D,w);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+w)}function H(D,w){const G=n.get(D);if(D.version>0&&G.__version!==D.version){J(G,D,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+w)}const Y={[Oo]:s.REPEAT,[ni]:s.CLAMP_TO_EDGE,[Ic]:s.MIRRORED_REPEAT},X={[ft]:s.NEAREST,[Eg]:s.NEAREST_MIPMAP_NEAREST,[Ca]:s.NEAREST_MIPMAP_LINEAR,[It]:s.LINEAR,[vl]:s.LINEAR_MIPMAP_NEAREST,[zi]:s.LINEAR_MIPMAP_LINEAR},F={[Rg]:s.NEVER,[Ig]:s.ALWAYS,[Cg]:s.LESS,[Zd]:s.LEQUAL,[Pg]:s.EQUAL,[Lg]:s.GEQUAL,[Dg]:s.GREATER,[Ug]:s.NOTEQUAL};function V(D,w){if(w.type===Ln&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===It||w.magFilter===vl||w.magFilter===Ca||w.magFilter===zi||w.minFilter===It||w.minFilter===vl||w.minFilter===Ca||w.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Y[w.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Y[w.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Y[w.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,X[w.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,X[w.minFilter]),w.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ft||w.minFilter!==Ca&&w.minFilter!==zi||w.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Z(D,w){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",A));const ae=w.source;let $=f.get(ae);$===void 0&&($={},f.set(ae,$));const Q=L(w);if(Q!==D.__cacheKey){$[Q]===void 0&&($[Q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),$[Q].usedTimes++;const ye=$[D.__cacheKey];ye!==void 0&&($[D.__cacheKey].usedTimes--,ye.usedTimes===0&&v(w)),D.__cacheKey=Q,D.__webglTexture=$[Q].texture}return G}function N(D,w,G){return Math.floor(Math.floor(D/G)/w)}function k(D,w,G,ae){const Q=D.updateRanges;if(Q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,G,ae,w.data);else{Q.sort((oe,me)=>oe.start-me.start);let ye=0;for(let oe=1;oe<Q.length;oe++){const me=Q[ye],ve=Q[oe],Ae=me.start+me.count,Se=N(ve.start,w.width,4),Ge=N(me.start,w.width,4);ve.start<=Ae+1&&Se===Ge&&N(ve.start+ve.count-1,w.width,4)===Se?me.count=Math.max(me.count,ve.start+ve.count-me.start):(++ye,Q[ye]=ve)}Q.length=ye+1;const _e=s.getParameter(s.UNPACK_ROW_LENGTH),Me=s.getParameter(s.UNPACK_SKIP_PIXELS),we=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let oe=0,me=Q.length;oe<me;oe++){const ve=Q[oe],Ae=Math.floor(ve.start/4),Se=Math.ceil(ve.count/4),Ge=Ae%w.width,z=Math.floor(Ae/w.width),fe=Se,ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,z),t.texSubImage2D(s.TEXTURE_2D,0,Ge,z,fe,ce,G,ae,w.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,_e),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),s.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function ne(D,w,G){let ae=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=s.TEXTURE_3D);const $=Z(D,w),Q=w.source;t.bindTexture(ae,D.__webglTexture,s.TEXTURE0+G);const ye=n.get(Q);if(Q.version!==ye.__version||$===!0){t.activeTexture(s.TEXTURE0+G);const _e=it.getPrimaries(it.workingColorSpace),Me=w.colorSpace===ki?null:it.getPrimaries(w.colorSpace),we=w.colorSpace===ki||_e===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let oe=g(w.image,!1,i.maxTextureSize);oe=te(w,oe);const me=r.convert(w.format,w.colorSpace),ve=r.convert(w.type);let Ae=M(w.internalFormat,me,ve,w.colorSpace,w.isVideoTexture);V(ae,w);let Se;const Ge=w.mipmaps,z=w.isVideoTexture!==!0,fe=ye.__version===void 0||$===!0,ce=Q.dataReady,Le=E(w,oe);if(w.isDepthTexture)Ae=x(w.format===sa,w.type),fe&&(z?t.texStorage2D(s.TEXTURE_2D,1,Ae,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,Ae,oe.width,oe.height,0,me,ve,null));else if(w.isDataTexture)if(Ge.length>0){z&&fe&&t.texStorage2D(s.TEXTURE_2D,Le,Ae,Ge[0].width,Ge[0].height);for(let he=0,se=Ge.length;he<se;he++)Se=Ge[he],z?ce&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Se.width,Se.height,me,ve,Se.data):t.texImage2D(s.TEXTURE_2D,he,Ae,Se.width,Se.height,0,me,ve,Se.data);w.generateMipmaps=!1}else z?(fe&&t.texStorage2D(s.TEXTURE_2D,Le,Ae,oe.width,oe.height),ce&&k(w,oe,me,ve)):t.texImage2D(s.TEXTURE_2D,0,Ae,oe.width,oe.height,0,me,ve,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){z&&fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Ae,Ge[0].width,Ge[0].height,oe.depth);for(let he=0,se=Ge.length;he<se;he++)if(Se=Ge[he],w.format!==Jn)if(me!==null)if(z){if(ce)if(w.layerUpdates.size>0){const Re=rf(Se.width,Se.height,w.format,w.type);for(const Ne of w.layerUpdates){const Be=Se.data.subarray(Ne*Re/Se.data.BYTES_PER_ELEMENT,(Ne+1)*Re/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,Ne,Se.width,Se.height,1,me,Be)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,oe.depth,me,Se.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,Ae,Se.width,Se.height,oe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,oe.depth,me,ve,Se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,Ae,Se.width,Se.height,oe.depth,0,me,ve,Se.data)}else{z&&fe&&t.texStorage2D(s.TEXTURE_2D,Le,Ae,Ge[0].width,Ge[0].height);for(let he=0,se=Ge.length;he<se;he++)Se=Ge[he],w.format!==Jn?me!==null?z?ce&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Se.width,Se.height,me,Se.data):t.compressedTexImage2D(s.TEXTURE_2D,he,Ae,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ce&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Se.width,Se.height,me,ve,Se.data):t.texImage2D(s.TEXTURE_2D,he,Ae,Se.width,Se.height,0,me,ve,Se.data)}else if(w.isDataArrayTexture)if(z){if(fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Ae,oe.width,oe.height,oe.depth),ce)if(w.layerUpdates.size>0){const he=rf(oe.width,oe.height,w.format,w.type);for(const se of w.layerUpdates){const Re=oe.data.subarray(se*he/oe.data.BYTES_PER_ELEMENT,(se+1)*he/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,se,oe.width,oe.height,1,me,ve,Re)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,ve,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,oe.width,oe.height,oe.depth,0,me,ve,oe.data);else if(w.isData3DTexture)z?(fe&&t.texStorage3D(s.TEXTURE_3D,Le,Ae,oe.width,oe.height,oe.depth),ce&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,ve,oe.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,oe.width,oe.height,oe.depth,0,me,ve,oe.data);else if(w.isFramebufferTexture){if(fe)if(z)t.texStorage2D(s.TEXTURE_2D,Le,Ae,oe.width,oe.height);else{let he=oe.width,se=oe.height;for(let Re=0;Re<Le;Re++)t.texImage2D(s.TEXTURE_2D,Re,Ae,he,se,0,me,ve,null),he>>=1,se>>=1}}else if(Ge.length>0){if(z&&fe){const he=Ue(Ge[0]);t.texStorage2D(s.TEXTURE_2D,Le,Ae,he.width,he.height)}for(let he=0,se=Ge.length;he<se;he++)Se=Ge[he],z?ce&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,me,ve,Se):t.texImage2D(s.TEXTURE_2D,he,Ae,me,ve,Se);w.generateMipmaps=!1}else if(z){if(fe){const he=Ue(oe);t.texStorage2D(s.TEXTURE_2D,Le,Ae,he.width,he.height)}ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,ve,oe)}else t.texImage2D(s.TEXTURE_2D,0,Ae,me,ve,oe);p(w)&&m(ae),ye.__version=Q.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function J(D,w,G){if(w.image.length!==6)return;const ae=Z(D,w),$=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+G);const Q=n.get($);if($.version!==Q.__version||ae===!0){t.activeTexture(s.TEXTURE0+G);const ye=it.getPrimaries(it.workingColorSpace),_e=w.colorSpace===ki?null:it.getPrimaries(w.colorSpace),Me=w.colorSpace===ki||ye===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const we=w.isCompressedTexture||w.image[0].isCompressedTexture,oe=w.image[0]&&w.image[0].isDataTexture,me=[];for(let se=0;se<6;se++)!we&&!oe?me[se]=g(w.image[se],!0,i.maxCubemapSize):me[se]=oe?w.image[se].image:w.image[se],me[se]=te(w,me[se]);const ve=me[0],Ae=r.convert(w.format,w.colorSpace),Se=r.convert(w.type),Ge=M(w.internalFormat,Ae,Se,w.colorSpace),z=w.isVideoTexture!==!0,fe=Q.__version===void 0||ae===!0,ce=$.dataReady;let Le=E(w,ve);V(s.TEXTURE_CUBE_MAP,w);let he;if(we){z&&fe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,Ge,ve.width,ve.height);for(let se=0;se<6;se++){he=me[se].mipmaps;for(let Re=0;Re<he.length;Re++){const Ne=he[Re];w.format!==Jn?Ae!==null?z?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,0,0,Ne.width,Ne.height,Ae,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,Ge,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,0,0,Ne.width,Ne.height,Ae,Se,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,Ge,Ne.width,Ne.height,0,Ae,Se,Ne.data)}}}else{if(he=w.mipmaps,z&&fe){he.length>0&&Le++;const se=Ue(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,Ge,se.width,se.height)}for(let se=0;se<6;se++)if(oe){z?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,me[se].width,me[se].height,Ae,Se,me[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ge,me[se].width,me[se].height,0,Ae,Se,me[se].data);for(let Re=0;Re<he.length;Re++){const Be=he[Re].image[se].image;z?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,0,0,Be.width,Be.height,Ae,Se,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,Ge,Be.width,Be.height,0,Ae,Se,Be.data)}}else{z?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ae,Se,me[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ge,Ae,Se,me[se]);for(let Re=0;Re<he.length;Re++){const Ne=he[Re];z?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,0,0,Ae,Se,Ne.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,Ge,Ae,Se,Ne.image[se])}}}p(w)&&m(s.TEXTURE_CUBE_MAP),Q.__version=$.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ee(D,w,G,ae,$,Q){const ye=r.convert(G.format,G.colorSpace),_e=r.convert(G.type),Me=M(G.internalFormat,ye,_e,G.colorSpace),we=n.get(w),oe=n.get(G);if(oe.__renderTarget=w,!we.__hasExternalTextures){const me=Math.max(1,w.width>>Q),ve=Math.max(1,w.height>>Q);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,Q,Me,me,ve,w.depth,0,ye,_e,null):t.texImage2D($,Q,Me,me,ve,0,ye,_e,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Ee(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,$,oe.__webglTexture,0,le(w)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,$,oe.__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(D,w,G){if(s.bindRenderbuffer(s.RENDERBUFFER,D),w.depthBuffer){const ae=w.depthTexture,$=ae&&ae.isDepthTexture?ae.type:null,Q=x(w.stencilBuffer,$),ye=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=le(w);Ee(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,Q,w.width,w.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,Q,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Q,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,D)}else{const ae=w.textures;for(let $=0;$<ae.length;$++){const Q=ae[$],ye=r.convert(Q.format,Q.colorSpace),_e=r.convert(Q.type),Me=M(Q.internalFormat,ye,_e,Q.colorSpace),we=le(w);G&&Ee(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,Me,w.width,w.height):Ee(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,Me,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Me,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pe(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=n.get(w.depthTexture);ae.__renderTarget=w,(!ae.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);const $=ae.__webglTexture,Q=le(w);if(w.depthTexture.format===ra)Ee(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(w.depthTexture.format===sa)Ee(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ge(D){const w=n.get(D),G=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const ae=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ae){const $=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ae.removeEventListener("dispose",$)};ae.addEventListener("dispose",$),w.__depthDisposeCallback=$}w.__boundDepthTexture=ae}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const ae=D.texture.mipmaps;ae&&ae.length>0?pe(w.__webglFramebuffer[0],D):pe(w.__webglFramebuffer,D)}else if(G){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]===void 0)w.__webglDepthbuffer[ae]=s.createRenderbuffer(),xe(w.__webglDepthbuffer[ae],D,!1);else{const $=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[ae];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Q)}}else{const ae=D.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),xe(w.__webglDepthbuffer,D,!1);else{const $=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(D,w,G){const ae=n.get(D);w!==void 0&&ee(ae.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&ge(D)}function Ie(D){const w=D.texture,G=n.get(D),ae=n.get(w);D.addEventListener("dispose",T);const $=D.textures,Q=D.isWebGLCubeRenderTarget===!0,ye=$.length>1;if(ye||(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=w.version,a.memory.textures++),Q){G.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[_e]=[];for(let Me=0;Me<w.mipmaps.length;Me++)G.__webglFramebuffer[_e][Me]=s.createFramebuffer()}else G.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let _e=0;_e<w.mipmaps.length;_e++)G.__webglFramebuffer[_e]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(ye)for(let _e=0,Me=$.length;_e<Me;_e++){const we=n.get($[_e]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),a.memory.textures++)}if(D.samples>0&&Ee(D)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let _e=0;_e<$.length;_e++){const Me=$[_e];G.__webglColorRenderbuffer[_e]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[_e]);const we=r.convert(Me.format,Me.colorSpace),oe=r.convert(Me.type),me=M(Me.internalFormat,we,oe,Me.colorSpace,D.isXRRenderTarget===!0),ve=le(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,me,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,G.__webglColorRenderbuffer[_e])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(G.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),V(s.TEXTURE_CUBE_MAP,w);for(let _e=0;_e<6;_e++)if(w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)ee(G.__webglFramebuffer[_e][Me],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Me);else ee(G.__webglFramebuffer[_e],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);p(w)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let _e=0,Me=$.length;_e<Me;_e++){const we=$[_e],oe=n.get(we);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),V(s.TEXTURE_2D,we),ee(G.__webglFramebuffer,D,we,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,0),p(we)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_e=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,ae.__webglTexture),V(_e,w),w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)ee(G.__webglFramebuffer[Me],D,w,s.COLOR_ATTACHMENT0,_e,Me);else ee(G.__webglFramebuffer,D,w,s.COLOR_ATTACHMENT0,_e,0);p(w)&&m(_e),t.unbindTexture()}D.depthBuffer&&ge(D)}function O(D){const w=D.textures;for(let G=0,ae=w.length;G<ae;G++){const $=w[G];if(p($)){const Q=S(D),ye=n.get($).__webglTexture;t.bindTexture(Q,ye),m(Q),t.unbindTexture()}}}const ze=[],Ce=[];function Fe(D){if(D.samples>0){if(Ee(D)===!1){const w=D.textures,G=D.width,ae=D.height;let $=s.COLOR_BUFFER_BIT;const Q=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(D),_e=w.length>1;if(_e)for(let we=0;we<w.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Me=D.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let we=0;we<w.length;we++){if(D.resolveDepthBuffer&&(D.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),_e){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const oe=n.get(w[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,oe,0)}s.blitFramebuffer(0,0,G,ae,0,0,G,ae,$,s.NEAREST),l===!0&&(ze.length=0,Ce.length=0,ze.push(s.COLOR_ATTACHMENT0+we),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ze.push(Q),Ce.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ce)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_e)for(let we=0;we<w.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const oe=n.get(w[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,oe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const w=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function le(D){return Math.min(i.maxSamples,D.samples)}function Ee(D){const w=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function de(D){const w=a.render.frame;u.get(D)!==w&&(u.set(D,w),D.update())}function te(D,w){const G=D.colorSpace,ae=D.format,$=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==Sr&&G!==ki&&(it.getTransfer(G)===rt?(ae!==Jn||$!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Ue(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=R,this.setTexture2D=B,this.setTexture2DArray=I,this.setTexture3D=W,this.setTextureCube=H,this.rebindTextures=ue,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Ee}function ry(s,e){function t(n,i=ki){let r;const a=it.getTransfer(i);if(n===Ti)return s.UNSIGNED_BYTE;if(n===Lu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Iu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Vd)return s.BYTE;if(n===Hd)return s.SHORT;if(n===cs)return s.UNSIGNED_SHORT;if(n===Uu)return s.INT;if(n===yr)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===Jt)return s.HALF_FLOAT;if(n===Xd)return s.ALPHA;if(n===qd)return s.RGB;if(n===Jn)return s.RGBA;if(n===ra)return s.DEPTH_COMPONENT;if(n===sa)return s.DEPTH_STENCIL;if(n===Yd)return s.RED;if(n===Fu)return s.RED_INTEGER;if(n===Jd)return s.RG;if(n===Nu)return s.RG_INTEGER;if(n===Ou)return s.RGBA_INTEGER;if(n===bo||n===Eo||n===wo||n===Ao)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fc||n===Nc||n===Oc||n===Bc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kc||n===zc||n===Gc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kc||n===zc)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vc||n===Hc||n===Wc||n===Xc||n===qc||n===Yc||n===Jc||n===jc||n===Kc||n===Zc||n===Qc||n===$c||n===eu||n===tu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$c)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tu)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===nu||n===iu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ro)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===iu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jd||n===ru||n===su||n===au)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ru)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===su)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===au)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ia?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ay=`
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

}`;class oy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new zt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new wt({vertexShader:sy,fragmentShader:ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new Qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ly extends xs{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new oy,p=t.getContextAttributes();let m=null,S=null;const M=[],x=[],E=new Ye;let A=null;const T=new Un;T.viewport=new mt;const b=new Un;b.viewport=new mt;const v=[T,b],y=new C_;let C=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let k=M[N];return k===void 0&&(k=new Gl,M[N]=k),k.getTargetRaySpace()},this.getControllerGrip=function(N){let k=M[N];return k===void 0&&(k=new Gl,M[N]=k),k.getGripSpace()},this.getHand=function(N){let k=M[N];return k===void 0&&(k=new Gl,M[N]=k),k.getHandSpace()};function U(N){const k=x.indexOf(N.inputSource);if(k===-1)return;const ne=M[k];ne!==void 0&&(ne.update(N.inputSource,N.frame,c||a),ne.dispatchEvent({type:N.type,data:N.inputSource}))}function L(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",B);for(let N=0;N<M.length;N++){const k=x[N];k!==null&&(x[N]=null,M[N].disconnect(k))}C=null,R=null,g.reset(),e.setRenderTarget(m),d=null,f=null,h=null,i=null,S=null,Z.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",L),i.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,J=null,ee=null;p.depth&&(ee=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=p.stencil?sa:ra,J=p.stencil?ia:yr);const xe={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(xe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qt(f.textureWidth,f.textureHeight,{format:Jn,type:Ti,depthTexture:new zu(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new qt(d.framebufferWidth,d.framebufferHeight,{format:Jn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(N){for(let k=0;k<N.removed.length;k++){const ne=N.removed[k],J=x.indexOf(ne);J>=0&&(x[J]=null,M[J].disconnect(ne))}for(let k=0;k<N.added.length;k++){const ne=N.added[k];let J=x.indexOf(ne);if(J===-1){for(let xe=0;xe<M.length;xe++)if(xe>=x.length){x.push(ne),J=xe;break}else if(x[xe]===null){x[xe]=ne,J=xe;break}if(J===-1)break}const ee=M[J];ee&&ee.connect(ne)}}const I=new ie,W=new ie;function H(N,k,ne){I.setFromMatrixPosition(k.matrixWorld),W.setFromMatrixPosition(ne.matrixWorld);const J=I.distanceTo(W),ee=k.projectionMatrix.elements,xe=ne.projectionMatrix.elements,pe=ee[14]/(ee[10]-1),ge=ee[14]/(ee[10]+1),ue=(ee[9]+1)/ee[5],Ie=(ee[9]-1)/ee[5],O=(ee[8]-1)/ee[0],ze=(xe[8]+1)/xe[0],Ce=pe*O,Fe=pe*ze,le=J/(-O+ze),Ee=le*-O;if(k.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ee),N.translateZ(le),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),ee[10]===-1)N.projectionMatrix.copy(k.projectionMatrix),N.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const de=pe+le,te=ge+le,Ue=Ce-Ee,D=Fe+(J-Ee),w=ue*ge/te*de,G=Ie*ge/te*de;N.projectionMatrix.makePerspective(Ue,D,w,G,de,te),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function Y(N,k){k===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(k.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;let k=N.near,ne=N.far;g.texture!==null&&(g.depthNear>0&&(k=g.depthNear),g.depthFar>0&&(ne=g.depthFar)),y.near=b.near=T.near=k,y.far=b.far=T.far=ne,(C!==y.near||R!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,R=y.far),T.layers.mask=N.layers.mask|2,b.layers.mask=N.layers.mask|4,y.layers.mask=T.layers.mask|b.layers.mask;const J=N.parent,ee=y.cameras;Y(y,J);for(let xe=0;xe<ee.length;xe++)Y(ee[xe],J);ee.length===2?H(y,T,b):y.projectionMatrix.copy(T.projectionMatrix),X(N,y,J)};function X(N,k,ne){ne===null?N.matrix.copy(k.matrixWorld):(N.matrix.copy(ne.matrixWorld),N.matrix.invert(),N.matrix.multiply(k.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(k.projectionMatrix),N.projectionMatrixInverse.copy(k.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ou*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let F=null;function V(N,k){if(u=k.getViewerPose(c||a),_=k,u!==null){const ne=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let J=!1;ne.length!==y.cameras.length&&(y.cameras.length=0,J=!0);for(let pe=0;pe<ne.length;pe++){const ge=ne[pe];let ue=null;if(d!==null)ue=d.getViewport(ge);else{const O=h.getViewSubImage(f,ge);ue=O.viewport,pe===0&&(e.setRenderTargetTextures(S,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(S))}let Ie=v[pe];Ie===void 0&&(Ie=new Un,Ie.layers.enable(pe),Ie.viewport=new mt,v[pe]=Ie),Ie.matrix.fromArray(ge.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ge.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(ue.x,ue.y,ue.width,ue.height),pe===0&&(y.matrix.copy(Ie.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),J===!0&&y.cameras.push(Ie)}const ee=i.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const pe=h.getDepthInformation(ne[0]);pe&&pe.isValid&&pe.texture&&g.init(e,pe,i.renderState)}}for(let ne=0;ne<M.length;ne++){const J=x[ne],ee=M[ne];J!==null&&ee!==void 0&&ee.update(J,k,c||a)}F&&F(N,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),_=null}const Z=new gp;Z.setAnimationLoop(V),this.setAnimationLoop=function(N){F=N},this.dispose=function(){}}}const sr=new si,cy=new St;function uy(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,op(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,M,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===on&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===on&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),M=S.envMap,x=S.envMapRotation;M&&(p.envMap.value=M,sr.copy(x),sr.x*=-1,sr.y*=-1,sr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),p.envMapRotation.value.setFromMatrix4(cy.makeRotationFromEuler(sr)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hy(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const x=M.program;n.uniformBlockBinding(S,x)}function c(S,M){let x=i[S.id];x===void 0&&(_(S),x=u(S),i[S.id]=x,S.addEventListener("dispose",p));const E=M.program;n.updateUBOMapping(S,E);const A=e.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function u(S){const M=h();S.__bindingPointIndex=M;const x=s.createBuffer(),E=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,E,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,x),x}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=i[S.id],x=S.uniforms,E=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let A=0,T=x.length;A<T;A++){const b=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,y=b.length;v<y;v++){const C=b[v];if(d(C,A,v,E)===!0){const R=C.__offset,U=Array.isArray(C.value)?C.value:[C.value];let L=0;for(let B=0;B<U.length;B++){const I=U[B],W=g(I);typeof I=="number"||typeof I=="boolean"?(C.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,R+L,C.__data)):I.isMatrix3?(C.__data[0]=I.elements[0],C.__data[1]=I.elements[1],C.__data[2]=I.elements[2],C.__data[3]=0,C.__data[4]=I.elements[3],C.__data[5]=I.elements[4],C.__data[6]=I.elements[5],C.__data[7]=0,C.__data[8]=I.elements[6],C.__data[9]=I.elements[7],C.__data[10]=I.elements[8],C.__data[11]=0):(I.toArray(C.__data,L),L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,R,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,M,x,E){const A=S.value,T=M+"_"+x;if(E[T]===void 0)return typeof A=="number"||typeof A=="boolean"?E[T]=A:E[T]=A.clone(),!0;{const b=E[T];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return E[T]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function _(S){const M=S.uniforms;let x=0;const E=16;for(let T=0,b=M.length;T<b;T++){const v=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,C=v.length;y<C;y++){const R=v[y],U=Array.isArray(R.value)?R.value:[R.value];for(let L=0,B=U.length;L<B;L++){const I=U[L],W=g(I),H=x%E,Y=H%W.boundary,X=H+Y;x+=Y,X!==0&&E-X<W.storage&&(x+=E-X),R.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=x,x+=W.storage}}}const A=x%E;return A>0&&(x+=E-A),S.__size=x,S.__cache={},this}function g(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){const M=S.target;M.removeEventListener("dispose",p);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function m(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}class fy{constructor(e={}){const{canvas:t=Ng(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,m=null;const S=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let E=!1;this._outputColorSpace=Dn;let A=0,T=0,b=null,v=-1,y=null;const C=new mt,R=new mt;let U=null;const L=new Je(0);let B=0,I=t.width,W=t.height,H=1,Y=null,X=null;const F=new mt(0,0,I,W),V=new mt(0,0,I,W);let Z=!1;const N=new up;let k=!1,ne=!1;const J=new St,ee=new St,xe=new ie,pe=new mt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function Ie(){return b===null?H:1}let O=n;function ze(P,j){return t.getContext(P,j)}try{const P={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Du}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",se,!1),O===null){const j="webgl2";if(O=ze(j,P),O===null)throw ze(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ce,Fe,le,Ee,de,te,Ue,D,w,G,ae,$,Q,ye,_e,Me,we,oe,me,ve,Ae,Se,Ge,z;function fe(){Ce=new Mx(O),Ce.init(),Se=new ry(O,Ce),Fe=new mx(O,Ce,e,Se),le=new ny(O,Ce),Fe.reverseDepthBuffer&&f&&le.buffers.depth.setReversed(!0),Ee=new Ex(O),de=new H1,te=new iy(O,Ce,le,de,Fe,Se,Ee),Ue=new _x(x),D=new Sx(x),w=new D_(O),Ge=new dx(O,w),G=new Tx(O,w,Ee,Ge),ae=new Ax(O,G,w,Ee),me=new wx(O,Fe,te),Me=new gx(de),$=new V1(x,Ue,D,Ce,Fe,Ge,Me),Q=new uy(x,de),ye=new X1,_e=new Z1(Ce),oe=new fx(x,Ue,D,le,ae,d,l),we=new ey(x,ae,Fe),z=new hy(O,Ee,Fe,le),ve=new px(O,Ce,Ee),Ae=new bx(O,Ce,Ee),Ee.programs=$.programs,x.capabilities=Fe,x.extensions=Ce,x.properties=de,x.renderLists=ye,x.shadowMap=we,x.state=le,x.info=Ee}fe();const ce=new ly(x,O);this.xr=ce,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=Ce.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ce.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(I,W,!1))},this.getSize=function(P){return P.set(I,W)},this.setSize=function(P,j,re=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=P,W=j,t.width=Math.floor(P*H),t.height=Math.floor(j*H),re===!0&&(t.style.width=P+"px",t.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(I*H,W*H).floor()},this.setDrawingBufferSize=function(P,j,re){I=P,W=j,H=re,t.width=Math.floor(P*re),t.height=Math.floor(j*re),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(F)},this.setViewport=function(P,j,re,q){P.isVector4?F.set(P.x,P.y,P.z,P.w):F.set(P,j,re,q),le.viewport(C.copy(F).multiplyScalar(H).round())},this.getScissor=function(P){return P.copy(V)},this.setScissor=function(P,j,re,q){P.isVector4?V.set(P.x,P.y,P.z,P.w):V.set(P,j,re,q),le.scissor(R.copy(V).multiplyScalar(H).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(P){le.setScissorTest(Z=P)},this.setOpaqueSort=function(P){Y=P},this.setTransparentSort=function(P){X=P},this.getClearColor=function(P){return P.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(P=!0,j=!0,re=!0){let q=0;if(P){let K=!1;if(b!==null){const Te=b.texture.format;K=Te===Ou||Te===Nu||Te===Fu}if(K){const Te=b.texture.type,Pe=Te===Ti||Te===yr||Te===cs||Te===ia||Te===Lu||Te===Iu,ke=oe.getClearColor(),Oe=oe.getClearAlpha(),Xe=ke.r,qe=ke.g,Ve=ke.b;Pe?(_[0]=Xe,_[1]=qe,_[2]=Ve,_[3]=Oe,O.clearBufferuiv(O.COLOR,0,_)):(g[0]=Xe,g[1]=qe,g[2]=Ve,g[3]=Oe,O.clearBufferiv(O.COLOR,0,g))}else q|=O.COLOR_BUFFER_BIT}j&&(q|=O.DEPTH_BUFFER_BIT),re&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",se,!1),oe.dispose(),ye.dispose(),_e.dispose(),de.dispose(),Ue.dispose(),D.dispose(),ae.dispose(),Ge.dispose(),z.dispose(),$.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",_t),ce.removeEventListener("sessionend",tn),Vt.stop()};function Le(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const P=Ee.autoReset,j=we.enabled,re=we.autoUpdate,q=we.needsUpdate,K=we.type;fe(),Ee.autoReset=P,we.enabled=j,we.autoUpdate=re,we.needsUpdate=q,we.type=K}function se(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Re(P){const j=P.target;j.removeEventListener("dispose",Re),Ne(j)}function Ne(P){Be(P),de.remove(P)}function Be(P){const j=de.get(P).programs;j!==void 0&&(j.forEach(function(re){$.releaseProgram(re)}),P.isShaderMaterial&&$.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,re,q,K,Te){j===null&&(j=ge);const Pe=K.isMesh&&K.matrixWorld.determinant()<0,ke=ol(P,j,re,q,K);le.setMaterial(q,Pe);let Oe=re.index,Xe=1;if(q.wireframe===!0){if(Oe=G.getWireframeAttribute(re),Oe===void 0)return;Xe=2}const qe=re.drawRange,Ve=re.attributes.position;let Ze=qe.start*Xe,nt=(qe.start+qe.count)*Xe;Te!==null&&(Ze=Math.max(Ze,Te.start*Xe),nt=Math.min(nt,(Te.start+Te.count)*Xe)),Oe!==null?(Ze=Math.max(Ze,0),nt=Math.min(nt,Oe.count)):Ve!=null&&(Ze=Math.max(Ze,0),nt=Math.min(nt,Ve.count));const ct=nt-Ze;if(ct<0||ct===1/0)return;Ge.setup(K,q,ke,re,Oe);let ut,et=ve;if(Oe!==null&&(ut=w.get(Oe),et=Ae,et.setIndex(ut)),K.isMesh)q.wireframe===!0?(le.setLineWidth(q.wireframeLinewidth*Ie()),et.setMode(O.LINES)):et.setMode(O.TRIANGLES);else if(K.isLine){let He=q.linewidth;He===void 0&&(He=1),le.setLineWidth(He*Ie()),K.isLineSegments?et.setMode(O.LINES):K.isLineLoop?et.setMode(O.LINE_LOOP):et.setMode(O.LINE_STRIP)}else K.isPoints?et.setMode(O.POINTS):K.isSprite&&et.setMode(O.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)$r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))et.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const He=K._multiDrawStarts,xt=K._multiDrawCounts,Qe=K._multiDrawCount,Kt=Oe?w.get(Oe).bytesPerElement:1,Zn=de.get(q).currentProgram.getUniforms();for(let Nt=0;Nt<Qe;Nt++)Zn.setValue(O,"_gl_DrawID",Nt),et.render(He[Nt]/Kt,xt[Nt])}else if(K.isInstancedMesh)et.renderInstances(Ze,ct,K.count);else if(re.isInstancedBufferGeometry){const He=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,xt=Math.min(re.instanceCount,He);et.renderInstances(Ze,ct,xt)}else et.render(Ze,ct)};function We(P,j,re){P.transparent===!0&&P.side===xn&&P.forceSinglePass===!1?(P.side=on,P.needsUpdate=!0,wn(P,j,re),P.side=Yi,P.needsUpdate=!0,wn(P,j,re),P.side=xn):wn(P,j,re)}this.compile=function(P,j,re=null){re===null&&(re=P),m=_e.get(re),m.init(j),M.push(m),re.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),P!==re&&P.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights();const q=new Set;return P.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Te=K.material;if(Te)if(Array.isArray(Te))for(let Pe=0;Pe<Te.length;Pe++){const ke=Te[Pe];We(ke,re,K),q.add(ke)}else We(Te,re,K),q.add(Te)}),m=M.pop(),q},this.compileAsync=function(P,j,re=null){const q=this.compile(P,j,re);return new Promise(K=>{function Te(){if(q.forEach(function(Pe){de.get(Pe).currentProgram.isReady()&&q.delete(Pe)}),q.size===0){K(P);return}setTimeout(Te,10)}Ce.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let st=null;function lt(P){st&&st(P)}function _t(){Vt.stop()}function tn(){Vt.start()}const Vt=new gp;Vt.setAnimationLoop(lt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(P){st=P,ce.setAnimationLoop(P),P===null?Vt.stop():Vt.start()},ce.addEventListener("sessionstart",_t),ce.addEventListener("sessionend",tn),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(j),j=ce.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,j,b),m=_e.get(P,M.length),m.init(j),M.push(m),ee.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),N.setFromProjectionMatrix(ee),ne=this.localClippingEnabled,k=Me.init(this.clippingPlanes,ne),p=ye.get(P,S.length),p.init(),S.push(p),ce.enabled===!0&&ce.isPresenting===!0){const Te=x.xr.getDepthSensingMesh();Te!==null&&pn(Te,j,-1/0,x.sortObjects)}pn(P,j,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(Y,X),ue=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ue&&oe.addToRenderList(p,P),this.info.render.frame++,k===!0&&Me.beginShadows();const re=m.state.shadowsArray;we.render(re,P,j),k===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=p.opaque,K=p.transmissive;if(m.setupLights(),j.isArrayCamera){const Te=j.cameras;if(K.length>0)for(let Pe=0,ke=Te.length;Pe<ke;Pe++){const Oe=Te[Pe];Kn(q,K,P,Oe)}ue&&oe.render(P);for(let Pe=0,ke=Te.length;Pe<ke;Pe++){const Oe=Te[Pe];kn(p,P,Oe,Oe.viewport)}}else K.length>0&&Kn(q,K,P,j),ue&&oe.render(P),kn(p,P,j);b!==null&&T===0&&(te.updateMultisampleRenderTarget(b),te.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(x,P,j),Ge.resetDefaultState(),v=-1,y=null,M.pop(),M.length>0?(m=M[M.length-1],k===!0&&Me.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function pn(P,j,re,q){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)re=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||N.intersectsSprite(P)){q&&pe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ee);const Pe=ae.update(P),ke=P.material;ke.visible&&p.push(P,Pe,ke,re,pe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||N.intersectsObject(P))){const Pe=ae.update(P),ke=P.material;if(q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),pe.copy(P.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),pe.copy(Pe.boundingSphere.center)),pe.applyMatrix4(P.matrixWorld).applyMatrix4(ee)),Array.isArray(ke)){const Oe=Pe.groups;for(let Xe=0,qe=Oe.length;Xe<qe;Xe++){const Ve=Oe[Xe],Ze=ke[Ve.materialIndex];Ze&&Ze.visible&&p.push(P,Pe,Ze,re,pe.z,Ve)}}else ke.visible&&p.push(P,Pe,ke,re,pe.z,null)}}const Te=P.children;for(let Pe=0,ke=Te.length;Pe<ke;Pe++)pn(Te[Pe],j,re,q)}function kn(P,j,re,q){const K=P.opaque,Te=P.transmissive,Pe=P.transparent;m.setupLightsView(re),k===!0&&Me.setGlobalState(x.clippingPlanes,re),q&&le.viewport(C.copy(q)),K.length>0&&nn(K,j,re),Te.length>0&&nn(Te,j,re),Pe.length>0&&nn(Pe,j,re),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Kn(P,j,re,q){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new qt(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?Jt:Ti,minFilter:zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const Te=m.state.transmissionRenderTarget[q.id],Pe=q.viewport||C;Te.setSize(Pe.z*x.transmissionResolutionScale,Pe.w*x.transmissionResolutionScale);const ke=x.getRenderTarget();x.setRenderTarget(Te),x.getClearColor(L),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),ue&&oe.render(re);const Oe=x.toneMapping;x.toneMapping=Wi;const Xe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),k===!0&&Me.setGlobalState(x.clippingPlanes,q),nn(P,re,q),te.updateMultisampleRenderTarget(Te),te.updateRenderTargetMipmap(Te),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ve=0,Ze=j.length;Ve<Ze;Ve++){const nt=j[Ve],ct=nt.object,ut=nt.geometry,et=nt.material,He=nt.group;if(et.side===xn&&ct.layers.test(q.layers)){const xt=et.side;et.side=on,et.needsUpdate=!0,Pt(ct,re,q,ut,et,He),et.side=xt,et.needsUpdate=!0,qe=!0}}qe===!0&&(te.updateMultisampleRenderTarget(Te),te.updateRenderTargetMipmap(Te))}x.setRenderTarget(ke),x.setClearColor(L,B),Xe!==void 0&&(q.viewport=Xe),x.toneMapping=Oe}function nn(P,j,re){const q=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Te=P.length;K<Te;K++){const Pe=P[K],ke=Pe.object,Oe=Pe.geometry,Xe=Pe.group;let qe=Pe.material;qe.allowOverride===!0&&q!==null&&(qe=q),ke.layers.test(re.layers)&&Pt(ke,j,re,Oe,qe,Xe)}}function Pt(P,j,re,q,K,Te){P.onBeforeRender(x,j,re,q,K,Te),P.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(x,j,re,q,P,Te),K.transparent===!0&&K.side===xn&&K.forceSinglePass===!1?(K.side=on,K.needsUpdate=!0,x.renderBufferDirect(re,j,q,K,P,Te),K.side=Yi,K.needsUpdate=!0,x.renderBufferDirect(re,j,q,K,P,Te),K.side=xn):x.renderBufferDirect(re,j,q,K,P,Te),P.onAfterRender(x,j,re,q,K,Te)}function wn(P,j,re){j.isScene!==!0&&(j=ge);const q=de.get(P),K=m.state.lights,Te=m.state.shadowsArray,Pe=K.state.version,ke=$.getParameters(P,K.state,Te,j,re),Oe=$.getProgramCacheKey(ke);let Xe=q.programs;q.environment=P.isMeshStandardMaterial?j.environment:null,q.fog=j.fog,q.envMap=(P.isMeshStandardMaterial?D:Ue).get(P.envMap||q.environment),q.envMapRotation=q.environment!==null&&P.envMap===null?j.environmentRotation:P.envMapRotation,Xe===void 0&&(P.addEventListener("dispose",Re),Xe=new Map,q.programs=Xe);let qe=Xe.get(Oe);if(qe!==void 0){if(q.currentProgram===qe&&q.lightsStateVersion===Pe)return Ar(P,ke),qe}else ke.uniforms=$.getUniforms(P),P.onBeforeCompile(ke,x),qe=$.acquireProgram(ke,Oe),Xe.set(Oe,qe),q.uniforms=ke.uniforms;const Ve=q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ve.clippingPlanes=Me.uniform),Ar(P,ke),q.needsLights=Rr(P),q.lightsStateVersion=Pe,q.needsLights&&(Ve.ambientLightColor.value=K.state.ambient,Ve.lightProbe.value=K.state.probe,Ve.directionalLights.value=K.state.directional,Ve.directionalLightShadows.value=K.state.directionalShadow,Ve.spotLights.value=K.state.spot,Ve.spotLightShadows.value=K.state.spotShadow,Ve.rectAreaLights.value=K.state.rectArea,Ve.ltc_1.value=K.state.rectAreaLTC1,Ve.ltc_2.value=K.state.rectAreaLTC2,Ve.pointLights.value=K.state.point,Ve.pointLightShadows.value=K.state.pointShadow,Ve.hemisphereLights.value=K.state.hemi,Ve.directionalShadowMap.value=K.state.directionalShadowMap,Ve.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ve.spotShadowMap.value=K.state.spotShadowMap,Ve.spotLightMatrix.value=K.state.spotLightMatrix,Ve.spotLightMap.value=K.state.spotLightMap,Ve.pointShadowMap.value=K.state.pointShadowMap,Ve.pointShadowMatrix.value=K.state.pointShadowMatrix),q.currentProgram=qe,q.uniformsList=null,qe}function Es(P){if(P.uniformsList===null){const j=P.currentProgram.getUniforms();P.uniformsList=Co.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function Ar(P,j){const re=de.get(P);re.outputColorSpace=j.outputColorSpace,re.batching=j.batching,re.batchingColor=j.batchingColor,re.instancing=j.instancing,re.instancingColor=j.instancingColor,re.instancingMorph=j.instancingMorph,re.skinning=j.skinning,re.morphTargets=j.morphTargets,re.morphNormals=j.morphNormals,re.morphColors=j.morphColors,re.morphTargetsCount=j.morphTargetsCount,re.numClippingPlanes=j.numClippingPlanes,re.numIntersection=j.numClipIntersection,re.vertexAlphas=j.vertexAlphas,re.vertexTangents=j.vertexTangents,re.toneMapping=j.toneMapping}function ol(P,j,re,q,K){j.isScene!==!0&&(j=ge),te.resetTextureUnits();const Te=j.fog,Pe=q.isMeshStandardMaterial?j.environment:null,ke=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Sr,Oe=(q.isMeshStandardMaterial?D:Ue).get(q.envMap||Pe),Xe=q.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,qe=!!re.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ve=!!re.morphAttributes.position,Ze=!!re.morphAttributes.normal,nt=!!re.morphAttributes.color;let ct=Wi;q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ct=x.toneMapping);const ut=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,et=ut!==void 0?ut.length:0,He=de.get(q),xt=m.state.lights;if(k===!0&&(ne===!0||P!==y)){const Ut=P===y&&q.id===v;Me.setState(q,P,Ut)}let Qe=!1;q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==xt.state.version||He.outputColorSpace!==ke||K.isBatchedMesh&&He.batching===!1||!K.isBatchedMesh&&He.batching===!0||K.isBatchedMesh&&He.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&He.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&He.instancing===!1||!K.isInstancedMesh&&He.instancing===!0||K.isSkinnedMesh&&He.skinning===!1||!K.isSkinnedMesh&&He.skinning===!0||K.isInstancedMesh&&He.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&He.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&He.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&He.instancingMorph===!1&&K.morphTexture!==null||He.envMap!==Oe||q.fog===!0&&He.fog!==Te||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Me.numPlanes||He.numIntersection!==Me.numIntersection)||He.vertexAlphas!==Xe||He.vertexTangents!==qe||He.morphTargets!==Ve||He.morphNormals!==Ze||He.morphColors!==nt||He.toneMapping!==ct||He.morphTargetsCount!==et)&&(Qe=!0):(Qe=!0,He.__version=q.version);let Kt=He.currentProgram;Qe===!0&&(Kt=wn(q,j,K));let Zn=!1,Nt=!1,Ht=!1;const ht=Kt.getUniforms(),Ot=He.uniforms;if(le.useProgram(Kt.program)&&(Zn=!0,Nt=!0,Ht=!0),q.id!==v&&(v=q.id,Nt=!0),Zn||y!==P){le.buffers.depth.getReversed()?(J.copy(P.projectionMatrix),Bg(J),kg(J),ht.setValue(O,"projectionMatrix",J)):ht.setValue(O,"projectionMatrix",P.projectionMatrix),ht.setValue(O,"viewMatrix",P.matrixWorldInverse);const At=ht.map.cameraPosition;At!==void 0&&At.setValue(O,xe.setFromMatrixPosition(P.matrixWorld)),Fe.logarithmicDepthBuffer&&ht.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ht.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),y!==P&&(y=P,Nt=!0,Ht=!0)}if(K.isSkinnedMesh){ht.setOptional(O,K,"bindMatrix"),ht.setOptional(O,K,"bindMatrixInverse");const Ut=K.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ht.setValue(O,"boneTexture",Ut.boneTexture,te))}K.isBatchedMesh&&(ht.setOptional(O,K,"batchingTexture"),ht.setValue(O,"batchingTexture",K._matricesTexture,te),ht.setOptional(O,K,"batchingIdTexture"),ht.setValue(O,"batchingIdTexture",K._indirectTexture,te),ht.setOptional(O,K,"batchingColorTexture"),K._colorsTexture!==null&&ht.setValue(O,"batchingColorTexture",K._colorsTexture,te));const Dt=re.morphAttributes;if((Dt.position!==void 0||Dt.normal!==void 0||Dt.color!==void 0)&&me.update(K,re,Kt),(Nt||He.receiveShadow!==K.receiveShadow)&&(He.receiveShadow=K.receiveShadow,ht.setValue(O,"receiveShadow",K.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ot.envMap.value=Oe,Ot.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&j.environment!==null&&(Ot.envMapIntensity.value=j.environmentIntensity),Nt&&(ht.setValue(O,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Ta(Ot,Ht),Te&&q.fog===!0&&Q.refreshFogUniforms(Ot,Te),Q.refreshMaterialUniforms(Ot,q,H,W,m.state.transmissionRenderTarget[P.id]),Co.upload(O,Es(He),Ot,te)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Co.upload(O,Es(He),Ot,te),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ht.setValue(O,"center",K.center),ht.setValue(O,"modelViewMatrix",K.modelViewMatrix),ht.setValue(O,"normalMatrix",K.normalMatrix),ht.setValue(O,"modelMatrix",K.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ut=q.uniformsGroups;for(let At=0,Ai=Ut.length;At<Ai;At++){const zn=Ut[At];z.update(zn,Kt),z.bind(zn,Kt)}}return Kt}function Ta(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function Rr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,j,re){const q=de.get(P);q.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),de.get(P.texture).__webglTexture=j,de.get(P.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:re,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,j){const re=de.get(P);re.__webglFramebuffer=j,re.__useDefaultFramebuffer=j===void 0};const ws=O.createFramebuffer();this.setRenderTarget=function(P,j=0,re=0){b=P,A=j,T=re;let q=!0,K=null,Te=!1,Pe=!1;if(P){const Oe=de.get(P);if(Oe.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(Oe.__webglFramebuffer===void 0)te.setupRenderTarget(P);else if(Oe.__hasExternalTextures)te.rebindTextures(P,de.get(P.texture).__webglTexture,de.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ve=P.depthTexture;if(Oe.__boundDepthTexture!==Ve){if(Ve!==null&&de.has(Ve)&&(P.width!==Ve.image.width||P.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(P)}}const Xe=P.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Pe=!0);const qe=de.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(qe[j])?K=qe[j][re]:K=qe[j],Te=!0):P.samples>0&&te.useMultisampledRTT(P)===!1?K=de.get(P).__webglMultisampledFramebuffer:Array.isArray(qe)?K=qe[re]:K=qe,C.copy(P.viewport),R.copy(P.scissor),U=P.scissorTest}else C.copy(F).multiplyScalar(H).floor(),R.copy(V).multiplyScalar(H).floor(),U=Z;if(re!==0&&(K=ws),le.bindFramebuffer(O.FRAMEBUFFER,K)&&q&&le.drawBuffers(P,K),le.viewport(C),le.scissor(R),le.setScissorTest(U),Te){const Oe=de.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+j,Oe.__webglTexture,re)}else if(Pe){const Oe=de.get(P.texture),Xe=j;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.__webglTexture,re,Xe)}else if(P!==null&&re!==0){const Oe=de.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Oe.__webglTexture,re)}v=-1},this.readRenderTargetPixels=function(P,j,re,q,K,Te,Pe,ke=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=de.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){le.bindFramebuffer(O.FRAMEBUFFER,Oe);try{const Xe=P.textures[ke],qe=Xe.format,Ve=Xe.type;if(!Fe.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-q&&re>=0&&re<=P.height-K&&(P.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ke),O.readPixels(j,re,q,K,Se.convert(qe),Se.convert(Ve),Te))}finally{const Xe=b!==null?de.get(b).__webglFramebuffer:null;le.bindFramebuffer(O.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(P,j,re,q,K,Te,Pe,ke=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=de.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe)if(j>=0&&j<=P.width-q&&re>=0&&re<=P.height-K){le.bindFramebuffer(O.FRAMEBUFFER,Oe);const Xe=P.textures[ke],qe=Xe.format,Ve=Xe.type;if(!Fe.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ze),O.bufferData(O.PIXEL_PACK_BUFFER,Te.byteLength,O.STREAM_READ),P.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ke),O.readPixels(j,re,q,K,Se.convert(qe),Se.convert(Ve),0);const nt=b!==null?de.get(b).__webglFramebuffer:null;le.bindFramebuffer(O.FRAMEBUFFER,nt);const ct=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Og(O,ct,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ze),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Te),O.deleteBuffer(Ze),O.deleteSync(ct),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,j=null,re=0){const q=Math.pow(2,-re),K=Math.floor(P.image.width*q),Te=Math.floor(P.image.height*q),Pe=j!==null?j.x:0,ke=j!==null?j.y:0;te.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,re,0,0,Pe,ke,K,Te),le.unbindTexture()};const ll=O.createFramebuffer(),ba=O.createFramebuffer();this.copyTextureToTexture=function(P,j,re=null,q=null,K=0,Te=null){Te===null&&(K!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=K,K=0):Te=0);let Pe,ke,Oe,Xe,qe,Ve,Ze,nt,ct;const ut=P.isCompressedTexture?P.mipmaps[Te]:P.image;if(re!==null)Pe=re.max.x-re.min.x,ke=re.max.y-re.min.y,Oe=re.isBox3?re.max.z-re.min.z:1,Xe=re.min.x,qe=re.min.y,Ve=re.isBox3?re.min.z:0;else{const Dt=Math.pow(2,-K);Pe=Math.floor(ut.width*Dt),ke=Math.floor(ut.height*Dt),P.isDataArrayTexture?Oe=ut.depth:P.isData3DTexture?Oe=Math.floor(ut.depth*Dt):Oe=1,Xe=0,qe=0,Ve=0}q!==null?(Ze=q.x,nt=q.y,ct=q.z):(Ze=0,nt=0,ct=0);const et=Se.convert(j.format),He=Se.convert(j.type);let xt;j.isData3DTexture?(te.setTexture3D(j,0),xt=O.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(te.setTexture2DArray(j,0),xt=O.TEXTURE_2D_ARRAY):(te.setTexture2D(j,0),xt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment);const Qe=O.getParameter(O.UNPACK_ROW_LENGTH),Kt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Zn=O.getParameter(O.UNPACK_SKIP_PIXELS),Nt=O.getParameter(O.UNPACK_SKIP_ROWS),Ht=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ut.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ut.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Xe),O.pixelStorei(O.UNPACK_SKIP_ROWS,qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ve);const ht=P.isDataArrayTexture||P.isData3DTexture,Ot=j.isDataArrayTexture||j.isData3DTexture;if(P.isDepthTexture){const Dt=de.get(P),Ut=de.get(j),At=de.get(Dt.__renderTarget),Ai=de.get(Ut.__renderTarget);le.bindFramebuffer(O.READ_FRAMEBUFFER,At.__webglFramebuffer),le.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let zn=0;zn<Oe;zn++)ht&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,de.get(P).__webglTexture,K,Ve+zn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,de.get(j).__webglTexture,Te,ct+zn)),O.blitFramebuffer(Xe,qe,Pe,ke,Ze,nt,Pe,ke,O.DEPTH_BUFFER_BIT,O.NEAREST);le.bindFramebuffer(O.READ_FRAMEBUFFER,null),le.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(K!==0||P.isRenderTargetTexture||de.has(P)){const Dt=de.get(P),Ut=de.get(j);le.bindFramebuffer(O.READ_FRAMEBUFFER,ll),le.bindFramebuffer(O.DRAW_FRAMEBUFFER,ba);for(let At=0;At<Oe;At++)ht?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Dt.__webglTexture,K,Ve+At):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Dt.__webglTexture,K),Ot?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ut.__webglTexture,Te,ct+At):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ut.__webglTexture,Te),K!==0?O.blitFramebuffer(Xe,qe,Pe,ke,Ze,nt,Pe,ke,O.COLOR_BUFFER_BIT,O.NEAREST):Ot?O.copyTexSubImage3D(xt,Te,Ze,nt,ct+At,Xe,qe,Pe,ke):O.copyTexSubImage2D(xt,Te,Ze,nt,Xe,qe,Pe,ke);le.bindFramebuffer(O.READ_FRAMEBUFFER,null),le.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ot?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(xt,Te,Ze,nt,ct,Pe,ke,Oe,et,He,ut.data):j.isCompressedArrayTexture?O.compressedTexSubImage3D(xt,Te,Ze,nt,ct,Pe,ke,Oe,et,ut.data):O.texSubImage3D(xt,Te,Ze,nt,ct,Pe,ke,Oe,et,He,ut):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Te,Ze,nt,Pe,ke,et,He,ut.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Te,Ze,nt,ut.width,ut.height,et,ut.data):O.texSubImage2D(O.TEXTURE_2D,Te,Ze,nt,Pe,ke,et,He,ut);O.pixelStorei(O.UNPACK_ROW_LENGTH,Qe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Kt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Zn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Nt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ht),Te===0&&j.generateMipmaps&&O.generateMipmap(xt),le.unbindTexture()},this.copyTextureToTexture3D=function(P,j,re=null,q=null,K=0){return $r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,j,re,q,K)},this.initRenderTarget=function(P){de.get(P).__webglFramebuffer===void 0&&te.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?te.setTextureCube(P,0):P.isData3DTexture?te.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?te.setTexture2DArray(P,0):te.setTexture2D(P,0),le.unbindTexture()},this.resetState=function(){A=0,T=0,b=null,le.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class dy extends E_{constructor(e){super(e),this.type=Jt}parse(e){const a=function(b,v){switch(b){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(v||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(v||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(v||""))}},u=`
`,h=function(b,v,y){v=v||1024;let R=b.pos,U=-1,L=0,B="",I=String.fromCharCode.apply(null,new Uint16Array(b.subarray(R,R+128)));for(;0>(U=I.indexOf(u))&&L<v&&R<b.byteLength;)B+=I,L+=I.length,R+=128,I+=String.fromCharCode.apply(null,new Uint16Array(b.subarray(R,R+128)));return-1<U?(b.pos+=L+U+1,B+I.slice(0,U)):!1},f=function(b){const v=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,L={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let B,I;for((b.pos>=b.byteLength||!(B=h(b)))&&a(1,"no header found"),(I=B.match(v))||a(3,"bad initial token"),L.valid|=1,L.programtype=I[1],L.string+=B+`
`;B=h(b),B!==!1;){if(L.string+=B+`
`,B.charAt(0)==="#"){L.comments+=B+`
`;continue}if((I=B.match(y))&&(L.gamma=parseFloat(I[1])),(I=B.match(C))&&(L.exposure=parseFloat(I[1])),(I=B.match(R))&&(L.valid|=2,L.format=I[1]),(I=B.match(U))&&(L.valid|=4,L.height=parseInt(I[1],10),L.width=parseInt(I[2],10)),L.valid&2&&L.valid&4)break}return L.valid&2||a(3,"missing format specifier"),L.valid&4||a(3,"missing image size specifier"),L},d=function(b,v,y){const C=v;if(C<8||C>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);C!==(b[2]<<8|b[3])&&a(3,"wrong scanline width");const R=new Uint8Array(4*v*y);R.length||a(4,"unable to allocate buffer space");let U=0,L=0;const B=4*C,I=new Uint8Array(4),W=new Uint8Array(B);let H=y;for(;H>0&&L<b.byteLength;){L+4>b.byteLength&&a(1),I[0]=b[L++],I[1]=b[L++],I[2]=b[L++],I[3]=b[L++],(I[0]!=2||I[1]!=2||(I[2]<<8|I[3])!=C)&&a(3,"bad rgbe scanline format");let Y=0,X;for(;Y<B&&L<b.byteLength;){X=b[L++];const V=X>128;if(V&&(X-=128),(X===0||Y+X>B)&&a(3,"bad scanline data"),V){const Z=b[L++];for(let N=0;N<X;N++)W[Y++]=Z}else W.set(b.subarray(L,L+X),Y),Y+=X,L+=X}const F=C;for(let V=0;V<F;V++){let Z=0;R[U]=W[V+Z],Z+=C,R[U+1]=W[V+Z],Z+=C,R[U+2]=W[V+Z],Z+=C,R[U+3]=W[V+Z],U+=4}H--}return R},_=function(b,v,y,C){const R=b[v+3],U=Math.pow(2,R-128)/255;y[C+0]=b[v+0]*U,y[C+1]=b[v+1]*U,y[C+2]=b[v+2]*U,y[C+3]=1},g=function(b,v,y,C){const R=b[v+3],U=Math.pow(2,R-128)/255;y[C+0]=Ba.toHalfFloat(Math.min(b[v+0]*U,65504)),y[C+1]=Ba.toHalfFloat(Math.min(b[v+1]*U,65504)),y[C+2]=Ba.toHalfFloat(Math.min(b[v+2]*U,65504)),y[C+3]=Ba.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const m=f(p),S=m.width,M=m.height,x=d(p.subarray(p.pos),S,M);let E,A,T;switch(this.type){case Ln:T=x.length/4;const b=new Float32Array(T*4);for(let y=0;y<T;y++)_(x,y*4,b,y*4);E=b,A=Ln;break;case Jt:T=x.length/4;const v=new Uint16Array(T*4);for(let y=0;y<T;y++)g(x,y*4,v,y*4);E=v,A=Jt;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:S,height:M,data:E,header:m.string,gamma:m.gamma,exposure:m.exposure,type:A}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){switch(a.type){case Ln:case Jt:a.colorSpace=Sr,a.minFilter=It,a.magFilter=It,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,i)}}const pr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ss{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const py=new pp(-1,1,1,-1,0,1);class my extends Bn{constructor(){super(),this.setAttribute("position",new On([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new On([0,2,0,0,2,0],2))}}const gy=new my;class Wu{constructor(e){this._mesh=new $t(gy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,py)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Sp extends Ss{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ei.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Wu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Cf extends Ss{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class _y extends Ss{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class vy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ye);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Sp(pr),this.copyPass.material.blending=Tt,this.clock=new mp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Cf!==void 0&&(a instanceof Cf?n=!0:a instanceof _y&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xy extends Ss{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Je}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const yy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Je(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class hs extends Ss{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ye(e.x,e.y):new Ye(256,256),this.clearColor=new Je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,a,{type:Jt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new qt(r,a,{type:Jt});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new qt(r,a,{type:Jt});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=yy;this.highPassUniforms=ei.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ye(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new ie(1,1,1),new ie(1,1,1),new ie(1,1,1),new ie(1,1,1),new ie(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ei.clone(pr.uniforms),this.blendMaterial=new wt({uniforms:this.copyUniforms,vertexShader:pr.vertexShader,fragmentShader:pr.fragmentShader,blending:Ec,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Je,this._oldClearAlpha=1,this._basic=new Mr,this._fsQuad=new Wu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ye(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=hs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=hs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ye(.5,.5)},direction:{value:new Ye(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}hs.BlurDirectionX=new Ye(1,0);hs.BlurDirectionY=new Ye(0,1);const Qn={defines:{MAX_STEP:0,PERSPECTIVE_CAMERA:!0,DISTANCE_ATTENUATION:!0,FRESNEL:!0,INFINITE_THICK:!1,SELECTIVE:!1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tMetalness:{value:null},tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Ye},cameraProjectionMatrix:{value:new St},cameraInverseProjectionMatrix:{value:new St},opacity:{value:.5},maxDistance:{value:180},cameraRange:{value:0},thickness:{value:.018}},vertexShader:`

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
	`},eo={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`

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

	`},Ni={uniforms:{tDiffuse:{value:null},resolution:{value:new Ye},opacity:{value:.5}},vertexShader:`

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
	`};class gi extends Ss{constructor({renderer:e,scene:t,camera:n,width:i=512,height:r=512,selects:a=null,bouncing:o=!1,groundReflector:l=null}){super(),this.width=i,this.height=r,this.clear=!0,this.renderer=e,this.scene=t,this.camera=n,this.groundReflector=l,this.opacity=Qn.uniforms.opacity.value,this.output=0,this.maxDistance=Qn.uniforms.maxDistance.value,this.thickness=Qn.uniforms.thickness.value,this.tempColor=new Je,this._selects=a,this.selective=Array.isArray(this._selects),Object.defineProperty(this,"selects",{get(){return this._selects},set(u){this._selects!==u&&(this._selects=u,Array.isArray(u)?(this.selective=!0,this.ssrMaterial.defines.SELECTIVE=!0,this.ssrMaterial.needsUpdate=!0):(this.selective=!1,this.ssrMaterial.defines.SELECTIVE=!1,this.ssrMaterial.needsUpdate=!0))}}),this._bouncing=o,Object.defineProperty(this,"bouncing",{get(){return this._bouncing},set(u){this._bouncing!==u&&(this._bouncing=u,u?this.ssrMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture:this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture)}}),this.blur=!0,this._distanceAttenuation=Qn.defines.DISTANCE_ATTENUATION,Object.defineProperty(this,"distanceAttenuation",{get(){return this._distanceAttenuation},set(u){this._distanceAttenuation!==u&&(this._distanceAttenuation=u,this.ssrMaterial.defines.DISTANCE_ATTENUATION=u,this.ssrMaterial.needsUpdate=!0)}}),this._fresnel=Qn.defines.FRESNEL,Object.defineProperty(this,"fresnel",{get(){return this._fresnel},set(u){this._fresnel!==u&&(this._fresnel=u,this.ssrMaterial.defines.FRESNEL=u,this.ssrMaterial.needsUpdate=!0)}}),this._infiniteThick=Qn.defines.INFINITE_THICK,Object.defineProperty(this,"infiniteThick",{get(){return this._infiniteThick},set(u){this._infiniteThick!==u&&(this._infiniteThick=u,this.ssrMaterial.defines.INFINITE_THICK=u,this.ssrMaterial.needsUpdate=!0)}});const c=new zu;c.type=cs,c.minFilter=ft,c.magFilter=ft,this.beautyRenderTarget=new qt(this.width,this.height,{minFilter:ft,magFilter:ft,type:Jt,depthTexture:c,depthBuffer:!0}),this.prevRenderTarget=new qt(this.width,this.height,{minFilter:ft,magFilter:ft}),this.normalRenderTarget=new qt(this.width,this.height,{minFilter:ft,magFilter:ft,type:Jt}),this.metalnessRenderTarget=new qt(this.width,this.height,{minFilter:ft,magFilter:ft,type:Jt}),this.ssrRenderTarget=new qt(this.width,this.height,{minFilter:ft,magFilter:ft}),this.blurRenderTarget=this.ssrRenderTarget.clone(),this.blurRenderTarget2=this.ssrRenderTarget.clone(),this.ssrMaterial=new wt({defines:Object.assign({},Qn.defines,{MAX_STEP:Math.sqrt(this.width*this.width+this.height*this.height)}),uniforms:ei.clone(Qn.uniforms),vertexShader:Qn.vertexShader,fragmentShader:Qn.fragmentShader,blending:Tt}),this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssrMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssrMaterial.defines.SELECTIVE=this.selective,this.ssrMaterial.needsUpdate=!0,this.ssrMaterial.uniforms.tMetalness.value=this.metalnessRenderTarget.texture,this.ssrMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.ssrMaterial.uniforms.cameraNear.value=this.camera.near,this.ssrMaterial.uniforms.cameraFar.value=this.camera.far,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.ssrMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new y_,this.normalMaterial.blending=Tt,this.metalnessOnMaterial=new Mr({color:"white"}),this.metalnessOffMaterial=new Mr({color:"black"}),this.blurMaterial=new wt({defines:Object.assign({},Ni.defines),uniforms:ei.clone(Ni.uniforms),vertexShader:Ni.vertexShader,fragmentShader:Ni.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.blurMaterial2=new wt({defines:Object.assign({},Ni.defines),uniforms:ei.clone(Ni.uniforms),vertexShader:Ni.vertexShader,fragmentShader:Ni.fragmentShader}),this.blurMaterial2.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.blurMaterial2.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new wt({defines:Object.assign({},eo.defines),uniforms:ei.clone(eo.uniforms),vertexShader:eo.vertexShader,fragmentShader:eo.fragmentShader,blending:Tt}),this.depthRenderMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new wt({uniforms:ei.clone(pr.uniforms),vertexShader:pr.vertexShader,fragmentShader:pr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ta,blendDst:na,blendEquation:vi,blendSrcAlpha:ta,blendDstAlpha:na,blendEquationAlpha:vi}),this.fsQuad=new Wu(null),this.originalClearColor=new Je}dispose(){this.beautyRenderTarget.dispose(),this.prevRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.metalnessRenderTarget.dispose(),this.ssrRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.blurRenderTarget2.dispose(),this.normalMaterial.dispose(),this.metalnessOnMaterial.dispose(),this.metalnessOffMaterial.dispose(),this.blurMaterial.dispose(),this.blurMaterial2.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t){switch(e.setRenderTarget(this.beautyRenderTarget),e.clear(),this.groundReflector&&(this.groundReflector.visible=!1,this.groundReflector.doRender(this.renderer,this.scene,this.camera),this.groundReflector.visible=!0),e.render(this.scene,this.camera),this.groundReflector&&(this.groundReflector.visible=!1),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,0,0),this.selective&&this._renderMetalness(e,this.metalnessOnMaterial,this.metalnessRenderTarget,0,0),this.ssrMaterial.uniforms.opacity.value=this.opacity,this.ssrMaterial.uniforms.maxDistance.value=this.maxDistance,this.ssrMaterial.uniforms.thickness.value=this.thickness,this._renderPass(e,this.ssrMaterial,this.ssrRenderTarget),this.blur&&(this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this._renderPass(e,this.blurMaterial2,this.blurRenderTarget2)),this.output){case gi.OUTPUT.Default:this.bouncing?(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=Tt,this._renderPass(e,this.copyMaterial,this.prevRenderTarget),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=Si,this._renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture,this.copyMaterial.blending=Tt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t)):(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=Tt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=Si,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t));break;case gi.OUTPUT.SSR:this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=Tt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.bouncing&&(this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=Tt,this._renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=Si,this._renderPass(e,this.copyMaterial,this.prevRenderTarget));break;case gi.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=Tt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case gi.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case gi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Tt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case gi.OUTPUT.Metalness:this.copyMaterial.uniforms.tDiffuse.value=this.metalnessRenderTarget.texture,this.copyMaterial.blending=Tt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSRPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssrMaterial.defines.MAX_STEP=Math.sqrt(e*e+t*t),this.ssrMaterial.needsUpdate=!0,this.beautyRenderTarget.setSize(e,t),this.prevRenderTarget.setSize(e,t),this.ssrRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.metalnessRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.blurRenderTarget2.setSize(e,t),this.ssrMaterial.uniforms.resolution.value.set(e,t),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t),this.blurMaterial2.uniforms.resolution.value.set(e,t)}_renderPass(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));const a=e.getClearAlpha(this.tempColor),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));const a=e.getClearAlpha(this.tempColor),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}_renderMetalness(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));const a=e.getClearAlpha(this.tempColor),o=e.autoClear,l=this.scene.background,c=this.scene.fog;e.setRenderTarget(n),e.autoClear=!1,this.scene.background=null,this.scene.fog=null,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.traverseVisible(u=>{u._SSRPassBackupMaterial=u.material,this._selects.includes(u)?u.material=this.metalnessOnMaterial:u.material=this.metalnessOffMaterial}),e.render(this.scene,this.camera),this.scene.traverseVisible(u=>{u.material=u._SSRPassBackupMaterial}),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a),this.scene.background=l,this.scene.fog=c}}gi.OUTPUT={Default:0,SSR:1,Beauty:3,Depth:4,Normal:5,Metalness:7};function mi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Mp(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fs={duration:.5,overwrite:!1,delay:0},Xu,Gt,dt,In=1e8,ot=1/In,hu=Math.PI*2,Sy=hu/4,My=0,Tp=Math.sqrt,Ty=Math.cos,by=Math.sin,Ft=function(e){return typeof e=="string"},vt=function(e){return typeof e=="function"},bi=function(e){return typeof e=="number"},qu=function(e){return typeof e>"u"},ai=function(e){return typeof e=="object"},ln=function(e){return e!==!1},Yu=function(){return typeof window<"u"},to=function(e){return vt(e)||Ft(e)},bp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jt=Array.isArray,fu=/(?:-?\.?\d|\.)+/gi,Ep=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,jl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wp=/[+-]=-?[.\d]+/,Ap=/[^,'"\[\]\s]+/gi,Ey=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pt,$n,du,Ju,bn={},Go={},Rp,Cp=function(e){return(Go=ds(e,bn))&&fn},ju=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},aa=function(e,t){return!t&&console.warn(e)},Pp=function(e,t){return e&&(bn[e]=t)&&Go&&(Go[e]=t)||bn},oa=function(){return 0},wy={suppressEvents:!0,isStart:!0,kill:!1},Po={suppressEvents:!0,kill:!1},Ay={suppressEvents:!0},Ku={},Xi=[],pu={},Dp,vn={},Kl={},Pf=30,Do=[],Zu="",Qu=function(e){var t=e[0],n,i;if(ai(t)||vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Do.length;i--&&!Do[i].targetTest(t););n=Do[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new tm(e[i],n)))||e.splice(i,1);return e},mr=function(e){return e._gsap||Qu(Fn(e))[0]._gsap},Up=function(e,t,n){return(n=e[t])&&vt(n)?e[t]():qu(n)&&e.getAttribute&&e.getAttribute(t)||n},cn=function(e,t){return(e=e.split(",")).forEach(t)||e},yt=function(e){return Math.round(e*1e5)/1e5||0},Et=function(e){return Math.round(e*1e7)/1e7||0},ts=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ry=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Vo=function(){var e=Xi.length,t=Xi.slice(0),n,i;for(pu={},Xi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},$u=function(e){return!!(e._initted||e._startAt||e.add)},Lp=function(e,t,n,i){Xi.length&&!Gt&&Vo(),e.render(t,n,!!(Gt&&t<0&&$u(e))),Xi.length&&!Gt&&Vo()},Ip=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ap).length<2?t:Ft(e)?e.trim():e},Fp=function(e){return e},En=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Cy=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ds=function(e,t){for(var n in t)e[n]=t[n];return e},Df=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ai(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Ho=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ks=function(e){var t=e.parent||pt,n=e.keyframes?Cy(jt(e.keyframes)):En;if(ln(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Py=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Np=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},$o=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Ji=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},gr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Dy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},mu=function(e,t,n,i){return e._startAt&&(Gt?e._startAt.revert(Po):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Uy=function s(e){return!e||e._ts&&s(e.parent)},Uf=function(e){return e._repeat?ps(e._tTime,e=e.duration()+e._rDelay)*e:0},ps=function(e,t){var n=Math.floor(e=Et(e/t));return e&&n===e?n-1:n},Wo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},el=function(e){return e._end=Et(e._start+(e._tDur/Math.abs(e._ts||e._rts||ot)||0))},tl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Et(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),el(e),n._dirty||gr(n,e)),e},Op=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Wo(e.rawTime(),t),(!t._dur||xa(0,t.totalDuration(),n)-t._tTime>ot)&&t.render(n,!0)),gr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ot}},ti=function(e,t,n,i){return t.parent&&Ji(t),t._start=Et((bi(n)?n:n||e!==pt?Pn(e,n,t):e._time)+t._delay),t._end=Et(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Np(e,t,"_first","_last",e._sort?"_start":0),gu(t)||(e._recent=t),i||Op(e,t),e._ts<0&&tl(e,e._tTime),e},Bp=function(e,t){return(bn.ScrollTrigger||ju("scrollTrigger",t))&&bn.ScrollTrigger.create(t,e)},kp=function(e,t,n,i,r){if(th(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Gt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Dp!==yn.frame)return Xi.push(e),e._lazy=[r,i],1},Ly=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},gu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Iy=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Ly(e)&&!(!e._initted&&gu(e))||(e._ts<0||e._dp._ts<0)&&!gu(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=xa(0,e._tDur,t),u=ps(l,o),e._yoyo&&u&1&&(a=1-a),u!==ps(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Gt||i||e._zTime===ot||!t&&e._zTime){if(!e._initted&&kp(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?ot:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&mu(e,t,n,!0),e._onUpdate&&!n&&Sn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Sn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ji(e,1),!n&&!Gt&&(Sn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Fy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ms=function(e,t,n,i){var r=e._repeat,a=Et(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Et(a*(r+1)+e._rDelay*r):a,o>0&&!i&&tl(e,e._tTime=e._tDur*o),e.parent&&el(e),n||gr(e.parent,e),e},Lf=function(e){return e instanceof Qt?gr(e):ms(e,e._dur)},Ny={_start:0,endTime:oa,totalDuration:oa},Pn=function s(e,t,n){var i=e.labels,r=e._recent||Ny,a=e.duration()>=In?r.endTime(!1):e._dur,o,l,c;return Ft(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(jt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Zs=function(e,t,n){var i=bi(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ln(l.vars.inherit)&&l.parent;a.immediateRender=ln(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new bt(t[0],a,t[r+1])},$i=function(e,t){return e||e===0?t(e):t},xa=function(e,t,n){return n<e?e:n>t?t:n},Yt=function(e,t){return!Ft(e)||!(t=Ey.exec(e))?"":t[1]},Oy=function(e,t,n){return $i(n,function(i){return xa(e,t,i)})},_u=[].slice,zp=function(e,t){return e&&ai(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ai(e[0]))&&!e.nodeType&&e!==$n},By=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Ft(i)&&!t||zp(i,1)?(r=n).push.apply(r,Fn(i)):n.push(i)})||n},Fn=function(e,t,n){return dt&&!t&&dt.selector?dt.selector(e):Ft(e)&&!n&&(du||!gs())?_u.call((t||Ju).querySelectorAll(e),0):jt(e)?By(e,n):zp(e)?_u.call(e,0):e?[e]:[]},vu=function(e){return e=Fn(e)[0]||aa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Fn(t,n.querySelectorAll?n:n===e?aa("Invalid scope")||Ju.createElement("div"):e)}},Gp=function(e){return e.sort(function(){return .5-Math.random()})},Vp=function(e){if(vt(e))return e;var t=ai(e)?e:{each:e},n=_r(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Ft(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,p=a[g],m,S,M,x,E,A,T,b,v;if(!p){if(v=t.grid==="auto"?0:(t.grid||[1,In])[1],!v){for(T=-In;T<(T=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(p=a[g]=[],m=l?Math.min(v,g)*u-.5:i%v,S=v===In?0:l?g*h/v-.5:i/v|0,T=0,b=In,A=0;A<g;A++)M=A%v-m,x=S-(A/v|0),p[A]=E=c?Math.abs(c==="y"?x:M):Tp(M*M+x*x),E>T&&(T=E),E<b&&(b=E);i==="random"&&Gp(p),p.max=T-b,p.min=b,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),p.b=g<0?r-g:r,p.u=Yt(t.amount||t.each)||0,n=n&&g<0?Qp(n):n}return g=(p[f]-p.min)/p.max||0,Et(p.b+(n?n(g):g)*p.v)+p.u}},xu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Et(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(bi(n)?0:Yt(n))}},Hp=function(e,t){var n=jt(e),i,r;return!n&&ai(e)&&(i=n=e.radius||In,e.values?(e=Fn(e.values),(r=!bi(e[0]))&&(i*=i)):e=xu(e.increment)),$i(t,n?vt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=In,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,r||u===a||bi(a)?u:u+Yt(a)}:xu(e))},Wp=function(e,t,n,i){return $i(jt(e)?!t:n===!0?!!(n=0):!i,function(){return jt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},ky=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},zy=function(e,t){return function(n){return e(parseFloat(n))+(t||Yt(n))}},Gy=function(e,t,n){return qp(e,t,0,1,n)},Xp=function(e,t,n){return $i(n,function(i){return e[~~t(i)]})},Vy=function s(e,t,n){var i=t-e;return jt(e)?Xp(e,s(0,e.length),t):$i(n,function(r){return(i+(r-e)%i)%i+e})},Hy=function s(e,t,n){var i=t-e,r=i*2;return jt(e)?Xp(e,s(0,e.length-1),t):$i(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},la=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?Ap:fu),n+=e.substr(t,i-t)+Wp(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},qp=function(e,t,n,i,r){var a=t-e,o=i-n;return $i(r,function(l){return n+((l-e)/a*o||0)})},Wy=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=Ft(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(jt(e)&&!jt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=ds(jt(e)?[]:{},e));if(!u){for(l in t)eh.call(o,e,l,"get",t[l]);r=function(_){return rh(_,o)||(a?e.p:e)}}}return $i(n,r)},If=function(e,t,n){var i=e.labels,r=In,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Sn=function(e,t,n){var i=e.vars,r=i[t],a=dt,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Xi.length&&Vo(),o&&(dt=o),u=l?r.apply(c,l):r.call(c),dt=a,u},Ys=function(e){return Ji(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Gt),e.progress()<1&&Sn(e,"onInterrupt"),e},Qr,Yp=[],Jp=function(e){if(e)if(e=!e.name&&e.default||e,Yu()||e.headless){var t=e.name,n=vt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:oa,render:rh,add:eh,kill:aS,modifier:sS,rawVars:0},a={targetTest:0,get:0,getSetter:ih,aliases:{},register:0};if(gs(),e!==i){if(vn[t])return;En(i,En(Ho(e,r),a)),ds(i.prototype,ds(r,Ho(e,a))),vn[i.prop=t]=i,e.targetTest&&(Do.push(i),Ku[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Pp(t,i),e.register&&e.register(fn,i,un)}else Yp.push(e)},at=255,Js={aqua:[0,at,at],lime:[0,at,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,at],navy:[0,0,128],white:[at,at,at],olive:[128,128,0],yellow:[at,at,0],orange:[at,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[at,0,0],pink:[at,192,203],cyan:[0,at,at],transparent:[at,at,at,0]},Zl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*at+.5|0},jp=function(e,t,n){var i=e?bi(e)?[e>>16,e>>8&at,e&at]:0:Js.black,r,a,o,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Js[e])i=Js[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&at,i&at,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&at,e&at]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(fu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=Zl(l+1/3,r,a),i[1]=Zl(l,r,a),i[2]=Zl(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Ep),n&&i.length<4&&(i[3]=1),i}else i=e.match(fu)||Js.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/at,a=i[1]/at,o=i[2]/at,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(a-o)/d+(a<o?6:0):h===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Kp=function(e){var t=[],n=[],i=-1;return e.split(qi).forEach(function(r){var a=r.match(Zr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Ff=function(e,t,n){var i="",r=(e+i).match(qi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=jp(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Kp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(qi,"1").split(Zr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(qi),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},qi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Js)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Xy=/hsl[a]?\(/,Zp=function(e){var t=e.join(" "),n;if(qi.lastIndex=0,qi.test(t))return n=Xy.test(t),e[1]=Ff(e[1],n),e[0]=Ff(e[0],n,Kp(e[1])),!0},ca,yn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,h,f,d,_=function g(p){var m=s()-i,S=p===!0,M,x,E,A;if((m>e||m<0)&&(n+=m-t),i+=m,E=i-n,M=E-a,(M>0||S)&&(A=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,a+=M+(M>=r?4:r-M),x=1),S||(l=c(g)),x)for(d=0;d<o.length;d++)o[d](E,f,A,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Rp&&(!du&&Yu()&&($n=du=window,Ju=$n.document||{},bn.gsap=fn,($n.gsapVersions||($n.gsapVersions=[])).push(fn.version),Cp(Go||$n.GreenSockGlobals||!$n.gsap&&$n||{}),Yp.forEach(Jp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},ca=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ca=0,c=oa},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,m,S){var M=m?function(x,E,A,T){p(x,E,A,T),h.remove(M)}:p;return h.remove(p),o[S?"unshift":"push"](M),gs(),M},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},h}(),gs=function(){return!ca&&yn.wake()},tt={},qy=/^[\d.\-M][\d.\-,\s]/,Yy=/["']/g,Jy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Yy,"").trim():+c,i=l.substr(o+1).trim();return t},jy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Ky=function(e){var t=(e+"").split("("),n=tt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Jy(t[1])]:jy(e).split(",").map(Ip)):tt._CE&&qy.test(e)?tt._CE("",e):n},Qp=function(e){return function(t){return 1-e(1-t)}},$p=function s(e,t){for(var n=e._first,i;n;)n instanceof Qt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},_r=function(e,t){return e&&(vt(e)?e:tt[e]||Ky(e))||t},wr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return cn(e,function(o){tt[o]=bn[o]=r,tt[a=o.toLowerCase()]=n;for(var l in r)tt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=tt[o+"."+l]=r[l]}),r},em=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ql=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/hu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*by((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:em(o);return r=hu/r,l.config=function(c,u){return s(e,c,u)},l},$l=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:em(n);return i.config=function(r){return s(e,r)},i};cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;wr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});tt.Linear.easeNone=tt.none=tt.Linear.easeIn;wr("Elastic",Ql("in"),Ql("out"),Ql());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};wr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);wr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});wr("Circ",function(s){return-(Tp(1-s*s)-1)});wr("Sine",function(s){return s===1?1:-Ty(s*Sy)+1});wr("Back",$l("in"),$l("out"),$l());tt.SteppedEase=tt.steps=bn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-ot;return function(o){return((i*xa(0,a,o)|0)+r)*n}}};fs.ease=tt["quad.out"];cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Zu+=s+","+s+"Params,"});var tm=function(e,t){this.id=My++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Up,this.set=t?t.getSetter:ih},ua=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ms(this,+t.duration,1,1),this.data=t.data,dt&&(this._ctx=dt,dt.data.push(this)),ca||yn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ms(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(gs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(tl(this,n),!r._dp||r.parent||Op(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ti(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ot||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Lp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Uf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Uf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ps(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ot?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Wo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ot?0:this._rts,this.totalTime(xa(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),el(this),Dy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(gs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ot&&(this._tTime-=ot)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ti(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ay);var i=Gt;return Gt=n,$u(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Gt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Lf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Lf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Pn(this,n),ln(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ln(i)),this._dur||(this._zTime=-ot),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ot,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ot)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=vt(n)?n:Fp,o=function(){var c=i.then;i.then=null,vt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Ys(this)},s}();En(ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ot,_prom:0,_ps:!1,_rts:1});var Qt=function(s){Mp(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ln(n.sortChildren),pt&&ti(n.parent||pt,mi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Bp(mi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Zs(0,arguments,this),this},t.from=function(i,r,a){return Zs(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Zs(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Ks(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new bt(i,r,Pn(this,a),1),this},t.call=function(i,r,a){return ti(this,bt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new bt(i,a,Pn(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,Ks(a).immediateRender=ln(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,h){return o.startAt=a,Ks(o).immediateRender=ln(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Et(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,S,M,x,E,A,T;if(this!==pt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,x=this._start,M=this._ts,m=!M,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=Et(u%p),u===l?(g=this._repeat,f=c):(E=Et(u/p),g=~~E,g&&g===E&&(f=c,g--),f>c&&(f=c)),E=ps(this._tTime,p),!o&&this._tTime&&E!==g&&this._tTime-E*p-this._dur<=0&&(E=g),A&&g&1&&(f=c-f,T=1),g!==E&&!this._lock){var b=A&&E&1,v=b===(A&&g&1);if(g<E&&(b=!b),o=b?0:u%c?c:u,this._lock=1,this.render(o||(T?0:Et(g*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Sn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=b?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;$p(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Fy(this,Et(o),Et(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!r&&!E&&(Sn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=-ot);break}}d=_}else{d=this._last;for(var y=i<0?i:f;d;){if(_=d._prev,(d._act||y<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,r,a||Gt&&$u(d)),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=y?-ot:ot);break}}d=_}}if(S&&!r&&(this.pause(),S.render(f>=o?0:-ot)._zTime=f>=o?1:-1,this._ts))return this._start=x,el(this),this.render(i,r,a);this._onUpdate&&!r&&Sn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ji(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(Sn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(bi(r)||(r=Pn(this,r,i)),!(i instanceof ua)){if(jt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Ft(i))return this.addLabel(i,r);if(vt(i))i=bt.delayedCall(0,i);else return this}return this!==i?ti(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-In);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof bt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Ft(i)?this.removeLabel(i):vt(i)?this.killTweensOf(i):(i.parent===this&&$o(this,i),i===this._recent&&(this._recent=this._last),gr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Et(yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Pn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=bt.delayedCall(0,r||oa,a);return o.data="isPause",this._hasPause=1,ti(this,o,Pn(this,i))},t.removePause=function(i){var r=this._first;for(i=Pn(this,i);r;)r._start===i&&r.data==="isPause"&&Ji(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Gi!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Fn(i),l=this._first,c=bi(r),u;l;)l instanceof bt?Ry(l._targets,o)&&(c?(!Gi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=Pn(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=bt.to(a,En({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ot,onStart:function(){if(a.pause(),!d){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&ms(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,En({startAt:{time:Pn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),If(this,Pn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),If(this,Pn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ot)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return gr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),gr(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=In,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ti(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;ms(a,a===pt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(pt._ts&&(Lp(pt,Wo(i,pt)),Dp=yn.frame),yn.frame>=Pf){Pf+=Tn.autoSleep||120;var r=pt._first;if((!r||!r._ts)&&Tn.autoSleep&&yn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||yn.sleep()}}},e}(ua);En(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Zy=function(e,t,n,i,r,a,o){var l=new un(this._pt,e,t,0,1,om,null,r),c=0,u=0,h,f,d,_,g,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=la(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(jl)||[];h=jl.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?ts(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=jl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(wp.test(i)||m)&&(l.e=0),this._pt=l,l},eh=function(e,t,n,i,r,a,o,l,c,u){vt(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:vt(h)?c?e[t.indexOf("set")||!vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=vt(h)?c?nS:sm:nh,_;if(Ft(i)&&(~i.indexOf("random(")&&(i=la(i)),i.charAt(1)==="="&&(_=ts(f,i)+(Yt(f)||0),(_||_===0)&&(i=_))),!u||f!==i||yu)return!isNaN(f*i)&&i!==""?(_=new un(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?rS:am,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&ju(t,i),Zy.call(this,e,t,f,i,d,l||Tn.stringFilter,c))},Qy=function(e,t,n,i,r){if(vt(e)&&(e=Qs(e,r,t,n,i)),!ai(e)||e.style&&e.nodeType||jt(e)||bp(e))return Ft(e)?Qs(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=Qs(e[o],r,t,n,i);return a},nm=function(e,t,n,i,r,a){var o,l,c,u;if(vn[e]&&(o=new vn[e]).init(r,o.rawVars?t[e]:Qy(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new un(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Qr))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Gi,yu,th=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,M=e._overwrite==="auto"&&!Xu,x=e.timeline,E,A,T,b,v,y,C,R,U,L,B,I,W;if(x&&(!f||!r)&&(r="none"),e._ease=_r(r,fs.ease),e._yEase=h?Qp(_r(h===!0?r:h,fs.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(R=p[0]?mr(p[0]).harness:0,I=R&&i[R.prop],E=Ho(i,Ku),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?Po:wy),g._lazy=0),a){if(Ji(e._startAt=bt.set(p,En({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&ln(l),startAt:null,delay:0,onUpdate:c&&function(){return Sn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt||!o&&!d)&&e._startAt.revert(Po),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),T=En({overwrite:!1,data:"isFromStart",lazy:o&&!g&&ln(l),immediateRender:o,stagger:0,parent:m},E),I&&(T[R.prop]=I),Ji(e._startAt=bt.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt?e._startAt.revert(Po):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,ot,ot);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ln(l)||l&&!_,A=0;A<p.length;A++){if(v=p[A],C=v._gsap||Qu(p)[A]._gsap,e._ptLookup[A]=L={},pu[C.id]&&Xi.length&&Vo(),B=S===p?A:S.indexOf(v),R&&(U=new R).init(v,I||E,e,B,S)!==!1&&(e._pt=b=new un(e._pt,v,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(H){L[H]=b}),U.priority&&(y=1)),!R||I)for(T in E)vn[T]&&(U=nm(T,E,e,B,v,S))?U.priority&&(y=1):L[T]=b=eh.call(e,v,T,"get",E[T],B,S,0,i.stringFilter);e._op&&e._op[A]&&e.kill(v,e._op[A]),M&&e._pt&&(Gi=e,pt.killTweensOf(v,L,e.globalTime(t)),W=!e.parent,Gi=0),e._pt&&l&&(pu[C.id]=1)}y&&lm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,f&&t<=0&&x.render(In,!0,!0)},$y=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return yu=1,e.vars[t]="+=0",th(e,o),yu=0,l?aa(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=yt(n)+Yt(h.e)),h.b&&(h.b=u.s+Yt(h.b))},eS=function(e,t){var n=e[0]?mr(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=ds({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},tS=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(jt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Qs=function(e,t,n,i,r){return vt(e)?e.call(t,n,i,r):Ft(e)&&~e.indexOf("random(")?la(e):e},im=Zu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",rm={};cn(im+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return rm[s]=1});var bt=function(s){Mp(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Ks(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=i.parent||pt,M=(jt(n)||bp(n)?bi(n[0]):"length"in i)?[n]:Fn(n),x,E,A,T,b,v,y,C;if(o._targets=M.length?Qu(M):aa("GSAP target "+n+" not found. https://gsap.com",!Tn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||to(c)||to(u)){if(i=o.vars,x=o.timeline=new Qt({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:M}),x.kill(),x.parent=x._dp=mi(o),x._start=0,f||to(c)||to(u)){if(T=M.length,y=f&&Vp(f),ai(f))for(b in f)~im.indexOf(b)&&(C||(C={}),C[b]=f[b]);for(E=0;E<T;E++)A=Ho(i,rm),A.stagger=0,m&&(A.yoyoEase=m),C&&ds(A,C),v=M[E],A.duration=+Qs(c,mi(o),E,v,M),A.delay=(+Qs(u,mi(o),E,v,M)||0)-o._delay,!f&&T===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),x.to(v,A,y?y(E,v,M):0),x._ease=tt.none;x.duration()?c=u=0:o.timeline=0}else if(_){Ks(En(x.vars.defaults,{ease:"none"})),x._ease=_r(_.ease||i.ease||"none");var R=0,U,L,B;if(jt(_))_.forEach(function(I){return x.to(M,I,">")}),x.duration();else{A={};for(b in _)b==="ease"||b==="easeEach"||tS(b,_[b],A,_.easeEach);for(b in A)for(U=A[b].sort(function(I,W){return I.t-W.t}),R=0,E=0;E<U.length;E++)L=U[E],B={ease:L.e,duration:(L.t-(E?U[E-1].t:0))/100*c},B[b]=L.v,x.to(M,B,R),R+=B.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return d===!0&&!Xu&&(Gi=mi(o),pt.killTweensOf(M),Gi=0),ti(S,mi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===Et(S._time)&&ln(h)&&Uy(mi(o))&&S.data!=="nested")&&(o._tTime=-ot,o.render(Math.max(0,-u)||0)),p&&Bp(mi(o),p),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ot&&!u?l:i<ot?0:i,f,d,_,g,p,m,S,M,x;if(!c)Iy(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,a);if(f=Et(h%g),h===l?(_=this._repeat,f=c):(p=Et(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(x=this._yEase,f=c-f),p=ps(this._tTime,g),f===o&&!a&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(M&&this._yEase&&$p(M,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(Et(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(kp(this,u?i:f,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(x||this._ease)(f/c),this._from&&(this.ratio=S=1-S),!o&&h&&!r&&!p&&(Sn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&mu(this,i,r,a),Sn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&Sn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&mu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ji(this,1),!r&&!(u&&!o)&&(h||o||m)&&(Sn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){ca||yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||th(this,c),u=this._ease(c/this._dur),$y(this,i,r,a,o,u,c,l)?this.resetTo(i,r,a,o,1):(tl(this,0),this.parent||Np(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ys(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Gt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Gi&&Gi.vars.overwrite!==!0)._first||Ys(this),this.parent&&a!==this.timeline.totalDuration()&&ms(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Fn(i):o,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!r||r==="all")&&Py(o,l))return r==="all"&&(this._pt=0),Ys(this);for(h=this._op=this._op||[],r!=="all"&&(Ft(r)&&(g={},cn(r,function(S){return g[S]=1}),r=g),r=eS(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],r==="all"?(h[m]=r,_=f,d={}):(d=h[m]=h[m]||{},_=r);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&$o(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Ys(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Zs(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Zs(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return pt.killTweensOf(i,r,a)},e}(ua);En(bt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});cn("staggerTo,staggerFrom,staggerFromTo",function(s){bt[s]=function(){var e=new Qt,t=_u.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var nh=function(e,t,n){return e[t]=n},sm=function(e,t,n){return e[t](n)},nS=function(e,t,n,i){return e[t](i.fp,n)},iS=function(e,t,n){return e.setAttribute(t,n)},ih=function(e,t){return vt(e[t])?sm:qu(e[t])&&e.setAttribute?iS:nh},am=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},rS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},om=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},rh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},sS=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},aS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?$o(this,t,"_pt"):t.dep||(n=1),t=i;return!n},oS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},lm=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},un=function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||am,this.d=l||this,this.set=c||nh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=oS,this.m=n,this.mt=r,this.tween=i},s}();cn(Zu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Ku[s]=1});bn.TweenMax=bn.TweenLite=bt;bn.TimelineLite=bn.TimelineMax=Qt;pt=new Qt({sortChildren:!1,defaults:fs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Tn.stringFilter=Zp;var vr=[],Uo={},lS=[],Nf=0,cS=0,ec=function(e){return(Uo[e]||lS).map(function(t){return t()})},Su=function(){var e=Date.now(),t=[];e-Nf>2&&(ec("matchMediaInit"),vr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=$n.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),ec("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Nf=e,ec("matchMedia"))},cm=function(){function s(t,n){this.selector=n&&vu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=cS++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){vt(n)&&(r=i,i=n,n=vt);var a=this,o=function(){var c=dt,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=vu(r)),dt=a,h=i.apply(a,arguments),vt(h)&&a._r.push(h),dt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===vt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=dt;dt=null,n(this),dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof bt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Qt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof bt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=vr.length;a--;)vr[a].id===this.id&&vr.splice(a,1)},e.revert=function(n){this.kill(n||{})},s}(),uS=function(){function s(t){this.contexts=[],this.scope=t,dt&&dt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){ai(n)||(n={matches:n});var a=new cm(0,r||this.scope),o=a.conditions={},l,c,u;dt&&!a.selector&&(a.selector=dt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=$n.matchMedia(n[c]),l&&(vr.indexOf(a)<0&&vr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Su):l.addEventListener("change",Su)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Xo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Jp(i)})},timeline:function(e){return new Qt(e)},getTweensOf:function(e,t){return pt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ft(e)&&(e=Fn(e)[0]);var r=mr(e||{}).get,a=n?Fp:Ip;return n==="native"&&(n=""),e&&(t?a((vn[t]&&vn[t].get||r)(e,t,n,i)):function(o,l,c){return a((vn[o]&&vn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Fn(e),e.length>1){var i=e.map(function(u){return fn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=vn[t],o=mr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Qr._pt=0,h.init(e,n?u+n:u,Qr,0,[e]),h.render(1,h),Qr._pt&&rh(1,Qr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=fn.to(e,En((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=_r(e.ease,fs.ease)),Df(fs,e||{})},config:function(e){return Df(Tn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!vn[o]&&!bn[o]&&aa(t+" effect requires "+o+" plugin.")}),Kl[t]=function(o,l,c){return n(Fn(o),En(l||{},r),c)},a&&(Qt.prototype[t]=function(o,l,c){return this.add(Kl[t](o,ai(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){tt[e]=_r(t)},parseEase:function(e,t){return arguments.length?_r(e,t):tt},getById:function(e){return pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Qt(e),i,r;for(n.smoothChildTiming=ln(e.smoothChildTiming),pt.remove(n),n._dp=0,n._time=n._tTime=pt._time,i=pt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof bt&&i.vars.onComplete===i._targets[0]))&&ti(n,i,i._start-i._delay),i=r;return ti(pt,n,0),n},context:function(e,t){return e?new cm(e,t):dt},matchMedia:function(e){return new uS(e)},matchMediaRefresh:function(){return vr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Su()},addEventListener:function(e,t){var n=Uo[e]||(Uo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Uo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Vy,wrapYoyo:Hy,distribute:Vp,random:Wp,snap:Hp,normalize:Gy,getUnit:Yt,clamp:Oy,splitColor:jp,toArray:Fn,selector:vu,mapRange:qp,pipe:ky,unitize:zy,interpolate:Wy,shuffle:Gp},install:Cp,effects:Kl,ticker:yn,updateRoot:Qt.updateRoot,plugins:vn,globalTimeline:pt,core:{PropTween:un,globals:Pp,Tween:bt,Timeline:Qt,Animation:ua,getCache:mr,_removeLinkedListItem:$o,reverting:function(){return Gt},context:function(e){return e&&dt&&(dt.data.push(e),e._ctx=dt),dt},suppressOverwrites:function(e){return Xu=e}}};cn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Xo[s]=bt[s]});yn.add(Qt.updateRoot);Qr=Xo.to({},{duration:0});var hS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},fS=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=hS(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},tc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Ft(r)&&(l={},cn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}fS(o,r)}}}},fn=Xo.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Gt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},tc("roundProps",xu),tc("modifiers"),tc("snap",Hp))||Xo;bt.version=Qt.version=fn.version="3.13.0";Rp=1;Yu()&&gs();tt.Power0;tt.Power1;tt.Power2;tt.Power3;tt.Power4;tt.Linear;tt.Quad;tt.Cubic;tt.Quart;tt.Quint;tt.Strong;tt.Elastic;tt.Back;tt.SteppedEase;tt.Bounce;tt.Sine;tt.Expo;tt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Of,Vi,ns,sh,dr,Bf,ah,dS=function(){return typeof window<"u"},Ei={},hr=180/Math.PI,is=Math.PI/180,Xr=Math.atan2,kf=1e8,oh=/([A-Z])/g,pS=/(left|right|width|margin|padding|x)/i,mS=/[\s,\(]\S/,ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Mu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_S=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},um=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},hm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},xS=function(e,t,n){return e.style[t]=n},yS=function(e,t,n){return e.style.setProperty(t,n)},SS=function(e,t,n){return e._gsap[t]=n},MS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},TS=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},bS=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},gt="transform",hn=gt+"Origin",ES=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in Ei&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ii[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=_i(i,o)}):this.tfm[e]=a.x?a[e]:_i(i,e),e===hn&&(this.tfm.zOrigin=a.zOrigin);else return ii.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(gt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(hn,t,"")),e=gt}(r||t)&&this.props.push(e,t,r[e])},fm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},wS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(oh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=ah(),(!r||!r.isStart)&&!n[gt]&&(fm(n),i.zOrigin&&n[hn]&&(n[hn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},dm=function(e,t){var n={target:e,props:[],revert:wS,save:ES};return e._gsap||fn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},pm,Tu=function(e,t){var n=Vi.createElementNS?Vi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Vi.createElement(e);return n&&n.style?n:Vi.createElement(e)},Nn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(oh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,_s(t)||t,1)||""},zf="O,Moz,ms,Ms,Webkit".split(","),_s=function(e,t,n){var i=t||dr,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(zf[a]+e in r););return a<0?null:(a===3?"ms":a>=0?zf[a]:"")+e},bu=function(){dS()&&window.document&&(Of=window,Vi=Of.document,ns=Vi.documentElement,dr=Tu("div")||{style:{}},Tu("div"),gt=_s(gt),hn=gt+"Origin",dr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pm=!!_s("perspective"),ah=fn.core.reverting,sh=1)},Gf=function(e){var t=e.ownerSVGElement,n=Tu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ns.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ns.removeChild(n),r},Vf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},mm=function(e){var t,n;try{t=e.getBBox()}catch{t=Gf(e),n=1}return t&&(t.width||t.height)||n||(t=Gf(e)),t&&!t.width&&!t.x&&!t.y?{x:+Vf(e,["x","cx","x1"])||0,y:+Vf(e,["y","cy","y1"])||0,width:0,height:0}:t},gm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&mm(e))},Tr=function(e,t){if(t){var n=e.style,i;t in Ei&&t!==hn&&(t=gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(oh,"-$1").toLowerCase())):n.removeAttribute(t)}},Hi=function(e,t,n,i,r,a){var o=new un(e._pt,t,n,0,1,a?hm:um);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Hf={deg:1,rad:1,turn:1},AS={grid:1,flex:1},ji=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=dr.style,l=pS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===a||!r||Hf[i]||Hf[a])return r;if(a!=="px"&&!f&&(r=s(e,t,n,"px")),m=e.getCTM&&gm(e),(d||a==="%")&&(Ei[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],yt(d?r/_*h:r/100*_);if(o[l?"width":"height"]=h+(f?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Vi||!g.appendChild)&&(g=Vi.body),p=g._gsap,p&&d&&p.width&&l&&p.time===yn.time&&!p.uncache)return yt(r/p.width*h);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,_=e[u],S?e.style[t]=S:Tr(e,t)}else(d||a==="%")&&!AS[Nn(g,"display")]&&(o.position=Nn(e,"position")),g===e&&(o.position="static"),g.appendChild(dr),_=dr[u],g.removeChild(dr),o.position="absolute";return l&&d&&(p=mr(g),p.time=yn.time,p.width=g[u]),yt(f?_*r/h:_&&r?h/_*r:0)},_i=function(e,t,n,i){var r;return sh||bu(),t in ii&&t!=="transform"&&(t=ii[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ei[t]&&t!=="transform"?(r=fa(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Yo(Nn(e,hn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=qo[t]&&qo[t](e,t,n)||Nn(e,t)||Up(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ji(e,t,r,n)+n:r},RS=function(e,t,n,i){if(!n||n==="none"){var r=_s(t,e,1),a=r&&Nn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Nn(e,"borderTopColor"))}var o=new un(this._pt,e.style,t,0,1,om),l=0,c=0,u,h,f,d,_,g,p,m,S,M,x,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Nn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Nn(e,t)||i,g?e.style[t]=g:Tr(e,t)),u=[n,i],Zp(u),n=u[0],i=u[1],f=n.match(Zr)||[],E=i.match(Zr)||[],E.length){for(;h=Zr.exec(i);)p=h[0],S=i.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),p.charAt(1)==="="&&(p=ts(d,p)+x),m=parseFloat(p),M=p.substr((m+"").length),l=Zr.lastIndex-M.length,M||(M=M||Tn.units[t]||x,l===i.length&&(i+=M,o.e+=M)),x!==M&&(d=ji(e,t,g,M)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?hm:um;return wp.test(i)&&(o.e=0),this._pt=o,o},Wf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},CS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Wf[n]||n,t[1]=Wf[i]||i,t.join(" ")},PS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Ei[o]&&(l=1,o=o==="transformOrigin"?hn:gt),Tr(n,o);l&&(Tr(n,gt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",fa(n,1),a.uncache=1,fm(i)))}},qo={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new un(e._pt,t,n,0,0,PS);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},ha=[1,0,0,1,0,0],_m={},vm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Xf=function(e){var t=Nn(e,gt);return vm(t)?ha:t.substr(7).match(Ep).map(yt)},lh=function(e,t){var n=e._gsap||mr(e),i=e.style,r=Xf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ha:r):(r===ha&&!e.offsetParent&&e!==ns&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ns.appendChild(e)),r=Xf(e),l?i.display=l:Tr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ns.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Eu=function(e,t,n,i,r,a){var o=e._gsap,l=r||lh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],S=l[5],M=t.split(" "),x=parseFloat(M[0])||0,E=parseFloat(M[1])||0,A,T,b,v;n?l!==ha&&(T=d*p-_*g)&&(b=x*(p/T)+E*(-g/T)+(g*S-p*m)/T,v=x*(-_/T)+E*(d/T)-(d*S-_*m)/T,x=b,E=v):(A=mm(e),x=A.x+(~M[0].indexOf("%")?x/100*A.width:x),E=A.y+(~(M[1]||M[0]).indexOf("%")?E/100*A.height:E)),i||i!==!1&&o.smooth?(m=x-c,S=E-u,o.xOffset=h+(m*d+S*g)-m,o.yOffset=f+(m*_+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[hn]="0px 0px",a&&(Hi(a,o,"xOrigin",c,x),Hi(a,o,"yOrigin",u,E),Hi(a,o,"xOffset",h,o.xOffset),Hi(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+E)},fa=function(e,t){var n=e._gsap||new tm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Nn(e,hn)||"0",u,h,f,d,_,g,p,m,S,M,x,E,A,T,b,v,y,C,R,U,L,B,I,W,H,Y,X,F,V,Z,N,k;return u=h=f=g=p=m=S=M=x=0,d=_=1,n.svg=!!(e.getCTM&&gm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[gt]!=="none"?l[gt]:"")),i.scale=i.rotate=i.translate="none"),T=lh(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),Eu(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,T)),E=n.xOrigin||0,A=n.yOrigin||0,T!==ha&&(C=T[0],R=T[1],U=T[2],L=T[3],u=B=T[4],h=I=T[5],T.length===6?(d=Math.sqrt(C*C+R*R),_=Math.sqrt(L*L+U*U),g=C||R?Xr(R,C)*hr:0,S=U||L?Xr(U,L)*hr+g:0,S&&(_*=Math.abs(Math.cos(S*is))),n.svg&&(u-=E-(E*C+A*U),h-=A-(E*R+A*L))):(k=T[6],Z=T[7],X=T[8],F=T[9],V=T[10],N=T[11],u=T[12],h=T[13],f=T[14],b=Xr(k,V),p=b*hr,b&&(v=Math.cos(-b),y=Math.sin(-b),W=B*v+X*y,H=I*v+F*y,Y=k*v+V*y,X=B*-y+X*v,F=I*-y+F*v,V=k*-y+V*v,N=Z*-y+N*v,B=W,I=H,k=Y),b=Xr(-U,V),m=b*hr,b&&(v=Math.cos(-b),y=Math.sin(-b),W=C*v-X*y,H=R*v-F*y,Y=U*v-V*y,N=L*y+N*v,C=W,R=H,U=Y),b=Xr(R,C),g=b*hr,b&&(v=Math.cos(b),y=Math.sin(b),W=C*v+R*y,H=B*v+I*y,R=R*v-C*y,I=I*v-B*y,C=W,B=H),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=yt(Math.sqrt(C*C+R*R+U*U)),_=yt(Math.sqrt(I*I+k*k)),b=Xr(B,I),S=Math.abs(b)>2e-4?b*hr:0,x=N?1/(N<0?-N:N):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!vm(Nn(e,gt)),W&&e.setAttribute("transform",W))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=yt(d),n.scaleY=yt(_),n.rotation=yt(g)+o,n.rotationX=yt(p)+o,n.rotationY=yt(m)+o,n.skewX=S+o,n.skewY=M+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[hn]=Yo(c)),n.xOffset=n.yOffset=0,n.force3D=Tn.force3D,n.renderTransform=n.svg?US:pm?xm:DS,n.uncache=0,n},Yo=function(e){return(e=e.split(" "))[0]+" "+e[1]},nc=function(e,t,n){var i=Yt(t);return yt(parseFloat(t)+parseFloat(ji(e,"x",n+"px",i)))+i},DS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,xm(e,t)},ar="0deg",ks="0px",or=") ",xm=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,M=n.zOrigin,x="",E=m==="auto"&&e&&e!==1||m===!0;if(M&&(h!==ar||u!==ar)){var A=parseFloat(u)*is,T=Math.sin(A),b=Math.cos(A),v;A=parseFloat(h)*is,v=Math.cos(A),a=nc(S,a,T*v*-M),o=nc(S,o,-Math.sin(A)*-M),l=nc(S,l,b*v*-M+M)}p!==ks&&(x+="perspective("+p+or),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(E||a!==ks||o!==ks||l!==ks)&&(x+=l!==ks||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+or),c!==ar&&(x+="rotate("+c+or),u!==ar&&(x+="rotateY("+u+or),h!==ar&&(x+="rotateX("+h+or),(f!==ar||d!==ar)&&(x+="skew("+f+", "+d+or),(_!==1||g!==1)&&(x+="scale("+_+", "+g+or),S.style[gt]=x||"translate(0, 0)"},US=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,M=parseFloat(a),x=parseFloat(o),E,A,T,b,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=is,c*=is,E=Math.cos(l)*h,A=Math.sin(l)*h,T=Math.sin(l-c)*-f,b=Math.cos(l-c)*f,c&&(u*=is,v=Math.tan(c-u),v=Math.sqrt(1+v*v),T*=v,b*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),E*=v,A*=v)),E=yt(E),A=yt(A),T=yt(T),b=yt(b)):(E=h,b=f,A=T=0),(M&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(M=ji(d,"x",a,"px"),x=ji(d,"y",o,"px")),(_||g||p||m)&&(M=yt(M+_-(_*E+g*T)+p),x=yt(x+g-(_*A+g*b)+m)),(i||r)&&(v=d.getBBox(),M=yt(M+i/100*v.width),x=yt(x+r/100*v.height)),v="matrix("+E+","+A+","+T+","+b+","+M+","+x+")",d.setAttribute("transform",v),S&&(d.style[gt]=v)},LS=function(e,t,n,i,r){var a=360,o=Ft(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?hr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*kf)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*kf)%a-~~(c/a)*a)),e._pt=f=new un(e._pt,t,n,i,c,gS),f.e=u,f.u="deg",e._props.push(n),f},qf=function(e,t){for(var n in t)e[n]=t[n];return e},IS=function(e,t,n){var i=qf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[gt]=t,o=fa(n,1),Tr(n,gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[gt],a[gt]=t,o=fa(n,1),a[gt]=c);for(l in Ei)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=Yt(c),_=Yt(u),h=d!==_?ji(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new un(e._pt,o,l,h,f-h,Mu),e._pt.u=_||0,e._props.push(l));qf(o,i)};cn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});qo[e>1?"border"+s:s]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(_){return _i(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var ym={name:"css",register:bu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,S,M,x,E,A,T,b;sh||bu(),this.styles=this.styles||dm(e),b=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(vn[g]&&nm(g,t,n,i,e,r)))){if(d=typeof u,_=qo[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=la(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",qi.lastIndex=0,qi.test(c)||(p=Yt(c),m=Yt(u)),m?p!==m&&(c=ji(e,g,c,m)+m):p&&(u+=p),this.add(o,"setProperty",c,u,i,r,0,0,g),a.push(g),b.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],Ft(c)&&~c.indexOf("random(")&&(c=la(c)),Yt(c+"")||c==="auto"||(c+=Tn.units[g]||Yt(_i(e,g))||""),(c+"").charAt(1)==="="&&(c=_i(e,g))):c=_i(e,g),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in ii&&(g==="autoAlpha"&&(f===1&&_i(e,"visibility")==="hidden"&&h&&(f=0),b.push("visibility",0,o.visibility),Hi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=ii[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in Ei,M){if(this.styles.save(g),d==="string"&&u.substring(0,6)==="var(--"&&(u=Nn(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),x||(E=e._gsap,E.renderTransform&&!t.parseTransform||fa(e,t.parseTransform),A=t.smoothOrigin!==!1&&E.smooth,x=this._pt=new un(this._pt,o,gt,0,1,E.renderTransform,E,0,-1),x.dep=1),g==="scale")this._pt=new un(this._pt,E,"scaleY",E.scaleY,(S?ts(E.scaleY,S+h):h)-E.scaleY||0,Mu),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){b.push(hn,0,o[hn]),u=CS(u),E.svg?Eu(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&Hi(this,E,"zOrigin",E.zOrigin,m),Hi(this,o,g,Yo(c),Yo(u)));continue}else if(g==="svgOrigin"){Eu(e,u,1,A,0,this);continue}else if(g in _m){LS(this,E,g,f,S?ts(f,S+u):u);continue}else if(g==="smoothOrigin"){Hi(this,E,"smooth",E.smooth,u);continue}else if(g==="force3D"){E[g]=u;continue}else if(g==="transform"){IS(this,u,e);continue}}else g in o||(g=_s(g)||g);if(M||(h||h===0)&&(f||f===0)&&!mS.test(u)&&g in o)p=(c+"").substr((f+"").length),h||(h=0),m=Yt(u)||(g in Tn.units?Tn.units[g]:p),p!==m&&(f=ji(e,g,c,m)),this._pt=new un(this._pt,M?E:o,g,f,(S?ts(f,S+h):h)-f,!M&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?vS:Mu),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=_S);else if(g in o)RS.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,i,r);else if(g!=="parseTransform"){ju(g,u);continue}M||(g in o?b.push(g,0,o[g]):typeof e[g]=="function"?b.push(g,2,e[g]()):b.push(g,1,c||e[g])),a.push(g)}}T&&lm(this)},render:function(e,t){if(t.tween._time||!ah())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:_i,aliases:ii,getSetter:function(e,t,n){var i=ii[t];return i&&i.indexOf(",")<0&&(t=i),t in Ei&&t!==hn&&(e._gsap.x||_i(e,"x"))?n&&Bf===n?t==="scale"?MS:SS:(Bf=n||{})&&(t==="scale"?TS:bS):e.style&&!qu(e.style[t])?xS:~t.indexOf("-")?yS:ih(e,t)},core:{_removeProperty:Tr,_getMatrix:lh}};fn.utils.checkPrefix=_s;fn.core.getStyleSaver=dm;(function(s,e,t,n){var i=cn(s+","+e+","+t,function(r){Ei[r]=1});cn(e,function(r){Tn.units[r]="deg",_m[r]=1}),ii[i[13]]=s+","+e,cn(n,function(r){var a=r.split(":");ii[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Tn.units[s]="px"});fn.registerPlugin(ym);var ri=fn.registerPlugin(ym)||fn;ri.core.Tween;class Yf{constructor(e,t,n,i,r){this.sender=e,this.receiver=t,this.message=n,this.delay=i,this.data=r}toJSON(){return{type:this.constructor.name,sender:this.sender.uuid,receiver:this.receiver.uuid,message:this.message,delay:this.delay,data:this.data}}fromJSON(e){return this.sender=e.sender,this.receiver=e.receiver,this.message=e.message,this.delay=e.delay,this.data=e.data,this}resolveReferences(e){return this.sender=e.get(this.sender),this.receiver=e.get(this.receiver),this}}class jn{static setLevel(e){no=e}static log(...e){no<=jn.LEVEL.LOG&&console.log(...e)}static warn(...e){no<=jn.LEVEL.WARN&&console.warn(...e)}static error(...e){no<=jn.LEVEL.ERROR&&console.error(...e)}}jn.LEVEL=Object.freeze({LOG:0,WARN:1,ERROR:2,SILENT:3});let no=jn.LEVEL.WARN;class FS{constructor(){this.delayedTelegrams=new Array}deliver(e){const t=e.receiver;return t.handleMessage(e)===!1&&jn.warn("YUKA.MessageDispatcher: Message not handled by receiver: %o",t),this}dispatch(e,t,n,i,r){const a=new Yf(e,t,n,i,r);return i<=0?this.deliver(a):this.delayedTelegrams.push(a),this}dispatchDelayedMessages(e){let t=this.delayedTelegrams.length;for(;t--;){const n=this.delayedTelegrams[t];n.delay-=e,n.delay<=0&&(this.deliver(n),this.delayedTelegrams.pop())}return this}clear(){return this.delayedTelegrams.length=0,this}toJSON(){const e={type:this.constructor.name,delayedTelegrams:new Array};for(let t=0,n=this.delayedTelegrams.length;t<n;t++){const i=this.delayedTelegrams[t];e.delayedTelegrams.push(i.toJSON())}return e}fromJSON(e){this.clear();const t=e.delayedTelegrams;for(let n=0,i=t.length;n<i;n++){const r=t[n],a=new Yf().fromJSON(r);this.delayedTelegrams.push(a)}return this}resolveReferences(e){const t=this.delayedTelegrams;for(let n=0,i=t.length;n<i;n++)t[n].resolveReferences(e);return this}}const Bt=new Array;for(let s=0;s<256;s++)Bt[s]=(s<16?"0":"")+s.toString(16);class da{static area(e,t,n){return(n.x-e.x)*(t.z-e.z)-(t.x-e.x)*(n.z-e.z)}static argmax(e){const t=Math.max(...e),n=[];for(let i=0,r=e.length;i<r;i++)e[i]===t&&n.push(i);return n}static choice(e,t=null){const n=Math.random();if(t===null)return e[Math.floor(Math.random()*e.length)];{let i=0;const r=e.map((a,o)=>(i+=t[o],i)).findIndex(a=>a>=n);return e[r]}}static clamp(e,t,n){return Math.max(t,Math.min(n,e))}static generateUUID(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[e&255]+Bt[e>>8&255]+Bt[e>>16&255]+Bt[e>>24&255]+"-"+Bt[t&255]+Bt[t>>8&255]+"-"+Bt[t>>16&15|64]+Bt[t>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toUpperCase()}static randFloat(e,t){return e+Math.random()*(t-e)}static randInt(e,t){return e+Math.floor(Math.random()*(t-e+1))}}class be{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}clone(){return new this.constructor().copy(this)}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.x/=e,this.y/=e,this.z/=e,this}divideVectors(e,t){return this.x=e.x/t.x,this.y=e.y/t.y,this.z=e.z/t.z,this}reflect(e){return this.sub(NS.copy(e).multiplyScalar(2*this.dot(e)))}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}cross(e){const t=this.x,n=this.y,i=this.z;return this.x=n*e.z-i*e.y,this.y=i*e.x-t*e.z,this.z=t*e.y-n*e.x,this}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}angleTo(e){const t=Math.sqrt(this.squaredLength()*e.squaredLength());if(t===0)return 0;const n=this.dot(e)/t;return Math.acos(da.clamp(n,-1,1))}length(){return Math.sqrt(this.squaredLength())}squaredLength(){return this.dot(this)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}distanceTo(e){return Math.sqrt(this.squaredDistanceTo(e))}squaredDistanceTo(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return Math.abs(t)+Math.abs(n)+Math.abs(i)}normalize(){return this.divideScalar(this.length()||1)}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyRotation(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-a*t,f=-r*t-a*n-o*i;return this.x=c*l+f*-r+u*-o-h*-a,this.y=u*l+f*-a+h*-r-c*-o,this.z=h*l+f*-o+c*-a-u*-r,this}extractPositionFromMatrix(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}fromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}fromMatrix4Column(e,t){return this.fromArray(e.elements,t*4)}fromSpherical(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}fromArray(e,t=0){return this.x=e[t+0],this.y=e[t+1],this.z=e[t+2],this}toArray(e,t=0){return e[t+0]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}}const NS=new be,Jf=new be(0,1,0),jf=new be,zs=new be,Kf=new be,Zf=new be,ic=[2,2,1],rc=[1,0,0];class ch{constructor(){this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[3]=t,u[6]=n,u[1]=i,u[4]=r,u[7]=a,u[2]=o,u[5]=l,u[8]=c,this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}clone(){return new this.constructor().copy(this)}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],S=i[1],M=i[4],x=i[7],E=i[2],A=i[5],T=i[8];return r[0]=a*g+o*S+l*E,r[3]=a*p+o*M+l*A,r[6]=a*m+o*x+l*T,r[1]=c*g+u*S+h*E,r[4]=c*p+u*M+h*A,r[7]=c*m+u*x+h*T,r[2]=f*g+d*S+_*E,r[5]=f*p+d*M+_*A,r[8]=f*m+d*x+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}extractBasis(e,t,n){return e.fromMatrix3Column(this,0),t.fromMatrix3Column(this,1),n.fromMatrix3Column(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,e.y,t.y,n.y,e.z,t.z,n.z),this}lookAt(e,t,n){return jf.crossVectors(n,e).normalize(),zs.crossVectors(Jf,t).normalize(),zs.squaredLength()===0&&(Zf.copy(t).addScalar(Number.EPSILON),zs.crossVectors(Jf,Zf).normalize()),Kf.crossVectors(t,zs).normalize(),qr.makeBasis(zs,Kf,t),io.makeBasis(jf,n,e),this.multiplyMatrices(qr,io.transpose()),this}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getElementIndex(e,t){return e*3+t}frobeniusNorm(){const e=this.elements;let t=0;for(let n=0;n<9;n++)t+=e[n]*e[n];return Math.sqrt(t)}offDiagonalFrobeniusNorm(){const e=this.elements;let t=0;for(let n=0;n<3;n++){const i=e[this.getElementIndex(ic[n],rc[n])];t+=2*i*i}return Math.sqrt(t)}eigenDecomposition(e){let t=0,n=0;const i=10;e.unitary.identity(),e.diagonal.copy(this);const r=e.unitary,a=e.diagonal,o=Number.EPSILON*a.frobeniusNorm();for(;n<i&&a.offDiagonalFrobeniusNorm()>o;)a.shurDecomposition(qr),io.copy(qr).transpose(),a.multiply(qr),a.premultiply(io),r.multiply(qr),++t>2&&(n++,t=0);return e}shurDecomposition(e){let t=0,n=1;const i=this.elements;for(let c=0;c<3;c++){const u=Math.abs(i[this.getElementIndex(ic[c],rc[c])]);u>t&&(t=u,n=c)}let r=1,a=0;const o=rc[n],l=ic[n];if(Math.abs(i[this.getElementIndex(l,o)])>Number.EPSILON){const c=i[this.getElementIndex(l,l)],u=i[this.getElementIndex(o,o)],h=i[this.getElementIndex(l,o)],f=(c-u)/2/h;let d;f<0?d=-1/(-f+Math.sqrt(1+f*f)):d=1/(f+Math.sqrt(1+f*f)),r=1/Math.sqrt(1+d*d),a=d*r}return e.identity(),e.elements[this.getElementIndex(o,o)]=r,e.elements[this.getElementIndex(l,l)]=r,e.elements[this.getElementIndex(l,o)]=a,e.elements[this.getElementIndex(o,l)]=-a,e}fromQuaternion(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=e.w,o=n+n,l=i+i,c=r+r,u=n*o,h=n*l,f=n*c,d=i*l,_=i*c,g=r*c,p=a*o,m=a*l,S=a*c;return t[0]=1-(d+g),t[3]=h-S,t[6]=f+m,t[1]=h+S,t[4]=1-(u+g),t[7]=_-p,t[2]=f-m,t[5]=_+p,t[8]=1-(u+d),this}fromMatrix4(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],this}fromArray(e,t=0){const n=this.elements;for(let i=0;i<9;i++)n[i]=e[i+t];return this}toArray(e,t=0){const n=this.elements;return e[t+0]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}}const qr=new ch,io=new ch,ro=new ch,sc=new be;class Jo{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}clone(){return new this.constructor().copy(this)}inverse(){return this.conjugate().normalize()}conjugate(){return this.x*=-1,this.y*=-1,this.z*=-1,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}length(){return Math.sqrt(this.squaredLength())}squaredLength(){return this.dot(this)}normalize(){let e=this.length();return e===0?(this.x=0,this.y=0,this.z=0,this.w=1):(e=1/e,this.x=this.x*e,this.y=this.y*e,this.z=this.z*e,this.w=this.w*e),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e.x,i=e.y,r=e.z,a=e.w,o=t.x,l=t.y,c=t.z,u=t.w;return this.x=n*u+a*o+i*c-r*l,this.y=i*u+a*l+r*o-n*c,this.z=r*u+a*c+n*l-i*o,this.w=a*u-n*o-i*l-r*c,this}angleTo(e){return 2*Math.acos(Math.abs(da.clamp(this.dot(e),-1,1)))}rotateTo(e,t,n=1e-4){const i=this.angleTo(e);if(i<n)return!0;const r=Math.min(1,t/i);return this.slerp(e,r),!1}lookAt(e,t,n){ro.lookAt(e,t,n),this.fromMatrix3(ro)}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this.x,i=this.y,r=this.z,a=this.w;let o=a*e.w+n*e.x+i*e.y+r*e.z;if(o<0?(this.w=-e.w,this.x=-e.x,this.y=-e.y,this.z=-e.z,o=-o):this.copy(e),o>=1)return this.w=a,this.x=n,this.y=i,this.z=r,this;const l=Math.sqrt(1-o*o);if(Math.abs(l)<.001)return this.w=.5*(a+this.w),this.x=.5*(n+this.x),this.y=.5*(i+this.y),this.z=.5*(r+this.z),this;const c=Math.atan2(l,o),u=Math.sin((1-t)*c)/l,h=Math.sin(t*c)/l;return this.w=a*u+this.w*h,this.x=n*u+this.x*h,this.y=i*u+this.y*h,this.z=r*u+this.z*h,this}extractRotationFromMatrix(e){const t=ro.elements,n=e.elements,i=1/sc.fromMatrix4Column(e,0).length(),r=1/sc.fromMatrix4Column(e,1).length(),a=1/sc.fromMatrix4Column(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=n[4]*r,t[4]=n[5]*r,t[5]=n[6]*r,t[6]=n[8]*a,t[7]=n[9]*a,t[8]=n[10]*a,this.fromMatrix3(ro),this}fromEuler(e,t,n){const i=Math.cos(t/2),r=Math.cos(e/2),a=Math.cos(n/2),o=Math.sin(t/2),l=Math.sin(e/2),c=Math.sin(n/2);return this.w=i*r*a+o*l*c,this.x=i*l*a+o*r*c,this.y=o*r*a-i*l*c,this.z=i*r*c-o*l*a,this}toEuler(e){const t=-2*(this.y*this.z-this.x*this.w);return Math.abs(t)>.9999?(e.x=Math.PI*.5*t,e.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),e.z=0):(e.x=Math.asin(t),e.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),e.z=Math.atan2(this.x*this.y+this.w*this.z,.5-this.x*this.x-this.z*this.z)),e}fromMatrix3(e){const t=e.elements,n=t[0],i=t[3],r=t[6],a=t[1],o=t[4],l=t[7],c=t[2],u=t[5],h=t[8],f=n+o+h;if(f>0){let d=.5/Math.sqrt(f+1);this.w=.25/d,this.x=(u-l)*d,this.y=(r-c)*d,this.z=(a-i)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this.w=(u-l)/d,this.x=.25*d,this.y=(i+a)/d,this.z=(r+c)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this.w=(r-c)/d,this.x=(i+a)/d,this.y=.25*d,this.z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-o);this.w=(a-i)/d,this.x=(r+c)/d,this.y=(l+u)/d,this.z=.25*d}return this}fromArray(e,t=0){return this.x=e[t+0],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e,t=0){return e[t+0]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}}class pa{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,o,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}clone(){return new this.constructor().copy(this)}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],S=n[3],M=n[7],x=n[11],E=n[15],A=i[0],T=i[4],b=i[8],v=i[12],y=i[1],C=i[5],R=i[9],U=i[13],L=i[2],B=i[6],I=i[10],W=i[14],H=i[3],Y=i[7],X=i[11],F=i[15];return r[0]=a*A+o*y+l*L+c*H,r[4]=a*T+o*C+l*B+c*Y,r[8]=a*b+o*R+l*I+c*X,r[12]=a*v+o*U+l*W+c*F,r[1]=u*A+h*y+f*L+d*H,r[5]=u*T+h*C+f*B+d*Y,r[9]=u*b+h*R+f*I+d*X,r[13]=u*v+h*U+f*W+d*F,r[2]=_*A+g*y+p*L+m*H,r[6]=_*T+g*C+p*B+m*Y,r[10]=_*b+g*R+p*I+m*X,r[14]=_*v+g*U+p*W+m*F,r[3]=S*A+M*y+x*L+E*H,r[7]=S*T+M*C+x*B+E*Y,r[11]=S*b+M*R+x*I+E*X,r[15]=S*v+M*U+x*W+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}extractBasis(e,t,n){return e.fromMatrix4Column(this,0),t.fromMatrix4Column(this,1),n.fromMatrix4Column(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}compose(e,t,n){return this.fromQuaternion(t),this.scale(n),this.setPosition(e),this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}setPosition(e){const t=this.elements;return t[12]=e.x,t[13]=e.y,t[14]=e.z,this}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}getInverse(e){const t=this.elements,n=e.elements,i=t[0],r=t[1],a=t[2],o=t[3],l=t[4],c=t[5],u=t[6],h=t[7],f=t[8],d=t[9],_=t[10],g=t[11],p=t[12],m=t[13],S=t[14],M=t[15],x=d*S*h-m*_*h+m*u*g-c*S*g-d*u*M+c*_*M,E=p*_*h-f*S*h-p*u*g+l*S*g+f*u*M-l*_*M,A=f*m*h-p*d*h+p*c*g-l*m*g-f*c*M+l*d*M,T=p*d*u-f*m*u-p*c*_+l*m*_+f*c*S-l*d*S,b=i*x+r*E+a*A+o*T;if(b===0)return e.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/b;return n[0]=x*v,n[1]=(m*_*o-d*S*o-m*a*g+r*S*g+d*a*M-r*_*M)*v,n[2]=(c*S*o-m*u*o+m*a*h-r*S*h-c*a*M+r*u*M)*v,n[3]=(d*u*o-c*_*o-d*a*h+r*_*h+c*a*g-r*u*g)*v,n[4]=E*v,n[5]=(f*S*o-p*_*o+p*a*g-i*S*g-f*a*M+i*_*M)*v,n[6]=(p*u*o-l*S*o-p*a*h+i*S*h+l*a*M-i*u*M)*v,n[7]=(l*_*o-f*u*o+f*a*h-i*_*h-l*a*g+i*u*g)*v,n[8]=A*v,n[9]=(p*d*o-f*m*o-p*r*g+i*m*g+f*r*M-i*d*M)*v,n[10]=(l*m*o-p*c*o+p*r*h-i*m*h-l*r*M+i*c*M)*v,n[11]=(f*c*o-l*d*o-f*r*h+i*d*h+l*r*g-i*c*g)*v,n[12]=T*v,n[13]=(f*m*a-p*d*a+p*r*_-i*m*_-f*r*S+i*d*S)*v,n[14]=(p*c*a-l*m*a-p*r*u+i*m*u+l*r*S-i*c*S)*v,n[15]=(l*d*a-f*c*a+f*r*u-i*d*u-l*r*_+i*c*_)*v,e}getMaxScale(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}fromQuaternion(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=e.w,o=n+n,l=i+i,c=r+r,u=n*o,h=n*l,f=n*c,d=i*l,_=i*c,g=r*c,p=a*o,m=a*l,S=a*c;return t[0]=1-(d+g),t[4]=h-S,t[8]=f+m,t[1]=h+S,t[5]=1-(u+g),t[9]=_-p,t[2]=f-m,t[6]=_+p,t[10]=1-(u+d),t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}fromMatrix3(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=0,t[4]=n[3],t[5]=n[4],t[6]=n[5],t[7]=0,t[8]=n[6],t[9]=n[7],t[10]=n[8],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}fromArray(e,t=0){const n=this.elements;for(let i=0;i<16;i++)n[i]=e[i+t];return this}toArray(e,t=0){const n=this.elements;return e[t+0]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}}const so=new Jo,Oi=new be,ao=new be,Yr=new Jo;class uh{constructor(){this.name="",this.active=!0,this.children=new Array,this.parent=null,this.neighbors=new Array,this.neighborhoodRadius=1,this.updateNeighborhood=!1,this.position=new be,this.rotation=new Jo,this.scale=new be(1,1,1),this.forward=new be(0,0,1),this.up=new be(0,1,0),this.boundingRadius=0,this.maxTurnRate=Math.PI,this.canActivateTrigger=!0,this.manager=null,this._localMatrix=new pa,this._worldMatrix=new pa,this._cache={position:new be,rotation:new Jo,scale:new be(1,1,1)},this._renderComponent=null,this._renderComponentCallback=null,this._started=!1,this._uuid=null,this._worldMatrixDirty=!1}get worldMatrix(){return this._updateWorldMatrix(),this._worldMatrix}get uuid(){return this._uuid===null&&(this._uuid=da.generateUUID()),this._uuid}start(){return this}update(){return this}add(e){return e.parent!==null&&e.parent.remove(e),this.children.push(e),e.parent=this,this}remove(e){const t=this.children.indexOf(e);return this.children.splice(t,1),e.parent=null,this}getDirection(e){return e.copy(this.forward).applyRotation(this.rotation).normalize()}lookAt(e){const t=this.parent;return t!==null?(this.getWorldPosition(ao),Oi.subVectors(e,ao).normalize(),this.rotation.lookAt(this.forward,Oi,this.up),Yr.extractRotationFromMatrix(t.worldMatrix).inverse(),this.rotation.premultiply(Yr)):(Oi.subVectors(e,this.position).normalize(),this.rotation.lookAt(this.forward,Oi,this.up)),this}rotateTo(e,t,n=1e-4){const i=this.parent;return i!==null?(this.getWorldPosition(ao),Oi.subVectors(e,ao).normalize(),so.lookAt(this.forward,Oi,this.up),Yr.extractRotationFromMatrix(i.worldMatrix).inverse(),so.premultiply(Yr)):(Oi.subVectors(e,this.position).normalize(),so.lookAt(this.forward,Oi,this.up)),this.rotation.rotateTo(so,this.maxTurnRate*t,n)}getWorldDirection(e){return Yr.extractRotationFromMatrix(this.worldMatrix),e.copy(this.forward).applyRotation(Yr).normalize()}getWorldPosition(e){return e.extractPositionFromMatrix(this.worldMatrix)}setRenderComponent(e,t){return this._renderComponent=e,this._renderComponentCallback=t,this}handleMessage(){return!1}lineOfSightTest(){return null}sendMessage(e,t,n=0,i=null){return this.manager!==null?this.manager.sendMessage(this,e,t,n,i):jn.error("YUKA.GameEntity: The game entity must be added to a manager in order to send a message."),this}toJSON(){return{type:this.constructor.name,uuid:this.uuid,name:this.name,active:this.active,children:Qf(this.children),parent:this.parent!==null?this.parent.uuid:null,neighbors:Qf(this.neighbors),neighborhoodRadius:this.neighborhoodRadius,updateNeighborhood:this.updateNeighborhood,position:this.position.toArray(new Array),rotation:this.rotation.toArray(new Array),scale:this.scale.toArray(new Array),forward:this.forward.toArray(new Array),up:this.up.toArray(new Array),boundingRadius:this.boundingRadius,maxTurnRate:this.maxTurnRate,canActivateTrigger:this.canActivateTrigger,worldMatrix:this.worldMatrix.toArray(new Array),_localMatrix:this._localMatrix.toArray(new Array),_cache:{position:this._cache.position.toArray(new Array),rotation:this._cache.rotation.toArray(new Array),scale:this._cache.scale.toArray(new Array)},_started:this._started}}fromJSON(e){return this.name=e.name,this.active=e.active,this.neighborhoodRadius=e.neighborhoodRadius,this.updateNeighborhood=e.updateNeighborhood,this.position.fromArray(e.position),this.rotation.fromArray(e.rotation),this.scale.fromArray(e.scale),this.forward.fromArray(e.forward),this.up.fromArray(e.up),this.boundingRadius=e.boundingRadius,this.maxTurnRate=e.maxTurnRate,this.canActivateTrigger=e.canActivateTrigger,this.children=e.children.slice(),this.neighbors=e.neighbors.slice(),this.parent=e.parent,this._localMatrix.fromArray(e._localMatrix),this._worldMatrix.fromArray(e.worldMatrix),this._cache.position.fromArray(e._cache.position),this._cache.rotation.fromArray(e._cache.rotation),this._cache.scale.fromArray(e._cache.scale),this._started=e._started,this._uuid=e.uuid,this}resolveReferences(e){const t=this.neighbors;for(let i=0,r=t.length;i<r;i++)t[i]=e.get(t[i]);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i]=e.get(n[i]);return this.parent=e.get(this.parent)||null,this}_updateMatrix(){const e=this._cache;e.position.equals(this.position)&&e.rotation.equals(this.rotation)&&e.scale.equals(this.scale)||(this._localMatrix.compose(this.position,this.rotation,this.scale),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale),this._worldMatrixDirty=!0)}_updateWorldMatrix(){const e=this.parent;if(e!==null&&e._updateWorldMatrix(),this._updateMatrix(),this._worldMatrixDirty===!0){e===null?this._worldMatrix.copy(this._localMatrix):this._worldMatrix.multiplyMatrices(this.parent._worldMatrix,this._localMatrix),this._worldMatrixDirty=!1;const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];r._worldMatrixDirty=!0}}}updateWorldMatrix(){return console.warn("GameEntity: .updateWorldMatrix() has been removed. World matrices are automatically updated on access."),this}}function Qf(s){const e=new Array;for(let t=0,n=s.length;t<n;t++)e.push(s[t].uuid);return e}const $f=new be,ac=new be;class Sm extends uh{constructor(){super(),this.velocity=new be,this.maxSpeed=1,this.updateOrientation=!0}update(e){return this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),$f.copy(this.velocity).multiplyScalar(e),ac.copy(this.position).add($f),this.updateOrientation&&this.getSpeedSquared()>1e-8&&this.lookAt(ac),this.position.copy(ac),this}getSpeed(){return this.velocity.length()}getSpeedSquared(){return this.velocity.squaredLength()}toJSON(){const e=super.toJSON();return e.velocity=this.velocity.toArray(new Array),e.maxSpeed=this.maxSpeed,e.updateOrientation=this.updateOrientation,e}fromJSON(e){return super.fromJSON(e),this.velocity.fromArray(e.velocity),this.maxSpeed=e.maxSpeed,this.updateOrientation=e.updateOrientation,this}}class dn{constructor(){this.active=!0,this.weight=1}calculate(){}toJSON(){return{type:this.constructor.name,active:this.active,weight:this.weight}}fromJSON(e){return this.active=e.active,this.weight=e.weight,this}resolveReferences(){}}const oo=new be,lo=new be;class OS extends dn{constructor(){super()}calculate(e,t){oo.set(0,0,0);const n=e.neighbors;for(let i=0,r=n.length;i<r;i++)n[i].getDirection(lo),oo.add(lo);return n.length>0&&(oo.divideScalar(n.length),e.getDirection(lo),t.subVectors(oo,lo)),t}}const oc=new be,lc=new be;class nl extends dn{constructor(e=new be,t=3,n=0){super(),this.target=e,this.deceleration=t,this.tolerance=n}calculate(e,t){const n=this.target,i=this.deceleration;lc.subVectors(n,e.position);const r=lc.length();if(r>this.tolerance){let a=r/i;a=Math.min(a,e.maxSpeed),oc.copy(lc).multiplyScalar(a/r)}else oc.set(0,0,0);return t.subVectors(oc,e.velocity)}toJSON(){const e=super.toJSON();return e.target=this.target.toArray(new Array),e.deceleration=this.deceleration,e}fromJSON(e){return super.fromJSON(e),this.target.fromArray(e.target),this.deceleration=e.deceleration,this}}const cc=new be;class il extends dn{constructor(e=new be){super(),this.target=e}calculate(e,t){const n=this.target;return cc.subVectors(n,e.position).normalize(),cc.multiplyScalar(e.maxSpeed),t.subVectors(cc,e.velocity)}toJSON(){const e=super.toJSON();return e.target=this.target.toArray(new Array),e}fromJSON(e){return super.fromJSON(e),this.target.fromArray(e.target),this}}const co=new be;class BS extends dn{constructor(){super(),this._seek=new il}calculate(e,t){co.set(0,0,0);const n=e.neighbors;for(let i=0,r=n.length;i<r;i++){const a=n[i];co.add(a.position)}return n.length>0&&(co.divideScalar(n.length),this._seek.target=co,this._seek.calculate(e,t),t.normalize()),t}}const Gs=new be;class Mm extends dn{constructor(e=new be,t=10){super(),this.target=e,this.panicDistance=t}calculate(e,t){const n=this.target;return e.position.squaredDistanceTo(n)<=this.panicDistance*this.panicDistance&&(Gs.subVectors(e.position,n).normalize(),Gs.squaredLength()===0&&Gs.set(0,0,1),Gs.multiplyScalar(e.maxSpeed),t.subVectors(Gs,e.velocity)),t}toJSON(){const e=super.toJSON();return e.target=this.target.toArray(new Array),e.panicDistance=this.panicDistance,e}fromJSON(e){return super.fromJSON(e),this.target.fromArray(e.target),this.panicDistance=e.panicDistance,this}}const ed=new be,td=new be,nd=new be;class kS extends dn{constructor(e=null,t=10,n=1){super(),this.pursuer=e,this.panicDistance=t,this.predictionFactor=n,this._flee=new Mm}calculate(e,t){const n=this.pursuer;ed.subVectors(n.position,e.position);let i=ed.length()/(e.maxSpeed+n.getSpeed());return i*=this.predictionFactor,td.copy(n.velocity).multiplyScalar(i),nd.addVectors(n.position,td),this._flee.target=nd,this._flee.panicDistance=this.panicDistance,this._flee.calculate(e,t),t}toJSON(){const e=super.toJSON();return e.pursuer=this.pursuer?this.pursuer.uuid:null,e.panicDistance=this.panicDistance,e.predictionFactor=this.predictionFactor,e}fromJSON(e){return super.fromJSON(e),this.pursuer=e.pursuer,this.panicDistance=e.panicDistance,this.predictionFactor=e.predictionFactor,this}resolveReferences(e){this.pursuer=e.get(this.pursuer)||null}}class Tm{constructor(){this.loop=!1,this._waypoints=new Array,this._index=0}add(e){return this._waypoints.push(e),this}clear(){return this._waypoints.length=0,this._index=0,this}current(){return this._waypoints[this._index]}finished(){const e=this._waypoints.length-1;return this.loop===!0?!1:this._index===e}advance(){return this._index++,this._index===this._waypoints.length&&(this.loop===!0?this._index=0:this._index--),this}toJSON(){const e={type:this.constructor.name,loop:this.loop,_waypoints:new Array,_index:this._index},t=this._waypoints;for(let n=0,i=t.length;n<i;n++){const r=t[n];e._waypoints.push(r.toArray(new Array))}return e}fromJSON(e){this.loop=e.loop,this._index=e._index;const t=e._waypoints;for(let n=0,i=t.length;n<i;n++){const r=t[n];this._waypoints.push(new be().fromArray(r))}return this}}class bm extends dn{constructor(e=new Tm,t=1){super(),this.path=e,this.nextWaypointDistance=t,this._arrive=new nl,this._seek=new il}calculate(e,t){const n=this.path;n.current().squaredDistanceTo(e.position)<this.nextWaypointDistance*this.nextWaypointDistance&&n.advance();const r=n.current();return n.finished()===!0?(this._arrive.target=r,this._arrive.calculate(e,t)):(this._seek.target=r,this._seek.calculate(e,t)),t}toJSON(){const e=super.toJSON();return e.path=this.path.toJSON(),e.nextWaypointDistance=this.nextWaypointDistance,e}fromJSON(e){return super.fromJSON(e),this.path.fromJSON(e.path),this.nextWaypointDistance=e.nextWaypointDistance,this}}const uo=new be,ho=new be,id=new be,rd=new be;class zS extends dn{constructor(e=null,t=null,n=3){super(),this.entity1=e,this.entity2=t,this.deceleration=n,this._arrive=new nl}calculate(e,t){const n=this.entity1,i=this.entity2;uo.addVectors(n.position,i.position).multiplyScalar(.5);const r=e.position.distanceTo(uo)/e.maxSpeed;return ho.copy(n.velocity).multiplyScalar(r),id.addVectors(n.position,ho),ho.copy(i.velocity).multiplyScalar(r),rd.addVectors(i.position,ho),uo.addVectors(id,rd).multiplyScalar(.5),this._arrive.deceleration=this.deceleration,this._arrive.target=uo,this._arrive.calculate(e,t),t}toJSON(){const e=super.toJSON();return e.entity1=this.entity1?this.entity1.uuid:null,e.entity2=this.entity2?this.entity2.uuid:null,e.deceleration=this.deceleration,e}fromJSON(e){return super.fromJSON(e),this.entity1=e.entity1,this.entity2=e.entity2,this.deceleration=e.deceleration,this}resolveReferences(e){this.entity1=e.get(this.entity1)||null,this.entity2=e.get(this.entity2)||null}}const Rn=new be,Vs=new be,Bi=new be,di=[new be,new be,new be,new be,new be,new be,new be,new be];class hh{constructor(e=new be,t=new be){this.min=e,this.max=t}set(e,t){return this.min=e,this.max=t,this}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}clone(){return new this.constructor().copy(this)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max),t}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}expand(e){return this.min.min(e),this.max.max(e),this}getCenter(e){return e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e.subVectors(this.max,this.min)}intersectsAABB(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsBoundingSphere(e){return this.clampPoint(e.center,Rn),Rn.squaredDistanceTo(e.center)<=e.radius*e.radius}intersectsPlane(e){const t=e.normal;this.getCenter(Vs),Bi.subVectors(this.max,Vs);const n=Bi.x*Math.abs(t.x)+Bi.y*Math.abs(t.y)+Bi.z*Math.abs(t.z),i=e.distanceToPoint(Vs);return Math.abs(i)<=n}getNormalFromSurfacePoint(e,t){t.set(0,0,0);let n,i=1/0;return this.getCenter(Vs),this.getSize(Bi),Rn.copy(e).sub(Vs),n=Math.abs(Bi.x-Math.abs(Rn.x)),n<i&&(i=n,t.set(1*Math.sign(Rn.x),0,0)),n=Math.abs(Bi.y-Math.abs(Rn.y)),n<i&&(i=n,t.set(0,1*Math.sign(Rn.y),0)),n=Math.abs(Bi.z-Math.abs(Rn.z)),n<i&&t.set(0,0,1*Math.sign(Rn.z)),t}fromCenterAndSize(e,t){return Rn.copy(t).multiplyScalar(.5),this.min.copy(e).sub(Rn),this.max.copy(e).add(Rn),this}fromPoints(e){this.min.set(1/0,1/0,1/0),this.max.set(-1/0,-1/0,-1/0);for(let t=0,n=e.length;t<n;t++)this.expand(e[t]);return this}applyMatrix4(e){const t=this.min,n=this.max;return di[0].set(t.x,t.y,t.z).applyMatrix4(e),di[1].set(t.x,t.y,n.z).applyMatrix4(e),di[2].set(t.x,n.y,t.z).applyMatrix4(e),di[3].set(t.x,n.y,n.z).applyMatrix4(e),di[4].set(n.x,t.y,t.z).applyMatrix4(e),di[5].set(n.x,t.y,n.z).applyMatrix4(e),di[6].set(n.x,n.y,t.z).applyMatrix4(e),di[7].set(n.x,n.y,n.z).applyMatrix4(e),this.fromPoints(di)}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{type:this.constructor.name,min:this.min.toArray(new Array),max:this.max.toArray(new Array)}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const uc=new hh;class rl{constructor(e=new be,t=0){this.center=e,this.radius=t}set(e,t){return this.center=e,this.radius=t,this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}clone(){return new this.constructor().copy(this)}clampPoint(e,t){return t.copy(e),this.center.squaredDistanceTo(e)>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}containsPoint(e){return e.squaredDistanceTo(this.center)<=this.radius*this.radius}intersectsBoundingSphere(e){const t=this.radius+e.radius;return e.center.squaredDistanceTo(this.center)<=t*t}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}getNormalFromSurfacePoint(e,t){return t.subVectors(e,this.center).normalize()}fromPoints(e){return uc.fromPoints(e),uc.getCenter(this.center),this.radius=this.center.distanceTo(uc.max),this}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScale(),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}toJSON(){return{type:this.constructor.name,center:this.center.toArray(new Array),radius:this.radius}}fromJSON(e){return this.center.fromArray(e.center),this.radius=e.radius,this}}const Cn=new be,hc=new be,fo=new be,fc=new be,sd=new be,po=new pa,GS=new pa,ad=new hh;class Em{constructor(e=new be,t=new be){this.origin=e,this.direction=t}set(e,t){return this.origin=e,this.direction=t,this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}clone(){return new this.constructor().copy(this)}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}intersectBoundingSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsBoundingSphere(e){const t=new be;let n;const i=t.subVectors(e.center,this.origin).dot(this.direction);return i<0?n=this.origin.squaredDistanceTo(e.center):(t.copy(this.direction).multiplyScalar(i).add(this.origin),n=t.squaredDistanceTo(e.center)),n<=e.radius*e.radius}intersectAABB(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsAABB(e){return this.intersectAABB(e,Cn)!==null}intersectPlane(e,t){let n;const i=e.normal.dot(this.direction);if(i===0)if(e.distanceToPoint(this.origin)===0)n=0;else return null;else n=-(this.origin.dot(e.normal)+e.constant)/i;return n>=0?this.at(n,t):null}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectOBB(e,t){return e.getSize(sd),ad.fromCenterAndSize(Cn.set(0,0,0),sd),po.fromMatrix3(e.rotation),po.setPosition(e.center),od.copy(this).applyMatrix4(po.getInverse(GS)),od.intersectAABB(ad,t)?t.applyMatrix4(po):null}intersectsOBB(e){return this.intersectOBB(e,Cn)!==null}intersectConvexHull(e,t){const n=e.faces;let i=-1/0,r=1/0;for(let a=0,o=n.length;a<o;a++){const c=n[a].plane,u=c.distanceToPoint(this.origin),h=c.normal.dot(this.direction);if(u>0&&h>=0)return null;const f=h!==0?-u/h:0;if(!(f<=0)&&(h>0?r=Math.min(f,r):i=Math.max(f,i),i>r))return null}return i!==-1/0?this.at(i,t):this.at(r,t),t}intersectsConvexHull(e){return this.intersectConvexHull(e,Cn)!==null}intersectTriangle(e,t,n){const i=e.a,r=e.b,a=e.c;hc.subVectors(r,i),fo.subVectors(a,i),fc.crossVectors(hc,fo);let o=this.direction.dot(fc),l;if(o>0){if(t)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Cn.subVectors(this.origin,i);const c=l*this.direction.dot(fo.crossVectors(Cn,fo));if(c<0)return null;const u=l*this.direction.dot(hc.cross(Cn));if(u<0||c+u>o)return null;const h=-l*Cn.dot(fc);return h<0?null:this.at(h/o,n)}intersectBVH(e,t){return e.root.intersectRay(this,t)}intersectsBVH(e){return e.root.intersectsRay(this)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}}const od=new Em,ld=new pa,Jr=new be,mo=new be,dc=new be,pc=new rl,VS=new Em(new be(0,0,0),new be(0,0,1));class HS extends dn{constructor(e=new Array){super(),this.obstacles=e,this.brakingWeight=.2,this.dBoxMinLength=4}calculate(e,t){const n=this.obstacles;let i=null,r=1/0;const a=this.dBoxMinLength+e.getSpeed()/e.maxSpeed*this.dBoxMinLength;e.worldMatrix.getInverse(ld);for(let o=0,l=n.length;o<l;o++){const c=n[o];if(c!==e&&(Jr.copy(c.position).applyMatrix4(ld),Jr.z>0&&Math.abs(Jr.z)<a)){const u=c.boundingRadius+e.boundingRadius;Math.abs(Jr.x)<u&&(pc.center.copy(Jr),pc.radius=u,VS.intersectBoundingSphere(pc,dc),dc.z<r&&(r=dc.z,i=c,mo.copy(Jr)))}}if(i!==null){const o=1+(a-mo.z)/a;t.x=(i.boundingRadius-mo.x)*o,t.z=(i.boundingRadius-mo.z)*this.brakingWeight,t.applyRotation(e.rotation)}return t}toJSON(){const e=super.toJSON();e.obstacles=new Array,e.brakingWeight=this.brakingWeight,e.dBoxMinLength=this.dBoxMinLength;for(let t=0,n=this.obstacles.length;t<n;t++)e.obstacles.push(this.obstacles[t].uuid);return e}fromJSON(e){return super.fromJSON(e),this.obstacles=e.obstacles,this.brakingWeight=e.brakingWeight,this.dBoxMinLength=e.dBoxMinLength,this}resolveReferences(e){const t=this.obstacles;for(let n=0,i=t.length;n<i;n++)t[n]=e.get(t[n])}}const mc=new be,cd=new be,ud=new be,hd=new be;class WS extends dn{constructor(e=null,t=new be){super(),this.leader=e,this.offset=t,this._arrive=new nl,this._arrive.deceleration=1.5}calculate(e,t){const n=this.leader,i=this.offset;mc.copy(i).applyMatrix4(n.worldMatrix),cd.subVectors(mc,e.position);const r=cd.length()/(e.maxSpeed+n.getSpeed());return ud.copy(n.velocity).multiplyScalar(r),hd.addVectors(mc,ud),this._arrive.target=hd,this._arrive.calculate(e,t),t}toJSON(){const e=super.toJSON();return e.leader=this.leader?this.leader.uuid:null,e.offset=this.offset,e}fromJSON(e){return super.fromJSON(e),this.leader=e.leader,this.offset=e.offset,this}resolveReferences(e){this.leader=e.get(this.leader)||null}}const gc=new be,_c=new be,fd=new be,dd=new be,pd=new be;class XS extends dn{constructor(e=null,t=1){super(),this.evader=e,this.predictionFactor=t,this._seek=new il}calculate(e,t){const n=this.evader;gc.subVectors(n.position,e.position),e.getDirection(_c),n.getDirection(fd);const i=gc.dot(_c)>0,r=_c.dot(fd)<-.95;if(i===!0&&r===!0)return this._seek.target=n.position,this._seek.calculate(e,t),t;let a=gc.length()/(e.maxSpeed+n.getSpeed());return a*=this.predictionFactor,dd.copy(n.velocity).multiplyScalar(a),pd.addVectors(n.position,dd),this._seek.target=pd,this._seek.calculate(e,t),t}toJSON(){const e=super.toJSON();return e.evader=this.evader?this.evader.uuid:null,e.predictionFactor=this.predictionFactor,e}fromJSON(e){return super.fromJSON(e),this.evader=e.evader,this.predictionFactor=e.predictionFactor,this}resolveReferences(e){this.evader=e.get(this.evader)||null}}const go=new be;class qS extends dn{constructor(){super()}calculate(e,t){const n=e.neighbors;for(let i=0,r=n.length;i<r;i++){const a=n[i];go.subVectors(e.position,a.position);let o=go.length();o===0&&(o=1e-4),go.normalize().divideScalar(o),t.add(go)}return t}}const _o=new be,vc=new be;class YS extends dn{constructor(e=1,t=5,n=5){super(),this.radius=e,this.distance=t,this.jitter=n,this._targetLocal=new be,JS(this.radius,this._targetLocal)}calculate(e,t,n){const i=this.jitter*n;return vc.x=da.randFloat(-1,1)*i,vc.z=da.randFloat(-1,1)*i,this._targetLocal.add(vc),this._targetLocal.normalize(),this._targetLocal.multiplyScalar(this.radius),_o.copy(this._targetLocal),_o.z+=this.distance,_o.applyMatrix4(e.worldMatrix),t.subVectors(_o,e.position),t}toJSON(){const e=super.toJSON();return e.radius=this.radius,e.distance=this.distance,e.jitter=this.jitter,e._targetLocal=this._targetLocal.toArray(new Array),e}fromJSON(e){return super.fromJSON(e),this.radius=e.radius,this.distance=e.distance,this.jitter=e.jitter,this._targetLocal.fromArray(e._targetLocal),this}}function JS(s,e){const t=Math.random()*Math.PI*2;e.x=s*Math.cos(t),e.z=s*Math.sin(t)}const vo=new be;class md{constructor(e){this.vehicle=e,this.behaviors=new Array,this._steeringForce=new be,this._typesMap=new Map}add(e){return this.behaviors.push(e),this}remove(e){const t=this.behaviors.indexOf(e);return this.behaviors.splice(t,1),this}clear(){return this.behaviors.length=0,this}calculate(e,t){return this._calculateByOrder(e),t.copy(this._steeringForce)}_accumulate(e){const t=this._steeringForce.length(),n=this.vehicle.maxForce-t;return n<=0?!1:(e.length()>n&&e.normalize().multiplyScalar(n),this._steeringForce.add(e),!0)}_calculateByOrder(e){const t=this.behaviors;this._steeringForce.set(0,0,0);for(let n=0,i=t.length;n<i;n++){const r=t[n];if(r.active===!0&&(vo.set(0,0,0),r.calculate(this.vehicle,vo,e),vo.multiplyScalar(r.weight),this._accumulate(vo)===!1))return}}toJSON(){const e={type:"SteeringManager",behaviors:new Array},t=this.behaviors;for(let n=0,i=t.length;n<i;n++){const r=t[n];e.behaviors.push(r.toJSON())}return e}fromJSON(e){this.clear();const t=e.behaviors;for(let n=0,i=t.length;n<i;n++){const r=t[n],a=r.type;let o;switch(a){case"SteeringBehavior":o=new dn().fromJSON(r);break;case"AlignmentBehavior":o=new OS().fromJSON(r);break;case"ArriveBehavior":o=new nl().fromJSON(r);break;case"CohesionBehavior":o=new BS().fromJSON(r);break;case"EvadeBehavior":o=new kS().fromJSON(r);break;case"FleeBehavior":o=new Mm().fromJSON(r);break;case"FollowPathBehavior":o=new bm().fromJSON(r);break;case"InterposeBehavior":o=new zS().fromJSON(r);break;case"ObstacleAvoidanceBehavior":o=new HS().fromJSON(r);break;case"OffsetPursuitBehavior":o=new WS().fromJSON(r);break;case"PursuitBehavior":o=new XS().fromJSON(r);break;case"SeekBehavior":o=new il().fromJSON(r);break;case"SeparationBehavior":o=new qS().fromJSON(r);break;case"WanderBehavior":o=new YS().fromJSON(r);break;default:const l=this._typesMap.get(a);if(l!==void 0)o=new l().fromJSON(r);else{jn.warn("YUKA.SteeringManager: Unsupported steering behavior type:",a);continue}}this.add(o)}return this}registerType(e,t){return this._typesMap.set(e,t),this}resolveReferences(e){const t=this.behaviors;for(let n=0,i=t.length;n<i;n++)t[n].resolveReferences(e);return this}}class jS{constructor(e=10){this.count=e,this._history=new Array,this._slot=0;for(let t=0;t<this.count;t++)this._history[t]=new be}calculate(e,t){t.set(0,0,0),this._slot===this.count&&(this._slot=0),this._history[this._slot].copy(e),this._slot++;for(let n=0;n<this.count;n++)t.add(this._history[n]);return t.divideScalar(this.count),t}toJSON(){const e={type:this.constructor.name,count:this.count,_history:new Array,_slot:this._slot},t=this._history;for(let n=0,i=t.length;n<i;n++){const r=t[n];e._history.push(r.toArray(new Array))}return e}fromJSON(e){this.count=e.count,this._slot=e._slot;const t=e._history;this._history.length=0;for(let n=0,i=t.length;n<i;n++){const r=t[n];this._history.push(new be().fromArray(r))}return this}}const gd=new be,xo=new be,_d=new be,Hs=new be,vd=new be;class wm extends Sm{constructor(){super(),this.mass=1,this.maxForce=100,this.steering=new md(this),this.smoother=null}update(e){return this.steering.calculate(e,gd),_d.copy(gd).divideScalar(this.mass),this.velocity.add(_d.multiplyScalar(e)),this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),xo.copy(this.velocity).multiplyScalar(e),Hs.copy(this.position).add(xo),this.updateOrientation===!0&&this.smoother===null&&this.getSpeedSquared()>1e-8&&this.lookAt(Hs),this.position.copy(Hs),this.updateOrientation===!0&&this.smoother!==null&&(this.smoother.calculate(this.velocity,vd),xo.copy(vd).multiplyScalar(e),Hs.copy(this.position).add(xo),this.lookAt(Hs)),this}toJSON(){const e=super.toJSON();return e.mass=this.mass,e.maxForce=this.maxForce,e.steering=this.steering.toJSON(),e.smoother=this.smoother?this.smoother.toJSON():null,e}fromJSON(e){return super.fromJSON(e),this.mass=e.mass,this.maxForce=e.maxForce,this.steering=new md(this).fromJSON(e.steering),this.smoother=e.smoother?new jS().fromJSON(e.smoother):null,this}resolveReferences(e){super.resolveReferences(e),this.steering.resolveReferences(e)}}class jo{touching(){return!1}update(){return this}toJSON(){return{type:this.constructor.name}}fromJSON(){return this}}const xd=new rl,yd=new be;class KS extends jo{constructor(e=new be){super(),this.size=e,this._aabb=new hh}touching(e){return xd.set(e.position,e.boundingRadius),this._aabb.intersectsBoundingSphere(xd)}update(e){return e.getWorldPosition(yd),this._aabb.fromCenterAndSize(yd,this.size),this}toJSON(){const e=super.toJSON();return e.size=this.size.toArray(new Array),e}fromJSON(e){return super.fromJSON(e),this.size.fromArray(e.size),this}}const xc=new rl;class ZS extends jo{constructor(e=0){super(),this.radius=e,this._boundingSphere=new rl}touching(e){return e.getWorldPosition(xc.center),xc.radius=e.boundingRadius,this._boundingSphere.intersectsBoundingSphere(xc)}update(e){return e.getWorldPosition(this._boundingSphere.center),this._boundingSphere.radius=this.radius,this}toJSON(){const e=super.toJSON();return e.radius=this.radius,e}fromJSON(e){return super.fromJSON(e),this.radius=e.radius,this}}class Sd extends uh{constructor(e=new jo){super(),this.region=e,this.canActivateTrigger=!1,this._typesMap=new Map}check(e){return this.region.touching(e)===!0&&this.execute(e),this}execute(){}updateRegion(){return this.region.update(this),this}toJSON(){const e=super.toJSON();return e.region=this.region.toJSON(),e}fromJSON(e){super.fromJSON(e);const t=e.region;let n=t.type;switch(n){case"TriggerRegion":this.region=new jo().fromJSON(t);break;case"RectangularTriggerRegion":this.region=new KS().fromJSON(t);break;case"SphericalTriggerRegion":this.region=new ZS().fromJSON(t);break;default:const i=this._typesMap.get(n);i!==void 0?this.region=new i().fromJSON(t):jn.warn("YUKA.Trigger: Unsupported trigger region type:",t.type)}return this}registerType(e,t){return this._typesMap.set(e,t),this}}const Ws=new Array;class QS{constructor(){this.entities=new Array,this.spatialIndex=null,this._triggers=new Array,this._indexMap=new Map,this._typesMap=new Map,this._messageDispatcher=new FS}add(e){return this.entities.push(e),e.manager=this,this}remove(e){const t=this.entities.indexOf(e);return this.entities.splice(t,1),e.manager=null,this}clear(){return this.entities.length=0,this._messageDispatcher.clear(),this}getEntityByName(e){const t=this.entities;for(let n=0,i=t.length;n<i;n++){const r=t[n];if(r.name===e)return r}return null}update(e){const t=this.entities,n=this._triggers;for(let i=t.length-1;i>=0;i--){const r=t[i];this.updateEntity(r,e)}for(let i=n.length-1;i>=0;i--){const r=n[i];this.processTrigger(r)}return this._triggers.length=0,this._messageDispatcher.dispatchDelayedMessages(e),this}updateEntity(e,t){if(e.active===!0){this.updateNeighborhood(e),e._started===!1&&(e.start(),e._started=!0),e.update(t);const n=e.children;for(let a=n.length-1;a>=0;a--){const o=n[a];this.updateEntity(o,t)}if(e instanceof Sd&&this._triggers.push(e),this.spatialIndex!==null){let a=this._indexMap.get(e)||-1;a=this.spatialIndex.updateEntity(e,a),this._indexMap.set(e,a)}const i=e._renderComponent,r=e._renderComponentCallback;i!==null&&r!==null&&r(e,i)}return this}updateNeighborhood(e){if(e.updateNeighborhood===!0){e.neighbors.length=0,this.spatialIndex!==null?this.spatialIndex.query(e.position,e.neighborhoodRadius,Ws):(Ws.length=0,Ws.push(...this.entities));const t=e.neighborhoodRadius*e.neighborhoodRadius;for(let n=0,i=Ws.length;n<i;n++){const r=Ws[n];e!==r&&r.active===!0&&e.position.squaredDistanceTo(r.position)<=t&&e.neighbors.push(r)}}return this}processTrigger(e){e.updateRegion();const t=this.entities;for(let n=t.length-1;n>=0;n--){const i=t[n];e!==i&&i.active===!0&&i.canActivateTrigger===!0&&e.check(i)}return this}sendMessage(e,t,n,i,r){return this._messageDispatcher.dispatch(e,t,n,i,r),this}toJSON(){const e={type:this.constructor.name,entities:new Array,_messageDispatcher:this._messageDispatcher.toJSON()};function t(n){e.entities.push(n.toJSON());for(let i=0,r=n.children.length;i<r;i++)t(n.children[i])}for(let n=0,i=this.entities.length;n<i;n++)t(this.entities[n]);return e}fromJSON(e){this.clear();const t=e.entities,n=e._messageDispatcher,i=new Map;for(let r=0,a=t.length;r<a;r++){const o=t[r],l=o.type;let c;switch(l){case"GameEntity":c=new uh().fromJSON(o);break;case"MovingEntity":c=new Sm().fromJSON(o);break;case"Vehicle":c=new wm().fromJSON(o);break;case"Trigger":c=new Sd().fromJSON(o);break;default:const u=this._typesMap.get(l);if(u!==void 0)c=new u().fromJSON(o);else{jn.warn("YUKA.EntityManager: Unsupported entity type:",l);continue}}i.set(c.uuid,c),c.parent===null&&this.add(c)}for(let r of i.values())r.resolveReferences(i);return this._messageDispatcher.fromJSON(n),this}registerType(e,t){return this._typesMap.set(e,t),this}}new Array;new Array;new Array;var $S=`uniform float uTime;\r
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
    vec4 colorR = texture2D(tDiffuse , clamp(uv + distortion *0.8, 0.0, 1.0));\r
    vec4 colorG = texture2D(tDiffuse , clamp(uv + distortion*0.6, 0.0, 1.0));\r
    vec4 colorB = texture2D(tDiffuse ,clamp(uv + distortion*0.5, 0.0, 1.0));\r
    vec4 finalColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);

   gl_FragColor = vec4(finalColor);

   }`,eM=`varying vec2 vUv;

void main() {\r
    vUv = uv; 
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,yc={exports:{}},Md;function tM(){return Md||(Md=1,function(s){(function(e){function t(c){function u(h,f,d){this.x=h,this.y=f,this.z=d}u.prototype.dot2=function(h,f){return this.x*h+this.y*f},u.prototype.dot3=function(h,f,d){return this.x*h+this.y*f+this.z*d},this.grad3=[new u(1,1,0),new u(-1,1,0),new u(1,-1,0),new u(-1,-1,0),new u(1,0,1),new u(-1,0,1),new u(1,0,-1),new u(-1,0,-1),new u(0,1,1),new u(0,-1,1),new u(0,1,-1),new u(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(c||0)}t.prototype.seed=function(c){c>0&&c<1&&(c*=65536),c=Math.floor(c),c<256&&(c|=c<<8);for(var u=this.p,h=0;h<256;h++){var f;h&1?f=u[h]^c&255:f=u[h]^c>>8&255;var d=this.perm,_=this.gradP;d[h]=d[h+256]=f,_[h]=_[h+256]=this.grad3[f%12]}};var n=.5*(Math.sqrt(3)-1),i=(3-Math.sqrt(3))/6,r=1/3,a=1/6;t.prototype.simplex2=function(c,u){var h,f,d,_=(c+u)*n,g=Math.floor(c+_),p=Math.floor(u+_),m=(g+p)*i,S=c-g+m,M=u-p+m,x,E;S>M?(x=1,E=0):(x=0,E=1);var A=S-x+i,T=M-E+i,b=S-1+2*i,v=M-1+2*i;g&=255,p&=255;var y=this.perm,C=this.gradP,R=C[g+y[p]],U=C[g+x+y[p+E]],L=C[g+1+y[p+1]],B=.5-S*S-M*M;B<0?h=0:(B*=B,h=B*B*R.dot2(S,M));var I=.5-A*A-T*T;I<0?f=0:(I*=I,f=I*I*U.dot2(A,T));var W=.5-b*b-v*v;return W<0?d=0:(W*=W,d=W*W*L.dot2(b,v)),70*(h+f+d)},t.prototype.simplex3=function(c,u,h){var f,d,_,g,p=(c+u+h)*r,m=Math.floor(c+p),S=Math.floor(u+p),M=Math.floor(h+p),x=(m+S+M)*a,E=c-m+x,A=u-S+x,T=h-M+x,b,v,y,C,R,U;E>=A?A>=T?(b=1,v=0,y=0,C=1,R=1,U=0):E>=T?(b=1,v=0,y=0,C=1,R=0,U=1):(b=0,v=0,y=1,C=1,R=0,U=1):A<T?(b=0,v=0,y=1,C=0,R=1,U=1):E<T?(b=0,v=1,y=0,C=0,R=1,U=1):(b=0,v=1,y=0,C=1,R=1,U=0);var L=E-b+a,B=A-v+a,I=T-y+a,W=E-C+2*a,H=A-R+2*a,Y=T-U+2*a,X=E-1+3*a,F=A-1+3*a,V=T-1+3*a;m&=255,S&=255,M&=255;var Z=this.perm,N=this.gradP,k=N[m+Z[S+Z[M]]],ne=N[m+b+Z[S+v+Z[M+y]]],J=N[m+C+Z[S+R+Z[M+U]]],ee=N[m+1+Z[S+1+Z[M+1]]],xe=.5-E*E-A*A-T*T;xe<0?f=0:(xe*=xe,f=xe*xe*k.dot3(E,A,T));var pe=.5-L*L-B*B-I*I;pe<0?d=0:(pe*=pe,d=pe*pe*ne.dot3(L,B,I));var ge=.5-W*W-H*H-Y*Y;ge<0?_=0:(ge*=ge,_=ge*ge*J.dot3(W,H,Y));var ue=.5-X*X-F*F-V*V;return ue<0?g=0:(ue*=ue,g=ue*ue*ee.dot3(X,F,V)),32*(f+d+_+g)};function o(c){return c*c*c*(c*(c*6-15)+10)}function l(c,u,h){return(1-h)*c+h*u}t.prototype.perlin2=function(c,u){var h=Math.floor(c),f=Math.floor(u);c=c-h,u=u-f,h=h&255,f=f&255;var d=this.perm,_=this.gradP,g=_[h+d[f]].dot2(c,u),p=_[h+d[f+1]].dot2(c,u-1),m=_[h+1+d[f]].dot2(c-1,u),S=_[h+1+d[f+1]].dot2(c-1,u-1),M=o(c);return l(l(g,m,M),l(p,S,M),o(u))},t.prototype.perlin3=function(c,u,h){var f=Math.floor(c),d=Math.floor(u),_=Math.floor(h);c=c-f,u=u-d,h=h-_,f=f&255,d=d&255,_=_&255;var g=this.perm,p=this.gradP,m=p[f+g[d+g[_]]].dot3(c,u,h),S=p[f+g[d+g[_+1]]].dot3(c,u,h-1),M=p[f+g[d+1+g[_]]].dot3(c,u-1,h),x=p[f+g[d+1+g[_+1]]].dot3(c,u-1,h-1),E=p[f+1+g[d+g[_]]].dot3(c-1,u,h),A=p[f+1+g[d+g[_+1]]].dot3(c-1,u,h-1),T=p[f+1+g[d+1+g[_]]].dot3(c-1,u-1,h),b=p[f+1+g[d+1+g[_+1]]].dot3(c-1,u-1,h-1),v=o(c),y=o(u),C=o(h);return l(l(l(m,E,v),l(S,A,v),C),l(l(M,T,v),l(x,b,v),C),y)},e.Noise=t})(s.exports)}(yc)),yc.exports}var nM=tM();function iM(){var s=Object.create(null);function e(i,r){var a=i.id,o=i.name,l=i.dependencies;l===void 0&&(l=[]);var c=i.init;c===void 0&&(c=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!s[a])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),c=n("<"+o+">.init",c),u&&(u=n("<"+o+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:h,getTransferables:u},r(h)}catch(f){f&&f.noLog||console.error(f),r(f)}}function t(i,r){var a,o=i.id,l=i.args;(!s[o]||typeof s[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=s[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){r(h)}function u(h){try{var f=s[o].getTransferables&&s[o].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),r(h,f)}catch(d){console.error(d),r(d)}}}function n(i,r){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(i){var r=i.data,a=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function rM(s){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,n=s.init;t=Array.isArray(t)?t.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var i=Promise.all(t).then(function(r){return n.apply(null,r)});return e._getInitResult=function(){return i},i},e}var Am=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Am=function(){return s},s},sM=0,aM=0,Sc=!1,$s=Object.create(null),ea=Object.create(null),wu=Object.create(null);function Ms(s){if((!s||typeof s.init!="function")&&!Sc)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,n=s.getTransferables,i=s.workerId,r=rM(s);i==null&&(i="#default");var a="workerModule"+ ++sM,o=s.name||a,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(Sc=!0,u=Ms({workerId:i,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+Lo(u)+`
)}`}),Sc=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],h=arguments.length;h--;)u[h]=arguments[h];if(!Am())return r.apply(void 0,u);if(!l){l=Td(i,"registerModule",c.workerModuleData);var f=function(){l=null,ea[i].delete(f)};(ea[i]||(ea[i]=new Set)).add(f)}return l.then(function(d){var _=d.isCallable;if(_)return Td(i,"callModule",{id:a,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:a,name:o,dependencies:e,init:Lo(t),getTransferables:n&&Lo(n)},c.onMainThread=r,c}function oM(s){ea[s]&&ea[s].forEach(function(e){e()}),$s[s]&&($s[s].terminate(),delete $s[s])}function Lo(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function lM(s){var e=$s[s];if(!e){var t=Lo(iM);e=$s[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var i=n.data,r=i.messageId,a=wu[r];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete wu[r],a(i)}}return e}function Td(s,e,t){return new Promise(function(n,i){var r=++aM;wu[r]=function(a){a.success?n(a.result):i(new Error("Error in worker "+e+" call: "+a.error))},lM(s).postMessage({messageId:r,action:e,data:t})})}function Rm(){var s=function(e){function t(Y,X,F,V,Z,N,k,ne){var J=1-k;ne.x=J*J*Y+2*J*k*F+k*k*Z,ne.y=J*J*X+2*J*k*V+k*k*N}function n(Y,X,F,V,Z,N,k,ne,J,ee){var xe=1-J;ee.x=xe*xe*xe*Y+3*xe*xe*J*F+3*xe*J*J*Z+J*J*J*k,ee.y=xe*xe*xe*X+3*xe*xe*J*V+3*xe*J*J*N+J*J*J*ne}function i(Y,X){for(var F=/([MLQCZ])([^MLQCZ]*)/g,V,Z,N,k,ne;V=F.exec(Y);){var J=V[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ee){return parseFloat(ee)});switch(V[1]){case"M":k=Z=J[0],ne=N=J[1];break;case"L":(J[0]!==k||J[1]!==ne)&&X("L",k,ne,k=J[0],ne=J[1]);break;case"Q":{X("Q",k,ne,k=J[2],ne=J[3],J[0],J[1]);break}case"C":{X("C",k,ne,k=J[4],ne=J[5],J[0],J[1],J[2],J[3]);break}case"Z":(k!==Z||ne!==N)&&X("L",k,ne,Z,N);break}}}function r(Y,X,F){F===void 0&&(F=16);var V={x:0,y:0};i(Y,function(Z,N,k,ne,J,ee,xe,pe,ge){switch(Z){case"L":X(N,k,ne,J);break;case"Q":{for(var ue=N,Ie=k,O=1;O<F;O++)t(N,k,ee,xe,ne,J,O/(F-1),V),X(ue,Ie,V.x,V.y),ue=V.x,Ie=V.y;break}case"C":{for(var ze=N,Ce=k,Fe=1;Fe<F;Fe++)n(N,k,ee,xe,pe,ge,ne,J,Fe/(F-1),V),X(ze,Ce,V.x,V.y),ze=V.x,Ce=V.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(Y,X){var F=Y.getContext?Y.getContext("webgl",c):Y,V=l.get(F);if(!V){let ze=function(te){var Ue=N[te];if(!Ue&&(Ue=N[te]=F.getExtension(te),!Ue))throw new Error(te+" not supported");return Ue},Ce=function(te,Ue){var D=F.createShader(Ue);return F.shaderSource(D,te),F.compileShader(D),D},Fe=function(te,Ue,D,w){if(!k[te]){var G={},ae={},$=F.createProgram();F.attachShader($,Ce(Ue,F.VERTEX_SHADER)),F.attachShader($,Ce(D,F.FRAGMENT_SHADER)),F.linkProgram($),k[te]={program:$,transaction:function(ye){F.useProgram($),ye({setUniform:function(Me,we){for(var oe=[],me=arguments.length-2;me-- >0;)oe[me]=arguments[me+2];var ve=ae[we]||(ae[we]=F.getUniformLocation($,we));F["uniform"+Me].apply(F,[ve].concat(oe))},setAttribute:function(Me,we,oe,me,ve){var Ae=G[Me];Ae||(Ae=G[Me]={buf:F.createBuffer(),loc:F.getAttribLocation($,Me),data:null}),F.bindBuffer(F.ARRAY_BUFFER,Ae.buf),F.vertexAttribPointer(Ae.loc,we,F.FLOAT,!1,0,0),F.enableVertexAttribArray(Ae.loc),Z?F.vertexAttribDivisor(Ae.loc,me):ze("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ae.loc,me),ve!==Ae.data&&(F.bufferData(F.ARRAY_BUFFER,ve,oe),Ae.data=ve)}})}}}k[te].transaction(w)},le=function(te,Ue){J++;try{F.activeTexture(F.TEXTURE0+J);var D=ne[te];D||(D=ne[te]=F.createTexture(),F.bindTexture(F.TEXTURE_2D,D),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MIN_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MAG_FILTER,F.NEAREST)),F.bindTexture(F.TEXTURE_2D,D),Ue(D,J)}finally{J--}},Ee=function(te,Ue,D){var w=F.createFramebuffer();ee.push(w),F.bindFramebuffer(F.FRAMEBUFFER,w),F.activeTexture(F.TEXTURE0+Ue),F.bindTexture(F.TEXTURE_2D,te),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,te,0);try{D(w)}finally{F.deleteFramebuffer(w),F.bindFramebuffer(F.FRAMEBUFFER,ee[--ee.length-1]||null)}},de=function(){N={},k={},ne={},J=-1,ee.length=0};var xe=ze,pe=Ce,ge=Fe,ue=le,Ie=Ee,O=de,Z=typeof WebGL2RenderingContext<"u"&&F instanceof WebGL2RenderingContext,N={},k={},ne={},J=-1,ee=[];F.canvas.addEventListener("webglcontextlost",function(te){de(),te.preventDefault()},!1),l.set(F,V={gl:F,isWebGL2:Z,getExtension:ze,withProgram:Fe,withTexture:le,withTextureFramebuffer:Ee,handleContextLoss:de})}X(V)}function h(Y,X,F,V,Z,N,k,ne){k===void 0&&(k=15),ne===void 0&&(ne=null),u(Y,function(J){var ee=J.gl,xe=J.withProgram,pe=J.withTexture;pe("copy",function(ge,ue){ee.texImage2D(ee.TEXTURE_2D,0,ee.RGBA,Z,N,0,ee.RGBA,ee.UNSIGNED_BYTE,X),xe("copy",a,o,function(Ie){var O=Ie.setUniform,ze=Ie.setAttribute;ze("aUV",2,ee.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),O("1i","image",ue),ee.bindFramebuffer(ee.FRAMEBUFFER,ne||null),ee.disable(ee.BLEND),ee.colorMask(k&8,k&4,k&2,k&1),ee.viewport(F,V,Z,N),ee.scissor(F,V,Z,N),ee.drawArrays(ee.TRIANGLES,0,3)})})})}function f(Y,X,F){var V=Y.width,Z=Y.height;u(Y,function(N){var k=N.gl,ne=new Uint8Array(V*Z*4);k.readPixels(0,0,V,Z,k.RGBA,k.UNSIGNED_BYTE,ne),Y.width=X,Y.height=F,h(k,ne,0,0,V,Z)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function _(Y,X,F,V,Z,N){N===void 0&&(N=1);var k=new Uint8Array(Y*X),ne=V[2]-V[0],J=V[3]-V[1],ee=[];r(F,function(ze,Ce,Fe,le){ee.push({x1:ze,y1:Ce,x2:Fe,y2:le,minX:Math.min(ze,Fe),minY:Math.min(Ce,le),maxX:Math.max(ze,Fe),maxY:Math.max(Ce,le)})}),ee.sort(function(ze,Ce){return ze.maxX-Ce.maxX});for(var xe=0;xe<Y;xe++)for(var pe=0;pe<X;pe++){var ge=Ie(V[0]+ne*(xe+.5)/Y,V[1]+J*(pe+.5)/X),ue=Math.pow(1-Math.abs(ge)/Z,N)/2;ge<0&&(ue=1-ue),ue=Math.max(0,Math.min(255,Math.round(ue*255))),k[pe*Y+xe]=ue}return k;function Ie(ze,Ce){for(var Fe=1/0,le=1/0,Ee=ee.length;Ee--;){var de=ee[Ee];if(de.maxX+le<=ze)break;if(ze+le>de.minX&&Ce-le<de.maxY&&Ce+le>de.minY){var te=m(ze,Ce,de.x1,de.y1,de.x2,de.y2);te<Fe&&(Fe=te,le=Math.sqrt(Fe))}}return O(ze,Ce)&&(le=-le),le}function O(ze,Ce){for(var Fe=0,le=ee.length;le--;){var Ee=ee[le];if(Ee.maxX<=ze)break;var de=Ee.y1>Ce!=Ee.y2>Ce&&ze<(Ee.x2-Ee.x1)*(Ce-Ee.y1)/(Ee.y2-Ee.y1)+Ee.x1;de&&(Fe+=Ee.y1<Ee.y2?1:-1)}return Fe!==0}}function g(Y,X,F,V,Z,N,k,ne,J,ee){N===void 0&&(N=1),ne===void 0&&(ne=0),J===void 0&&(J=0),ee===void 0&&(ee=0),p(Y,X,F,V,Z,N,k,null,ne,J,ee)}function p(Y,X,F,V,Z,N,k,ne,J,ee,xe){N===void 0&&(N=1),J===void 0&&(J=0),ee===void 0&&(ee=0),xe===void 0&&(xe=0);for(var pe=_(Y,X,F,V,Z,N),ge=new Uint8Array(pe.length*4),ue=0;ue<pe.length;ue++)ge[ue*4+xe]=pe[ue];h(k,ge,J,ee,Y,X,1<<3-xe,ne)}function m(Y,X,F,V,Z,N){var k=Z-F,ne=N-V,J=k*k+ne*ne,ee=J?Math.max(0,Math.min(1,((Y-F)*k+(X-V)*ne)/J)):0,xe=Y-(F+ee*k),pe=X-(V+ee*ne);return xe*xe+pe*pe}var S=Object.freeze({__proto__:null,generate:_,generateIntoCanvas:g,generateIntoFramebuffer:p}),M="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",x="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",E="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",A=new Float32Array([0,0,2,0,0,2]),T=null,b=!1,v={},y=new WeakMap;function C(Y){if(!b&&!B(Y))throw new Error("WebGL generation not supported")}function R(Y,X,F,V,Z,N,k){if(N===void 0&&(N=1),k===void 0&&(k=null),!k&&(k=T,!k)){var ne=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ne)throw new Error("OffscreenCanvas or DOM canvas not supported");k=T=ne.getContext("webgl",{depth:!1})}C(k);var J=new Uint8Array(Y*X*4);u(k,function(ge){var ue=ge.gl,Ie=ge.withTexture,O=ge.withTextureFramebuffer;Ie("readable",function(ze,Ce){ue.texImage2D(ue.TEXTURE_2D,0,ue.RGBA,Y,X,0,ue.RGBA,ue.UNSIGNED_BYTE,null),O(ze,Ce,function(Fe){L(Y,X,F,V,Z,N,ue,Fe,0,0,0),ue.readPixels(0,0,Y,X,ue.RGBA,ue.UNSIGNED_BYTE,J)})})});for(var ee=new Uint8Array(Y*X),xe=0,pe=0;xe<J.length;xe+=4)ee[pe++]=J[xe];return ee}function U(Y,X,F,V,Z,N,k,ne,J,ee){N===void 0&&(N=1),ne===void 0&&(ne=0),J===void 0&&(J=0),ee===void 0&&(ee=0),L(Y,X,F,V,Z,N,k,null,ne,J,ee)}function L(Y,X,F,V,Z,N,k,ne,J,ee,xe){N===void 0&&(N=1),J===void 0&&(J=0),ee===void 0&&(ee=0),xe===void 0&&(xe=0),C(k);var pe=[];r(F,function(ge,ue,Ie,O){pe.push(ge,ue,Ie,O)}),pe=new Float32Array(pe),u(k,function(ge){var ue=ge.gl,Ie=ge.isWebGL2,O=ge.getExtension,ze=ge.withProgram,Ce=ge.withTexture,Fe=ge.withTextureFramebuffer,le=ge.handleContextLoss;if(Ce("rawDistances",function(Ee,de){(Y!==Ee._lastWidth||X!==Ee._lastHeight)&&ue.texImage2D(ue.TEXTURE_2D,0,ue.RGBA,Ee._lastWidth=Y,Ee._lastHeight=X,0,ue.RGBA,ue.UNSIGNED_BYTE,null),ze("main",M,x,function(te){var Ue=te.setAttribute,D=te.setUniform,w=!Ie&&O("ANGLE_instanced_arrays"),G=!Ie&&O("EXT_blend_minmax");Ue("aUV",2,ue.STATIC_DRAW,0,A),Ue("aLineSegment",4,ue.DYNAMIC_DRAW,1,pe),D.apply(void 0,["4f","uGlyphBounds"].concat(V)),D("1f","uMaxDistance",Z),D("1f","uExponent",N),Fe(Ee,de,function(ae){ue.enable(ue.BLEND),ue.colorMask(!0,!0,!0,!0),ue.viewport(0,0,Y,X),ue.scissor(0,0,Y,X),ue.blendFunc(ue.ONE,ue.ONE),ue.blendEquationSeparate(ue.FUNC_ADD,Ie?ue.MAX:G.MAX_EXT),ue.clear(ue.COLOR_BUFFER_BIT),Ie?ue.drawArraysInstanced(ue.TRIANGLES,0,3,pe.length/4):w.drawArraysInstancedANGLE(ue.TRIANGLES,0,3,pe.length/4)})}),ze("post",a,E,function(te){te.setAttribute("aUV",2,ue.STATIC_DRAW,0,A),te.setUniform("1i","tex",de),ue.bindFramebuffer(ue.FRAMEBUFFER,ne),ue.disable(ue.BLEND),ue.colorMask(xe===0,xe===1,xe===2,xe===3),ue.viewport(J,ee,Y,X),ue.scissor(J,ee,Y,X),ue.drawArrays(ue.TRIANGLES,0,3)})}),ue.isContextLost())throw le(),new Error("webgl context lost")})}function B(Y){var X=!Y||Y===T?v:Y.canvas||Y,F=y.get(X);if(F===void 0){b=!0;var V=null;try{var Z=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],N=R(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,Y);F=N&&Z.length===N.length&&N.every(function(k,ne){return k===Z[ne]}),F||(V="bad trial run results",console.info(Z,N))}catch(k){F=!1,V=k.message}V&&console.warn("WebGL SDF generation not supported:",V),b=!1,y.set(X,F)}return F}var I=Object.freeze({__proto__:null,generate:R,generateIntoCanvas:U,generateIntoFramebuffer:L,isSupported:B});function W(Y,X,F,V,Z,N){Z===void 0&&(Z=Math.max(V[2]-V[0],V[3]-V[1])/2),N===void 0&&(N=1);try{return R.apply(I,arguments)}catch(k){return console.info("WebGL SDF generation failed, falling back to JS",k),_.apply(S,arguments)}}function H(Y,X,F,V,Z,N,k,ne,J,ee){Z===void 0&&(Z=Math.max(V[2]-V[0],V[3]-V[1])/2),N===void 0&&(N=1),ne===void 0&&(ne=0),J===void 0&&(J=0),ee===void 0&&(ee=0);try{return U.apply(I,arguments)}catch(xe){return console.info("WebGL SDF generation failed, falling back to JS",xe),g.apply(S,arguments)}}return e.forEachPathCommand=i,e.generate=W,e.generateIntoCanvas=H,e.javascript=S,e.pathToLineSegments=r,e.webgl=I,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function cM(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},i={};n.L=1,i[1]="L",Object.keys(t).forEach(function(le,Ee){n[le]=1<<Ee+1,i[n[le]]=le}),Object.freeze(n);var r=n.LRI|n.RLI|n.FSI,a=n.L|n.R|n.AL,o=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,l=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|r|n.PDI|l,u=null;function h(){if(!u){u=new Map;var le=function(de){if(t.hasOwnProperty(de)){var te=0;t[de].split(",").forEach(function(Ue){var D=Ue.split("+"),w=D[0],G=D[1];w=parseInt(w,36),G=G?parseInt(G,36):0,u.set(te+=w,n[de]);for(var ae=0;ae<G;ae++)u.set(++te,n[de])})}};for(var Ee in t)le(Ee)}}function f(le){return h(),u.get(le.codePointAt(0))||n.L}function d(le){return i[f(le)]}var _={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function g(le,Ee){var de=36,te=0,Ue=new Map,D=Ee&&new Map,w;return le.split(",").forEach(function G(ae){if(ae.indexOf("+")!==-1)for(var $=+ae;$--;)G(w);else{w=ae;var Q=ae.split(">"),ye=Q[0],_e=Q[1];ye=String.fromCodePoint(te+=parseInt(ye,de)),_e=String.fromCodePoint(te+=parseInt(_e,de)),Ue.set(ye,_e),Ee&&D.set(_e,ye)}}),{map:Ue,reverseMap:D}}var p,m,S;function M(){if(!p){var le=g(_.pairs,!0),Ee=le.map,de=le.reverseMap;p=Ee,m=de,S=g(_.canonical,!1).map}}function x(le){return M(),p.get(le)||null}function E(le){return M(),m.get(le)||null}function A(le){return M(),S.get(le)||null}var T=n.L,b=n.R,v=n.EN,y=n.ES,C=n.ET,R=n.AN,U=n.CS,L=n.B,B=n.S,I=n.ON,W=n.BN,H=n.NSM,Y=n.AL,X=n.LRO,F=n.RLO,V=n.LRE,Z=n.RLE,N=n.PDF,k=n.LRI,ne=n.RLI,J=n.FSI,ee=n.PDI;function xe(le,Ee){for(var de=125,te=new Uint32Array(le.length),Ue=0;Ue<le.length;Ue++)te[Ue]=f(le[Ue]);var D=new Map;function w(rn,Vn){var sn=te[rn];te[rn]=Vn,D.set(sn,D.get(sn)-1),sn&o&&D.set(o,D.get(o)-1),D.set(Vn,(D.get(Vn)||0)+1),Vn&o&&D.set(o,(D.get(o)||0)+1)}for(var G=new Uint8Array(le.length),ae=new Map,$=[],Q=null,ye=0;ye<le.length;ye++)Q||$.push(Q={start:ye,end:le.length-1,level:Ee==="rtl"?1:Ee==="ltr"?0:Rh(ye,!1)}),te[ye]&L&&(Q.end=ye,Q=null);for(var _e=Z|V|F|X|r|ee|N|L,Me=function(rn){return rn+(rn&1?1:2)},we=function(rn){return rn+(rn&1?2:1)},oe=0;oe<$.length;oe++){Q=$[oe];var me=[{_level:Q.level,_override:0,_isolate:0}],ve=void 0,Ae=0,Se=0,Ge=0;D.clear();for(var z=Q.start;z<=Q.end;z++){var fe=te[z];if(ve=me[me.length-1],D.set(fe,(D.get(fe)||0)+1),fe&o&&D.set(o,(D.get(o)||0)+1),fe&_e)if(fe&(Z|V)){G[z]=ve._level;var ce=(fe===Z?we:Me)(ve._level);ce<=de&&!Ae&&!Se?me.push({_level:ce,_override:0,_isolate:0}):Ae||Se++}else if(fe&(F|X)){G[z]=ve._level;var Le=(fe===F?we:Me)(ve._level);Le<=de&&!Ae&&!Se?me.push({_level:Le,_override:fe&F?b:T,_isolate:0}):Ae||Se++}else if(fe&r){fe&J&&(fe=Rh(z+1,!0)===1?ne:k),G[z]=ve._level,ve._override&&w(z,ve._override);var he=(fe===ne?we:Me)(ve._level);he<=de&&Ae===0&&Se===0?(Ge++,me.push({_level:he,_override:0,_isolate:1,_isolInitIndex:z})):Ae++}else if(fe&ee){if(Ae>0)Ae--;else if(Ge>0){for(Se=0;!me[me.length-1]._isolate;)me.pop();var se=me[me.length-1]._isolInitIndex;se!=null&&(ae.set(se,z),ae.set(z,se)),me.pop(),Ge--}ve=me[me.length-1],G[z]=ve._level,ve._override&&w(z,ve._override)}else fe&N?(Ae===0&&(Se>0?Se--:!ve._isolate&&me.length>1&&(me.pop(),ve=me[me.length-1])),G[z]=ve._level):fe&L&&(G[z]=Q.level);else G[z]=ve._level,ve._override&&fe!==W&&w(z,ve._override)}for(var Re=[],Ne=null,Be=Q.start;Be<=Q.end;Be++){var We=te[Be];if(!(We&l)){var st=G[Be],lt=We&r,_t=We===ee;Ne&&st===Ne._level?(Ne._end=Be,Ne._endsWithIsolInit=lt):Re.push(Ne={_start:Be,_end:Be,_level:st,_startsWithPDI:_t,_endsWithIsolInit:lt})}}for(var tn=[],Vt=0;Vt<Re.length;Vt++){var pn=Re[Vt];if(!pn._startsWithPDI||pn._startsWithPDI&&!ae.has(pn._start)){for(var kn=[Ne=pn],Kn=void 0;Ne&&Ne._endsWithIsolInit&&(Kn=ae.get(Ne._end))!=null;)for(var nn=Vt+1;nn<Re.length;nn++)if(Re[nn]._start===Kn){kn.push(Ne=Re[nn]);break}for(var Pt=[],wn=0;wn<kn.length;wn++)for(var Es=kn[wn],Ar=Es._start;Ar<=Es._end;Ar++)Pt.push(Ar);for(var ol=G[Pt[0]],Ta=Q.level,Rr=Pt[0]-1;Rr>=0;Rr--)if(!(te[Rr]&l)){Ta=G[Rr];break}var ws=Pt[Pt.length-1],ll=G[ws],ba=Q.level;if(!(te[ws]&r)){for(var P=ws+1;P<=Q.end;P++)if(!(te[P]&l)){ba=G[P];break}}tn.push({_seqIndices:Pt,_sosType:Math.max(Ta,ol)%2?b:T,_eosType:Math.max(ba,ll)%2?b:T})}}for(var j=0;j<tn.length;j++){var re=tn[j],q=re._seqIndices,K=re._sosType,Te=re._eosType,Pe=G[q[0]]&1?b:T;if(D.get(H))for(var ke=0;ke<q.length;ke++){var Oe=q[ke];if(te[Oe]&H){for(var Xe=K,qe=ke-1;qe>=0;qe--)if(!(te[q[qe]]&l)){Xe=te[q[qe]];break}w(Oe,Xe&(r|ee)?I:Xe)}}if(D.get(v))for(var Ve=0;Ve<q.length;Ve++){var Ze=q[Ve];if(te[Ze]&v)for(var nt=Ve-1;nt>=-1;nt--){var ct=nt===-1?K:te[q[nt]];if(ct&a){ct===Y&&w(Ze,R);break}}}if(D.get(Y))for(var ut=0;ut<q.length;ut++){var et=q[ut];te[et]&Y&&w(et,b)}if(D.get(y)||D.get(U))for(var He=1;He<q.length-1;He++){var xt=q[He];if(te[xt]&(y|U)){for(var Qe=0,Kt=0,Zn=He-1;Zn>=0&&(Qe=te[q[Zn]],!!(Qe&l));Zn--);for(var Nt=He+1;Nt<q.length&&(Kt=te[q[Nt]],!!(Kt&l));Nt++);Qe===Kt&&(te[xt]===y?Qe===v:Qe&(v|R))&&w(xt,Qe)}}if(D.get(v))for(var Ht=0;Ht<q.length;Ht++){var ht=q[Ht];if(te[ht]&v){for(var Ot=Ht-1;Ot>=0&&te[q[Ot]]&(C|l);Ot--)w(q[Ot],v);for(Ht++;Ht<q.length&&te[q[Ht]]&(C|l|v);Ht++)te[q[Ht]]!==v&&w(q[Ht],v)}}if(D.get(C)||D.get(y)||D.get(U))for(var Dt=0;Dt<q.length;Dt++){var Ut=q[Dt];if(te[Ut]&(C|y|U)){w(Ut,I);for(var At=Dt-1;At>=0&&te[q[At]]&l;At--)w(q[At],I);for(var Ai=Dt+1;Ai<q.length&&te[q[Ai]]&l;Ai++)w(q[Ai],I)}}if(D.get(v))for(var zn=0,gh=K;zn<q.length;zn++){var _h=q[zn],cl=te[_h];cl&v?gh===T&&w(_h,T):cl&a&&(gh=cl)}if(D.get(o)){var As=b|v|R,vh=As|T,Ea=[];{for(var Cr=[],Pr=0;Pr<q.length;Pr++)if(te[q[Pr]]&o){var Rs=le[q[Pr]],xh=void 0;if(x(Rs)!==null)if(Cr.length<63)Cr.push({char:Rs,seqIndex:Pr});else break;else if((xh=E(Rs))!==null)for(var Cs=Cr.length-1;Cs>=0;Cs--){var ul=Cr[Cs].char;if(ul===xh||ul===E(A(Rs))||x(A(ul))===Rs){Ea.push([Cr[Cs].seqIndex,Pr]),Cr.length=Cs;break}}}Ea.sort(function(rn,Vn){return rn[0]-Vn[0]})}for(var hl=0;hl<Ea.length;hl++){for(var yh=Ea[hl],wa=yh[0],fl=yh[1],Sh=!1,Gn=0,dl=wa+1;dl<fl;dl++){var Mh=q[dl];if(te[Mh]&vh){Sh=!0;var Th=te[Mh]&As?b:T;if(Th===Pe){Gn=Th;break}}}if(Sh&&!Gn){Gn=K;for(var pl=wa-1;pl>=0;pl--){var bh=q[pl];if(te[bh]&vh){var Eh=te[bh]&As?b:T;Eh!==Pe?Gn=Eh:Gn=Pe;break}}}if(Gn){if(te[q[wa]]=te[q[fl]]=Gn,Gn!==Pe){for(var Ps=wa+1;Ps<q.length;Ps++)if(!(te[q[Ps]]&l)){f(le[q[Ps]])&H&&(te[q[Ps]]=Gn);break}}if(Gn!==Pe){for(var Ds=fl+1;Ds<q.length;Ds++)if(!(te[q[Ds]]&l)){f(le[q[Ds]])&H&&(te[q[Ds]]=Gn);break}}}}for(var Ri=0;Ri<q.length;Ri++)if(te[q[Ri]]&o){for(var wh=Ri,ml=Ri,gl=K,Us=Ri-1;Us>=0;Us--)if(te[q[Us]]&l)wh=Us;else{gl=te[q[Us]]&As?b:T;break}for(var Ah=Te,Ls=Ri+1;Ls<q.length;Ls++)if(te[q[Ls]]&(o|l))ml=Ls;else{Ah=te[q[Ls]]&As?b:T;break}for(var _l=wh;_l<=ml;_l++)te[q[_l]]=gl===Ah?gl:Pe;Ri=ml}}}for(var mn=Q.start;mn<=Q.end;mn++){var Ym=G[mn],Aa=te[mn];if(Ym&1?Aa&(T|v|R)&&G[mn]++:Aa&b?G[mn]++:Aa&(R|v)&&(G[mn]+=2),Aa&l&&(G[mn]=mn===0?Q.level:G[mn-1]),mn===Q.end||f(le[mn])&(B|L))for(var Ra=mn;Ra>=0&&f(le[Ra])&c;Ra--)G[Ra]=Q.level}}return{levels:G,paragraphs:$};function Rh(rn,Vn){for(var sn=rn;sn<le.length;sn++){var Ci=te[sn];if(Ci&(b|Y))return 1;if(Ci&(L|T)||Vn&&Ci===ee)return 0;if(Ci&r){var Ch=Jm(sn);sn=Ch===-1?le.length:Ch}}return 0}function Jm(rn){for(var Vn=1,sn=rn+1;sn<le.length;sn++){var Ci=te[sn];if(Ci&L)break;if(Ci&ee){if(--Vn===0)return sn}else Ci&r&&Vn++}return-1}}var pe="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ge;function ue(){if(!ge){var le=g(pe,!0),Ee=le.map,de=le.reverseMap;de.forEach(function(te,Ue){Ee.set(Ue,te)}),ge=Ee}}function Ie(le){return ue(),ge.get(le)||null}function O(le,Ee,de,te){var Ue=le.length;de=Math.max(0,de==null?0:+de),te=Math.min(Ue-1,te==null?Ue-1:+te);for(var D=new Map,w=de;w<=te;w++)if(Ee[w]&1){var G=Ie(le[w]);G!==null&&D.set(w,G)}return D}function ze(le,Ee,de,te){var Ue=le.length;de=Math.max(0,de==null?0:+de),te=Math.min(Ue-1,te==null?Ue-1:+te);var D=[];return Ee.paragraphs.forEach(function(w){var G=Math.max(de,w.start),ae=Math.min(te,w.end);if(G<ae){for(var $=Ee.levels.slice(G,ae+1),Q=ae;Q>=G&&f(le[Q])&c;Q--)$[Q]=w.level;for(var ye=w.level,_e=1/0,Me=0;Me<$.length;Me++){var we=$[Me];we>ye&&(ye=we),we<_e&&(_e=we|1)}for(var oe=ye;oe>=_e;oe--)for(var me=0;me<$.length;me++)if($[me]>=oe){for(var ve=me;me+1<$.length&&$[me+1]>=oe;)me++;me>ve&&D.push([ve+G,me+G])}}}),D}function Ce(le,Ee,de,te){var Ue=Fe(le,Ee,de,te),D=[].concat(le);return Ue.forEach(function(w,G){D[G]=(Ee.levels[w]&1?Ie(le[w]):null)||le[w]}),D.join("")}function Fe(le,Ee,de,te){for(var Ue=ze(le,Ee,de,te),D=[],w=0;w<le.length;w++)D[w]=w;return Ue.forEach(function(G){for(var ae=G[0],$=G[1],Q=D.slice(ae,$+1),ye=Q.length;ye--;)D[$-ye]=Q[ye]}),D}return e.closingToOpeningBracket=E,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=A,e.getEmbeddingLevels=xe,e.getMirroredCharacter=Ie,e.getMirroredCharactersMap=O,e.getReorderSegments=ze,e.getReorderedIndices=Fe,e.getReorderedString=Ce,e.openingToClosingBracket=x,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const Cm=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Au(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=je[i];return r?Au(r):n}return s.replace(e,t)}const kt=[];for(let s=0;s<256;s++)kt[s]=(s<16?"0":"")+s.toString(16);function uM(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[s&255]+kt[s>>8&255]+kt[s>>16&255]+kt[s>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toUpperCase()}const lr=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=n[i])}return s},hM=Date.now(),bd=new WeakMap,Ed=new Map;let fM=1e10;function Ru(s,e){const t=gM(e);let n=bd.get(s);if(n||bd.set(s,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(c,u){s.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=Ed[h];if(!f){const d=dM(this,c,e,t);f=Ed[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,lr(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-hM}}),this[i]&&this[i](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:fM++}),u.uuid=uM(),u.uniforms=lr({},c.uniforms,e.uniforms),u.defines=lr({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=lr({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:a},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(lr(this.extensions,c.extensions),lr(this.defines,c.defines),lr(this.uniforms,ei.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Ru(s.isDerivedMaterial?s.getDepthMaterial():new fp({depthPacking:Kd}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Ru(s.isDerivedMaterial?s.getDistanceMaterial():new dp,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return n[t]=a,new a}function dM(s,{vertexShader:e,fragmentShader:t},n,i){let{vertexDefs:r,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:_}=n;if(r=r||"",a=a||"",o=o||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=Au(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Au(t)),d){let g=d({vertexShader:e,fragmentShader:t});e=g.vertexShader,t=g.fragmentShader}if(f){let g=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(g.push(p),"")),h=`${f}
${g.join(`
`)}
${h}`}if(_){const g=`
uniform float ${_};
`;r=g+r,c=g+c}return l&&(e=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${e}
`,r=`${r}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,a=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(g,p,m,S)=>/\battribute\s+vec[23]\s+$/.test(S.substr(0,m))?p:`troika_${p}_${i}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),e=wd(e,i,r,a,o),t=wd(t,i,c,u,h),{vertexShader:e,fragmentShader:t}}function wd(s,e,t,n,i){return(n||i||t)&&(s=s.replace(Cm,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),s}function pM(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let mM=0;const Ad=new Map;function gM(s){const e=JSON.stringify(s,pM);let t=Ad.get(e);return t==null&&Ad.set(e,t=++mM),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function _M(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(i){var r=e._bin,a=new Uint8Array(i);if(r.readASCII(a,0,4)=="ttcf"){var o=4;r.readUshort(a,o),o+=2,r.readUshort(a,o),o+=2;var l=r.readUint(a,o);o+=4;for(var c=[],u=0;u<l;u++){var h=r.readUint(a,o);o+=4,c.push(e._readFont(a,h))}return c}return[e._readFont(a,0)]},_readFont:function(i,r){var a=e._bin,o=r;a.readFixed(i,r),r+=4;var l=a.readUshort(i,r);r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:i,_offset:o},h={},f=0;f<l;f++){var d=a.readASCII(i,r,4);r+=4,a.readUint(i,r),r+=4;var _=a.readUint(i,r);r+=4;var g=a.readUint(i,r);r+=4,h[d]={offset:_,length:g}}for(f=0;f<c.length;f++){var p=c[f];h[p]&&(u[p.trim()]=e[p.trim()].parse(i,h[p].offset,h[p].length,u))}return u},_tabOffset:function(i,r,a){for(var o=e._bin,l=o.readUshort(i,a+4),c=a+12,u=0;u<l;u++){var h=o.readASCII(i,c,4);c+=4,o.readUint(i,c),c+=4;var f=o.readUint(i,c);if(c+=4,o.readUint(i,c),c+=4,h==r)return f}return 0}};e._bin={readFixed:function(i,r){return(i[r]<<8|i[r+1])+(i[r+2]<<8|i[r+3])/65540},readF2dot14:function(i,r){return e._bin.readShort(i,r)/16384},readInt:function(i,r){return e._bin._view(i).getInt32(r)},readInt8:function(i,r){return e._bin._view(i).getInt8(r)},readShort:function(i,r){return e._bin._view(i).getInt16(r)},readUshort:function(i,r){return e._bin._view(i).getUint16(r)},readUshorts:function(i,r,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(i,r+2*l));return o},readUint:function(i,r){return e._bin._view(i).getUint32(r)},readUint64:function(i,r){return 4294967296*e._bin.readUint(i,r)+e._bin.readUint(i,r+4)},readASCII:function(i,r,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(i[r+l]);return o},readUnicode:function(i,r,a){for(var o="",l=0;l<a;l++){var c=i[r++]<<8|i[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,r,a){var o=e._bin._tdec;return o&&r==0&&a==i.length?o.decode(i):e._bin.readASCII(i,r,a)},readBytes:function(i,r,a){for(var o=[],l=0;l<a;l++)o.push(i[r+l]);return o},readASCIIArray:function(i,r,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(i[r+l]));return o},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,r,a,o,l){var c=e._bin,u={},h=r;c.readFixed(i,r),r+=4;var f=c.readUshort(i,r);r+=2;var d=c.readUshort(i,r);r+=2;var _=c.readUshort(i,r);return r+=2,u.scriptList=e._lctf.readScriptList(i,h+f),u.featureList=e._lctf.readFeatureList(i,h+d),u.lookupList=e._lctf.readLookupList(i,h+_,l),u},e._lctf.readLookupList=function(i,r,a){var o=e._bin,l=r,c=[],u=o.readUshort(i,r);r+=2;for(var h=0;h<u;h++){var f=o.readUshort(i,r);r+=2;var d=e._lctf.readLookupTable(i,l+f,a);c.push(d)}return c},e._lctf.readLookupTable=function(i,r,a){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(i,r),r+=2,c.flag=o.readUshort(i,r),r+=2;var u=o.readUshort(i,r);r+=2;for(var h=c.ltype,f=0;f<u;f++){var d=o.readUshort(i,r);r+=2;var _=a(i,h,l+d,c);c.tabs.push(_)}return c},e._lctf.numOfOnes=function(i){for(var r=0,a=0;a<32;a++)(i>>>a&1)!=0&&r++;return r},e._lctf.readClassDef=function(i,r){var a=e._bin,o=[],l=a.readUshort(i,r);if(r+=2,l==1){var c=a.readUshort(i,r);r+=2;var u=a.readUshort(i,r);r+=2;for(var h=0;h<u;h++)o.push(c+h),o.push(c+h),o.push(a.readUshort(i,r)),r+=2}if(l==2){var f=a.readUshort(i,r);for(r+=2,h=0;h<f;h++)o.push(a.readUshort(i,r)),r+=2,o.push(a.readUshort(i,r)),r+=2,o.push(a.readUshort(i,r)),r+=2}return o},e._lctf.getInterval=function(i,r){for(var a=0;a<i.length;a+=3){var o=i[a],l=i[a+1];if(i[a+2],o<=r&&r<=l)return a}return-1},e._lctf.readCoverage=function(i,r){var a=e._bin,o={};o.fmt=a.readUshort(i,r),r+=2;var l=a.readUshort(i,r);return r+=2,o.fmt==1&&(o.tab=a.readUshorts(i,r,l)),o.fmt==2&&(o.tab=a.readUshorts(i,r,3*l)),o},e._lctf.coverageIndex=function(i,r){var a=i.tab;if(i.fmt==1)return a.indexOf(r);if(i.fmt==2){var o=e._lctf.getInterval(a,r);if(o!=-1)return a[o+2]+(r-a[o])}return-1},e._lctf.readFeatureList=function(i,r){var a=e._bin,o=r,l=[],c=a.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=a.readASCII(i,r,4);r+=4;var f=a.readUshort(i,r);r+=2;var d=e._lctf.readFeatureTable(i,o+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(i,r){var a=e._bin,o=r,l={},c=a.readUshort(i,r);r+=2,c>0&&(l.featureParams=o+c);var u=a.readUshort(i,r);r+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(a.readUshort(i,r+2*h));return l},e._lctf.readScriptList=function(i,r){var a=e._bin,o=r,l={},c=a.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=a.readASCII(i,r,4);r+=4;var f=a.readUshort(i,r);r+=2,l[h.trim()]=e._lctf.readScriptTable(i,o+f)}return l},e._lctf.readScriptTable=function(i,r){var a=e._bin,o=r,l={},c=a.readUshort(i,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(i,o+c));var u=a.readUshort(i,r);r+=2;for(var h=0;h<u;h++){var f=a.readASCII(i,r,4);r+=4;var d=a.readUshort(i,r);r+=2,l[f.trim()]=e._lctf.readLangSysTable(i,o+d)}return l},e._lctf.readLangSysTable=function(i,r){var a=e._bin,o={};a.readUshort(i,r),r+=2,o.reqFeature=a.readUshort(i,r),r+=2;var l=a.readUshort(i,r);return r+=2,o.features=a.readUshorts(i,r,l),o},e.CFF={},e.CFF.parse=function(i,r,a){var o=e._bin;(i=new Uint8Array(i.buffer,r,a))[r=0],i[++r],i[++r],i[++r],r++;var l=[];r=e.CFF.readIndex(i,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(i,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var h=[];r=e.CFF.readIndex(i,r,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(i,r+h[u],r+h[u+1]));r+=h[h.length-1];var d=f[0],_=[];r=e.CFF.readIndex(i,r,_);var g=[];for(u=0;u<_.length-1;u++)g.push(o.readASCII(i,r+_[u],_[u+1]-_[u]));if(r+=_[_.length-1],e.CFF.readSubrs(i,r,d),d.CharStrings){r=d.CharStrings,_=[],r=e.CFF.readIndex(i,r,_);var p=[];for(u=0;u<_.length-1;u++)p.push(o.readBytes(i,r+_[u],_[u+1]-_[u]));d.CharStrings=p}if(d.ROS){r=d.FDArray;var m=[];for(r=e.CFF.readIndex(i,r,m),d.FDArray=[],u=0;u<m.length-1;u++){var S=e.CFF.readDict(i,r+m[u],r+m[u+1]);e.CFF._readFDict(i,S,g),d.FDArray.push(S)}r+=m[m.length-1],r=d.FDSelect,d.FDSelect=[];var M=i[r];if(r++,M!=3)throw M;var x=o.readUshort(i,r);for(r+=2,u=0;u<x+1;u++)d.FDSelect.push(o.readUshort(i,r),i[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(i,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(i,d.charset,d.CharStrings.length)),e.CFF._readFDict(i,d,g),d},e.CFF._readFDict=function(i,r,a){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(i,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(i,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=a[r[l]-426+35])},e.CFF.readSubrs=function(i,r,a){var o=e._bin,l=[];r=e.CFF.readIndex(i,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var h=0;h<l.length-1;h++)a.Subrs.push(o.readBytes(i,r+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,r){for(var a=0;a<i.charset.length;a++)if(i.charset[a]==r)return a;return-1},e.CFF.glyphBySE=function(i,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[r])},e.CFF.readEncoding=function(i,r,a){e._bin;var o=[".notdef"],l=i[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=i[r];r++;for(var u=0;u<c;u++)o.push(i[r+u]);return o},e.CFF.readCharset=function(i,r,a){var o=e._bin,l=[".notdef"],c=i[r];if(r++,c==0)for(var u=0;u<a;u++){var h=o.readUshort(i,r);r+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){h=o.readUshort(i,r),r+=2;var f=0;for(c==1?(f=i[r],r++):(f=o.readUshort(i,r),r+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(i,r,a){var o=e._bin,l=o.readUshort(i,r)+1,c=i[r+=2];if(r++,c==1)for(var u=0;u<l;u++)a.push(i[r+u]);else if(c==2)for(u=0;u<l;u++)a.push(o.readUshort(i,r+2*u));else if(c==3)for(u=0;u<l;u++)a.push(16777215&o.readUint(i,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(i,r,a){var o=e._bin,l=i[r],c=i[r+1];i[r+2],i[r+3],i[r+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=o.readShort(i,r+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=o.readInt(i,r+1)/65535,u=5),a.val=f??"o"+h,a.size=u},e.CFF.readCharString=function(i,r,a){for(var o=r+a,l=e._bin,c=[];r<o;){var u=i[r],h=i[r+1];i[r+2],i[r+3],i[r+4];var f=1,d=null,_=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(_=l.readShort(i,r+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(_=u-139,f=1),247<=u&&u<=250&&(_=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(_=256*-(u-251)-h-108,f=2),u==255&&(_=l.readInt(i,r+1)/65535,f=5),c.push(_??"o"+d),r+=f}return c},e.CFF.readDict=function(i,r,a){for(var o=e._bin,l={},c=[];r<a;){var u=i[r],h=i[r+1];i[r+2],i[r+3],i[r+4];var f=1,d=null,_=null;if(u==28&&(_=o.readShort(i,r+1),f=3),u==29&&(_=o.readInt(i,r+1),f=5),32<=u&&u<=246&&(_=u-139,f=1),247<=u&&u<=250&&(_=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(_=256*-(u-251)-h-108,f=2),u==255)throw _=o.readInt(i,r+1)/65535,f=5,"unknown number";if(u==30){var g=[];for(f=1;;){var p=i[r+f];f++;var m=p>>4,S=15&p;if(m!=15&&g.push(m),S!=15&&g.push(S),S==15)break}for(var M="",x=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],E=0;E<g.length;E++)M+=x[g[E]];_=parseFloat(M)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(_),r+=f}return l},e.cmap={},e.cmap.parse=function(i,r,a){i=new Uint8Array(i.buffer,r,a),r=0;var o=e._bin,l={};o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=o.readUshort(i,r);r+=2;var d=o.readUshort(i,r);r+=2;var _=o.readUint(i,r);r+=4;var g="p"+f+"e"+d,p=u.indexOf(_);if(p==-1){var m;p=l.tables.length,u.push(_);var S=o.readUshort(i,_);S==0?m=e.cmap.parse0(i,_):S==4?m=e.cmap.parse4(i,_):S==6?m=e.cmap.parse6(i,_):S==12?m=e.cmap.parse12(i,_):console.debug("unknown format: "+S,f,d,_),l.tables.push(m)}if(l[g]!=null)throw"multiple tables for one platform+encoding";l[g]=p}return l},e.cmap.parse0=function(i,r){var a=e._bin,o={};o.format=a.readUshort(i,r),r+=2;var l=a.readUshort(i,r);r+=2,a.readUshort(i,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(i[r+c]);return o},e.cmap.parse4=function(i,r){var a=e._bin,o=r,l={};l.format=a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2,a.readUshort(i,r),r+=2;var u=a.readUshort(i,r);r+=2;var h=u/2;l.searchRange=a.readUshort(i,r),r+=2,l.entrySelector=a.readUshort(i,r),r+=2,l.rangeShift=a.readUshort(i,r),r+=2,l.endCount=a.readUshorts(i,r,h),r+=2*h,r+=2,l.startCount=a.readUshorts(i,r,h),r+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(a.readShort(i,r)),r+=2;for(l.idRangeOffset=a.readUshorts(i,r,h),r+=2*h,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(a.readUshort(i,r)),r+=2;return l},e.cmap.parse6=function(i,r){var a=e._bin,o={};o.format=a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2,o.firstCode=a.readUshort(i,r),r+=2;var l=a.readUshort(i,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(i,r)),r+=2;return o},e.cmap.parse12=function(i,r){var a=e._bin,o={};o.format=a.readUshort(i,r),r+=2,r+=2,a.readUint(i,r),r+=4,a.readUint(i,r),r+=4;var l=a.readUint(i,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var u=r+12*c,h=a.readUint(i,u+0),f=a.readUint(i,u+4),d=a.readUint(i,u+8);o.groups.push([h,f,d])}return o},e.glyf={},e.glyf.parse=function(i,r,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(i,r){var a=e._bin,o=i._data,l=e._tabOffset(o,"glyf",i._offset)+i.loca[r];if(i.loca[r]==i.loca[r+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(a.readUshort(o,l)),l+=2;var h=a.readUshort(o,l);if(l+=2,o.length-l<h)return null;c.instructions=a.readBytes(o,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var _=o[l];l++;for(var g=0;g<_;g++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var S=0,M=0;for(u=0;u<f;u++)S+=c.xs[u],M+=c.ys[u],c.xs[u]=S,c.ys[u]=M}else{var x;c.parts=[];do{x=a.readUshort(o,l),l+=2;var E={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(E),E.glyphIndex=a.readUshort(o,l),l+=2,1&x){var A=a.readShort(o,l);l+=2;var T=a.readShort(o,l);l+=2}else A=a.readInt8(o,l),l++,T=a.readInt8(o,l),l++;2&x?(E.m.tx=A,E.m.ty=T):(E.p1=A,E.p2=T),8&x?(E.m.a=E.m.d=a.readF2dot14(o,l),l+=2):64&x?(E.m.a=a.readF2dot14(o,l),l+=2,E.m.d=a.readF2dot14(o,l),l+=2):128&x&&(E.m.a=a.readF2dot14(o,l),l+=2,E.m.b=a.readF2dot14(o,l),l+=2,E.m.c=a.readF2dot14(o,l),l+=2,E.m.d=a.readF2dot14(o,l),l+=2)}while(32&x);if(256&x){var b=a.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<b;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(i,r,a,o){var l=r;r+=4;var c=e._bin.readUshort(i,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(i,l+c)}},e.GPOS={},e.GPOS.parse=function(i,r,a,o){return e._lctf.parse(i,r,a,o,e.GPOS.subt)},e.GPOS.subt=function(i,r,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(i,a),a+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=l.readUshort(i,a);a+=2,u.coverage=e._lctf.readCoverage(i,h+c)}if(r==1&&u.fmt==1){var f=l.readUshort(i,a);a+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(i,a,f))}else if(r==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(i,a),a+=2;var d=l.readUshort(i,a);a+=2;var _=e._lctf.numOfOnes(f),g=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(i,a);a+=2;for(var m=0;m<p;m++){var S=c+l.readUshort(i,a);a+=2;var M=l.readUshort(i,S);S+=2;for(var x=[],E=0;E<M;E++){var A=l.readUshort(i,S);S+=2,f!=0&&(R=e.GPOS.readValueRecord(i,S,f),S+=2*_),d!=0&&(U=e.GPOS.readValueRecord(i,S,d),S+=2*g),x.push({gid2:A,val1:R,val2:U})}u.pairsets.push(x)}}if(u.fmt==2){var T=l.readUshort(i,a);a+=2;var b=l.readUshort(i,a);a+=2;var v=l.readUshort(i,a);a+=2;var y=l.readUshort(i,a);for(a+=2,u.classDef1=e._lctf.readClassDef(i,c+T),u.classDef2=e._lctf.readClassDef(i,c+b),u.matrix=[],m=0;m<v;m++){var C=[];for(E=0;E<y;E++){var R=null,U=null;f!=0&&(R=e.GPOS.readValueRecord(i,a,f),a+=2*_),d!=0&&(U=e.GPOS.readValueRecord(i,a,d),a+=2*g),C.push({val1:R,val2:U})}u.matrix.push(C)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(i,l.readUshort(i,a)+c),u.baseCoverage=e._lctf.readCoverage(i,l.readUshort(i,a+2)+c),u.markClassCount=l.readUshort(i,a+4),u.markArray=e.GPOS.readMarkArray(i,l.readUshort(i,a+6)+c),u.baseArray=e.GPOS.readBaseArray(i,l.readUshort(i,a+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(i,l.readUshort(i,a)+c),u.mark2Coverage=e._lctf.readCoverage(i,l.readUshort(i,a+2)+c),u.markClassCount=l.readUshort(i,a+4),u.mark1Array=e.GPOS.readMarkArray(i,l.readUshort(i,a+6)+c),u.mark2Array=e.GPOS.readBaseArray(i,l.readUshort(i,a+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var L=l.readUshort(i,a);a+=2;var B=l.readUint(i,a);if(a+=4,o.ltype==9)o.ltype=L;else if(o.ltype!=L)throw"invalid extension substitution";return e.GPOS.subt(i,o.ltype,c+B)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(i,r,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(i,r):0),r+=1&a?2:0,l.push(2&a?o.readShort(i,r):0),r+=2&a?2:0,l.push(4&a?o.readShort(i,r):0),r+=4&a?2:0,l.push(8&a?o.readShort(i,r):0),r+=8&a?2:0,l},e.GPOS.readBaseArray=function(i,r,a){var o=e._bin,l=[],c=r,u=o.readUshort(i,r);r+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<a;d++)f.push(e.GPOS.readAnchorRecord(i,c+o.readUshort(i,r))),r+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(i,r){var a=e._bin,o=[],l=r,c=a.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(i,a.readUshort(i,r+2)+l);h.markClass=a.readUshort(i,r),o.push(h),r+=4}return o},e.GPOS.readAnchorRecord=function(i,r){var a=e._bin,o={};return o.fmt=a.readUshort(i,r),o.x=a.readShort(i,r+2),o.y=a.readShort(i,r+4),o},e.GSUB={},e.GSUB.parse=function(i,r,a,o){return e._lctf.parse(i,r,a,o,e.GSUB.subt)},e.GSUB.subt=function(i,r,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(i,a),a+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=l.readUshort(i,a);a+=2,u.coverage=e._lctf.readCoverage(i,c+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(i,a),a+=2;else if(u.fmt==2){var f=l.readUshort(i,a);a+=2,u.newg=l.readUshorts(i,a,f),a+=2*u.newg.length}}else if(r==2&&u.fmt==1){f=l.readUshort(i,a),a+=2,u.seqs=[];for(var d=0;d<f;d++){var _=l.readUshort(i,a)+c;a+=2;var g=l.readUshort(i,_);u.seqs.push(l.readUshorts(i,_+2,g))}}else if(r==4)for(u.vals=[],f=l.readUshort(i,a),a+=2,d=0;d<f;d++){var p=l.readUshort(i,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(i,c+p))}else if(r==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(i,a);a+=2,u.cDef=e._lctf.readClassDef(i,c+m),u.scset=[];var S=l.readUshort(i,a);for(a+=2,d=0;d<S;d++){var M=l.readUshort(i,a);a+=2,u.scset.push(M==0?null:e.GSUB.readSubClassSet(i,c+M))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(i,a),a+=2;for(var x=[],E=0;E<f;E++)x.push(e._lctf.readCoverage(i,c+l.readUshort(i,a+2*E)));a+=2*f,d==0&&(u.backCvg=x),d==1&&(u.inptCvg=x),d==2&&(u.ahedCvg=x)}f=l.readUshort(i,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(i,a,f)}}else{if(r==7&&u.fmt==1){var A=l.readUshort(i,a);a+=2;var T=l.readUint(i,a);if(a+=4,o.ltype==9)o.ltype=A;else if(o.ltype!=A)throw"invalid extension substitution";return e.GSUB.subt(i,o.ltype,c+T)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(i,r){var a=e._bin.readUshort,o=r,l=[],c=a(i,r);r+=2;for(var u=0;u<c;u++){var h=a(i,r);r+=2,l.push(e.GSUB.readSubClassRule(i,o+h))}return l},e.GSUB.readSubClassRule=function(i,r){var a=e._bin.readUshort,o={},l=a(i,r),c=a(i,r+=2);r+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(a(i,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(i,r,c),o},e.GSUB.readSubstLookupRecords=function(i,r,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(i,r),o(i,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(i,r){var a=e._bin,o=r,l=[],c=a.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=a.readUshort(i,r);r+=2,l.push(e.GSUB.readChainSubClassRule(i,o+h))}return l},e.GSUB.readChainSubClassRule=function(i,r){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=a.readUshort(i,r);r+=2,c==1&&u--,o[l[c]]=a.readUshorts(i,r,u),r+=2*o[l[c]].length}return u=a.readUshort(i,r),r+=2,o.subst=a.readUshorts(i,r,2*u),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(i,r){var a=e._bin,o=r,l=[],c=a.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=a.readUshort(i,r);r+=2,l.push(e.GSUB.readLigature(i,o+h))}return l},e.GSUB.readLigature=function(i,r){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(i,r),r+=2;var l=a.readUshort(i,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(i,r)),r+=2;return o},e.head={},e.head.parse=function(i,r,a){var o=e._bin,l={};return o.readFixed(i,r),r+=4,l.fontRevision=o.readFixed(i,r),r+=4,o.readUint(i,r),r+=4,o.readUint(i,r),r+=4,l.flags=o.readUshort(i,r),r+=2,l.unitsPerEm=o.readUshort(i,r),r+=2,l.created=o.readUint64(i,r),r+=8,l.modified=o.readUint64(i,r),r+=8,l.xMin=o.readShort(i,r),r+=2,l.yMin=o.readShort(i,r),r+=2,l.xMax=o.readShort(i,r),r+=2,l.yMax=o.readShort(i,r),r+=2,l.macStyle=o.readUshort(i,r),r+=2,l.lowestRecPPEM=o.readUshort(i,r),r+=2,l.fontDirectionHint=o.readShort(i,r),r+=2,l.indexToLocFormat=o.readShort(i,r),r+=2,l.glyphDataFormat=o.readShort(i,r),r+=2,l},e.hhea={},e.hhea.parse=function(i,r,a){var o=e._bin,l={};return o.readFixed(i,r),r+=4,l.ascender=o.readShort(i,r),r+=2,l.descender=o.readShort(i,r),r+=2,l.lineGap=o.readShort(i,r),r+=2,l.advanceWidthMax=o.readUshort(i,r),r+=2,l.minLeftSideBearing=o.readShort(i,r),r+=2,l.minRightSideBearing=o.readShort(i,r),r+=2,l.xMaxExtent=o.readShort(i,r),r+=2,l.caretSlopeRise=o.readShort(i,r),r+=2,l.caretSlopeRun=o.readShort(i,r),r+=2,l.caretOffset=o.readShort(i,r),r+=2,r+=8,l.metricDataFormat=o.readShort(i,r),r+=2,l.numberOfHMetrics=o.readUshort(i,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(i,r,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(u=l.readUshort(i,r),r+=2,h=l.readShort(i,r),r+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(i,r,a,o){var l=e._bin,c=l.readUshort(i,r);if(r+=2,c==1)return e.kern.parseV1(i,r-2,a,o);var u=l.readUshort(i,r);r+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){r+=2,a=l.readUshort(i,r),r+=2;var d=l.readUshort(i,r);r+=2;var _=d>>>8;if((_&=15)!=0)throw"unknown kern table format: "+_;r=e.kern.readFormat0(i,r,h)}return h},e.kern.parseV1=function(i,r,a,o){var l=e._bin;l.readFixed(i,r),r+=4;var c=l.readUint(i,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(i,r),r+=4;var f=l.readUshort(i,r);r+=2,l.readUshort(i,r),r+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(i,r,u)}return u},e.kern.readFormat0=function(i,r,a){var o=e._bin,l=-1,c=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2;for(var u=0;u<c;u++){var h=o.readUshort(i,r);r+=2;var f=o.readUshort(i,r);r+=2;var d=o.readShort(i,r);r+=2,h!=l&&(a.glyph1.push(h),a.rval.push({glyph2:[],vals:[]}));var _=a.rval[a.rval.length-1];_.glyph2.push(f),_.vals.push(d),l=h}return r},e.loca={},e.loca.parse=function(i,r,a,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(i,r+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(i,r+(f<<2)));return c},e.maxp={},e.maxp.parse=function(i,r,a){var o=e._bin,l={},c=o.readUint(i,r);return r+=4,l.numGlyphs=o.readUshort(i,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(i,r),r+=2,l.maxContours=o.readUshort(i,r),r+=2,l.maxCompositePoints=o.readUshort(i,r),r+=2,l.maxCompositeContours=o.readUshort(i,r),r+=2,l.maxZones=o.readUshort(i,r),r+=2,l.maxTwilightPoints=o.readUshort(i,r),r+=2,l.maxStorage=o.readUshort(i,r),r+=2,l.maxFunctionDefs=o.readUshort(i,r),r+=2,l.maxInstructionDefs=o.readUshort(i,r),r+=2,l.maxStackElements=o.readUshort(i,r),r+=2,l.maxSizeOfInstructions=o.readUshort(i,r),r+=2,l.maxComponentElements=o.readUshort(i,r),r+=2,l.maxComponentDepth=o.readUshort(i,r),r+=2),l},e.name={},e.name.parse=function(i,r,a){var o=e._bin,l={};o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2,o.readUshort(i,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=r+=2,d=0;d<c;d++){var _=o.readUshort(i,r);r+=2;var g=o.readUshort(i,r);r+=2;var p=o.readUshort(i,r);r+=2;var m=o.readUshort(i,r);r+=2;var S=o.readUshort(i,r);r+=2;var M=o.readUshort(i,r);r+=2;var x,E=h[m],A=f+12*c+M;if(_==0)x=o.readUnicode(i,A,S/2);else if(_==3&&g==0)x=o.readUnicode(i,A,S/2);else if(g==0)x=o.readASCII(i,A,S);else if(g==1)x=o.readUnicode(i,A,S/2);else if(g==3)x=o.readUnicode(i,A,S/2);else{if(_!=1)throw"unknown encoding "+g+", platformID: "+_;x=o.readASCII(i,A,S),console.debug("reading unknown MAC encoding "+g+" as ASCII")}var T="p"+_+","+p.toString(16);l[T]==null&&(l[T]={}),l[T][E!==void 0?E:m]=x,l[T]._lang=p}for(var b in l)if(l[b].postScriptName!=null&&l[b]._lang==1033)return l[b];for(var b in l)if(l[b].postScriptName!=null&&l[b]._lang==0)return l[b];for(var b in l)if(l[b].postScriptName!=null&&l[b]._lang==3084)return l[b];for(var b in l)if(l[b].postScriptName!=null)return l[b];for(var b in l){u=b;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(i,r,a){var o=e._bin.readUshort(i,r);r+=2;var l={};if(o==0)e["OS/2"].version0(i,r,l);else if(o==1)e["OS/2"].version1(i,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(i,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(i,r,l)}return l},e["OS/2"].version0=function(i,r,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(i,r),r+=2,a.usWeightClass=o.readUshort(i,r),r+=2,a.usWidthClass=o.readUshort(i,r),r+=2,a.fsType=o.readUshort(i,r),r+=2,a.ySubscriptXSize=o.readShort(i,r),r+=2,a.ySubscriptYSize=o.readShort(i,r),r+=2,a.ySubscriptXOffset=o.readShort(i,r),r+=2,a.ySubscriptYOffset=o.readShort(i,r),r+=2,a.ySuperscriptXSize=o.readShort(i,r),r+=2,a.ySuperscriptYSize=o.readShort(i,r),r+=2,a.ySuperscriptXOffset=o.readShort(i,r),r+=2,a.ySuperscriptYOffset=o.readShort(i,r),r+=2,a.yStrikeoutSize=o.readShort(i,r),r+=2,a.yStrikeoutPosition=o.readShort(i,r),r+=2,a.sFamilyClass=o.readShort(i,r),r+=2,a.panose=o.readBytes(i,r,10),r+=10,a.ulUnicodeRange1=o.readUint(i,r),r+=4,a.ulUnicodeRange2=o.readUint(i,r),r+=4,a.ulUnicodeRange3=o.readUint(i,r),r+=4,a.ulUnicodeRange4=o.readUint(i,r),r+=4,a.achVendID=[o.readInt8(i,r),o.readInt8(i,r+1),o.readInt8(i,r+2),o.readInt8(i,r+3)],r+=4,a.fsSelection=o.readUshort(i,r),r+=2,a.usFirstCharIndex=o.readUshort(i,r),r+=2,a.usLastCharIndex=o.readUshort(i,r),r+=2,a.sTypoAscender=o.readShort(i,r),r+=2,a.sTypoDescender=o.readShort(i,r),r+=2,a.sTypoLineGap=o.readShort(i,r),r+=2,a.usWinAscent=o.readUshort(i,r),r+=2,a.usWinDescent=o.readUshort(i,r),r+=2},e["OS/2"].version1=function(i,r,a){var o=e._bin;return r=e["OS/2"].version0(i,r,a),a.ulCodePageRange1=o.readUint(i,r),r+=4,a.ulCodePageRange2=o.readUint(i,r),r+=4},e["OS/2"].version2=function(i,r,a){var o=e._bin;return r=e["OS/2"].version1(i,r,a),a.sxHeight=o.readShort(i,r),r+=2,a.sCapHeight=o.readShort(i,r),r+=2,a.usDefault=o.readUshort(i,r),r+=2,a.usBreak=o.readUshort(i,r),r+=2,a.usMaxContext=o.readUshort(i,r),r+=2},e["OS/2"].version5=function(i,r,a){var o=e._bin;return r=e["OS/2"].version2(i,r,a),a.usLowerOpticalPointSize=o.readUshort(i,r),r+=2,a.usUpperOpticalPointSize=o.readUshort(i,r),r+=2},e.post={},e.post.parse=function(i,r,a){var o=e._bin,l={};return l.version=o.readFixed(i,r),r+=4,l.italicAngle=o.readFixed(i,r),r+=4,l.underlinePosition=o.readShort(i,r),r+=2,l.underlineThickness=o.readShort(i,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,r){var a=i.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(i,r){var a={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[r]){var o=i.SVG.entries[r];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),i.SVG.entries[r]=o),o)}if(i.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,u=i.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=r;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(i.CFF.CharStrings[r],l,c,u,a)}else i.glyf&&e.U._drawGlyf(r,i,a);return a},e.U._drawGlyf=function(i,r,a){var o=r.glyf[i];o==null&&(o=r.glyf[i]=e.glyf._parseGlyf(r,i)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,r,a))},e.U._simpleGlyph=function(i,r){for(var a=0;a<i.noc;a++){for(var o=a==0?0:i.endPts[a-1]+1,l=i.endPts[a],c=o;c<=l;c++){var u=c==o?l:c-1,h=c==l?o:c+1,f=1&i.flags[c],d=1&i.flags[u],_=1&i.flags[h],g=i.xs[c],p=i.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(r,g,p);continue}e.U.P.moveTo(r,i.xs[u],i.ys[u])}else d?e.U.P.moveTo(r,i.xs[u],i.ys[u]):e.U.P.moveTo(r,(i.xs[u]+g)/2,(i.ys[u]+p)/2);f?d&&e.U.P.lineTo(r,g,p):_?e.U.P.qcurveTo(r,g,p,i.xs[h],i.ys[h]):e.U.P.qcurveTo(r,g,p,(g+i.xs[h])/2,(p+i.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(i,r,a){for(var o=0;o<i.parts.length;o++){var l={cmds:[],crds:[]},c=i.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];a.crds.push(f*u.a+d*u.b+u.tx),a.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)a.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(i,r){var a=e._lctf.getInterval(r,i);return a==-1?0:r[a+2]},e.U._applySubs=function(i,r,a,o){for(var l=i.length-r-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var u,h=a.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,i[r]))!=-1){if(a.ltype==1)i[r],h.fmt==1?i[r]=i[r]+h.delta:i[r]=h.newg[u];else if(a.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var _=f[d],g=_.chain.length;if(!(g>l)){for(var p=!0,m=0,S=0;S<g;S++){for(;i[r+m+(1+S)]==-1;)m++;_.chain[S]!=i[r+m+(1+S)]&&(p=!1)}if(p){for(i[r]=_.nglyph,S=0;S<g+m;S++)i[r+S+1]=-1;break}}}else if(a.ltype==5&&h.fmt==2)for(var M=e._lctf.getInterval(h.cDef,i[r]),x=h.cDef[M+2],E=h.scset[x],A=0;A<E.length;A++){var T=E[A],b=T.input;if(!(b.length>l)){for(p=!0,S=0;S<b.length;S++){var v=e._lctf.getInterval(h.cDef,i[r+1+S]);if(M==-1&&h.cDef[v+2]!=b[S]){p=!1;break}}if(p){var y=T.substLookupRecords;for(d=0;d<y.length;d+=2)y[d],y[d+1]}}}else if(a.ltype==6&&h.fmt==3){if(!e.U._glsCovered(i,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(i,h.inptCvg,r)||!e.U._glsCovered(i,h.ahedCvg,r+h.inptCvg.length))continue;var C=h.lookupRec;for(A=0;A<C.length;A+=2){M=C[A];var R=o[C[A+1]];e.U._applySubs(i,r+M,R,o)}}}}},e.U._glsCovered=function(i,r,a){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],i[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(i,r,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var h=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,f=e.U.glyphToPath(i,u),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);a&&o.cmds.push("X"),l+=i.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(i,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(i,r,a){i.cmds.push("M"),i.crds.push(r,a)},e.U.P.lineTo=function(i,r,a){i.cmds.push("L"),i.crds.push(r,a)},e.U.P.curveTo=function(i,r,a,o,l,c,u){i.cmds.push("C"),i.crds.push(r,a,o,l,c,u)},e.U.P.qcurveTo=function(i,r,a,o,l){i.cmds.push("Q"),i.crds.push(r,a,o,l)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,r,a,o,l){for(var c=r.stack,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open,_=0,g=r.x,p=r.y,m=0,S=0,M=0,x=0,E=0,A=0,T=0,b=0,v=0,y=0,C={val:0,size:0};_<i.length;){e.CFF.getCharString(i,_,C);var R=C.val;if(_+=C.size,R=="o1"||R=="o18")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(R=="o3"||R=="o23")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(R=="o4")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,g,p),d=!0;else if(R=="o5")for(;c.length>0;)g+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,g,p);else if(R=="o6"||R=="o7")for(var U=c.length,L=R=="o6",B=0;B<U;B++){var I=c.shift();L?g+=I:p+=I,L=!L,e.U.P.lineTo(l,g,p)}else if(R=="o8"||R=="o24"){U=c.length;for(var W=0;W+6<=U;)m=g+c.shift(),S=p+c.shift(),M=m+c.shift(),x=S+c.shift(),g=M+c.shift(),p=x+c.shift(),e.U.P.curveTo(l,m,S,M,x,g,p),W+=6;R=="o24"&&(g+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,g,p))}else{if(R=="o11")break;if(R=="o1234"||R=="o1235"||R=="o1236"||R=="o1237")R=="o1234"&&(S=p,M=(m=g+c.shift())+c.shift(),y=x=S+c.shift(),A=x,b=p,g=(T=(E=(v=M+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,S,M,x,v,y),e.U.P.curveTo(l,E,A,T,b,g,p)),R=="o1235"&&(m=g+c.shift(),S=p+c.shift(),M=m+c.shift(),x=S+c.shift(),v=M+c.shift(),y=x+c.shift(),E=v+c.shift(),A=y+c.shift(),T=E+c.shift(),b=A+c.shift(),g=T+c.shift(),p=b+c.shift(),c.shift(),e.U.P.curveTo(l,m,S,M,x,v,y),e.U.P.curveTo(l,E,A,T,b,g,p)),R=="o1236"&&(m=g+c.shift(),S=p+c.shift(),M=m+c.shift(),y=x=S+c.shift(),A=x,T=(E=(v=M+c.shift())+c.shift())+c.shift(),b=A+c.shift(),g=T+c.shift(),e.U.P.curveTo(l,m,S,M,x,v,y),e.U.P.curveTo(l,E,A,T,b,g,p)),R=="o1237"&&(m=g+c.shift(),S=p+c.shift(),M=m+c.shift(),x=S+c.shift(),v=M+c.shift(),y=x+c.shift(),E=v+c.shift(),A=y+c.shift(),T=E+c.shift(),b=A+c.shift(),Math.abs(T-g)>Math.abs(b-p)?g=T+c.shift():p=b+c.shift(),e.U.P.curveTo(l,m,S,M,x,v,y),e.U.P.curveTo(l,E,A,T,b,g,p));else if(R=="o14"){if(c.length>0&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),c.length==4){var H=c.shift(),Y=c.shift(),X=c.shift(),F=c.shift(),V=e.CFF.glyphBySE(a,X),Z=e.CFF.glyphBySE(a,F);e.U._drawCFF(a.CharStrings[V],r,a,o,l),r.x=H,r.y=Y,e.U._drawCFF(a.CharStrings[Z],r,a,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(R=="o19"||R=="o20")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,_+=u+7>>3;else if(R=="o21")c.length>2&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),p+=c.pop(),g+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,g,p),d=!0;else if(R=="o22")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),g+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,g,p),d=!0;else if(R=="o25"){for(;c.length>6;)g+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,g,p);m=g+c.shift(),S=p+c.shift(),M=m+c.shift(),x=S+c.shift(),g=M+c.shift(),p=x+c.shift(),e.U.P.curveTo(l,m,S,M,x,g,p)}else if(R=="o26")for(c.length%2&&(g+=c.shift());c.length>0;)m=g,S=p+c.shift(),g=M=m+c.shift(),p=(x=S+c.shift())+c.shift(),e.U.P.curveTo(l,m,S,M,x,g,p);else if(R=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)S=p,M=(m=g+c.shift())+c.shift(),x=S+c.shift(),g=M+c.shift(),p=x,e.U.P.curveTo(l,m,S,M,x,g,p);else if(R=="o10"||R=="o29"){var N=R=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var k=c.pop(),ne=N.Subrs[k+N.Bias];r.x=g,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d,e.U._drawCFF(ne,r,a,o,l),g=r.x,p=r.y,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open}}else if(R=="o30"||R=="o31"){var J=c.length,ee=(W=0,R=="o31");for(W+=J-(U=-3&J);W<U;)ee?(S=p,M=(m=g+c.shift())+c.shift(),p=(x=S+c.shift())+c.shift(),U-W==5?(g=M+c.shift(),W++):g=M,ee=!1):(m=g,S=p+c.shift(),M=m+c.shift(),x=S+c.shift(),g=M+c.shift(),U-W==5?(p=x+c.shift(),W++):p=x,ee=!0),e.U.P.curveTo(l,m,S,M,x,g,p),W+=4}else{if((R+"").charAt(0)=="o")throw console.debug("Unknown operation: "+R,i),R;c.push(R)}}}r.x=g,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d};var t=e,n={Typr:t};return s.Typr=t,s.default=n,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function vM(){return function(s){var e=Uint8Array,t=Uint16Array,n=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(R,U){for(var L=new t(31),B=0;B<31;++B)L[B]=U+=1<<R[B-1];var I=new n(L[30]);for(B=1;B<30;++B)for(var W=L[B];W<L[B+1];++W)I[W]=W-L[B]<<5|B;return[L,I]},l=o(i,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=o(r,0)[0],f=new t(32768),d=0;d<32768;++d){var _=(43690&d)>>>1|(21845&d)<<1;_=(61680&(_=(52428&_)>>>2|(13107&_)<<2))>>>4|(3855&_)<<4,f[d]=((65280&_)>>>8|(255&_)<<8)>>>1}var g=function(R,U,L){for(var B=R.length,I=0,W=new t(U);I<B;++I)++W[R[I]-1];var H,Y=new t(U);for(I=0;I<U;++I)Y[I]=Y[I-1]+W[I-1]<<1;{H=new t(1<<U);var X=15-U;for(I=0;I<B;++I)if(R[I])for(var F=I<<4|R[I],V=U-R[I],Z=Y[R[I]-1]++<<V,N=Z|(1<<V)-1;Z<=N;++Z)H[f[Z]>>>X]=F}return H},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var S=g(p,9),M=g(m,5),x=function(R){for(var U=R[0],L=1;L<R.length;++L)R[L]>U&&(U=R[L]);return U},E=function(R,U,L){var B=U/8|0;return(R[B]|R[B+1]<<8)>>(7&U)&L},A=function(R,U){var L=U/8|0;return(R[L]|R[L+1]<<8|R[L+2]<<16)>>(7&U)},T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],b=function(R,U,L){var B=new Error(U||T[R]);if(B.code=R,Error.captureStackTrace&&Error.captureStackTrace(B,b),!L)throw B;return B},v=function(R,U,L){var B=R.length;if(!B||L&&!L.l&&B<5)return U||new e(0);var I=!U||L,W=!L||L.i;L||(L={}),U||(U=new e(3*B));var H,Y=function(ve){var Ae=U.length;if(ve>Ae){var Se=new e(Math.max(2*Ae,ve));Se.set(U),U=Se}},X=L.f||0,F=L.p||0,V=L.b||0,Z=L.l,N=L.d,k=L.m,ne=L.n,J=8*B;do{if(!Z){L.f=X=E(R,F,1);var ee=E(R,F+1,3);if(F+=3,!ee){var xe=R[(de=((H=F)/8|0)+(7&H&&1)+4)-4]|R[de-3]<<8,pe=de+xe;if(pe>B){W&&b(0);break}I&&Y(V+xe),U.set(R.subarray(de,pe),V),L.b=V+=xe,L.p=F=8*pe;continue}if(ee==1)Z=S,N=M,k=9,ne=5;else if(ee==2){var ge=E(R,F,31)+257,ue=E(R,F+10,15)+4,Ie=ge+E(R,F+5,31)+1;F+=14;for(var O=new e(Ie),ze=new e(19),Ce=0;Ce<ue;++Ce)ze[a[Ce]]=E(R,F+3*Ce,7);F+=3*ue;var Fe=x(ze),le=(1<<Fe)-1,Ee=g(ze,Fe);for(Ce=0;Ce<Ie;){var de,te=Ee[E(R,F,le)];if(F+=15&te,(de=te>>>4)<16)O[Ce++]=de;else{var Ue=0,D=0;for(de==16?(D=3+E(R,F,3),F+=2,Ue=O[Ce-1]):de==17?(D=3+E(R,F,7),F+=3):de==18&&(D=11+E(R,F,127),F+=7);D--;)O[Ce++]=Ue}}var w=O.subarray(0,ge),G=O.subarray(ge);k=x(w),ne=x(G),Z=g(w,k),N=g(G,ne)}else b(1);if(F>J){W&&b(0);break}}I&&Y(V+131072);for(var ae=(1<<k)-1,$=(1<<ne)-1,Q=F;;Q=F){var ye=(Ue=Z[A(R,F)&ae])>>>4;if((F+=15&Ue)>J){W&&b(0);break}if(Ue||b(2),ye<256)U[V++]=ye;else{if(ye==256){Q=F,Z=null;break}var _e=ye-254;if(ye>264){var Me=i[Ce=ye-257];_e=E(R,F,(1<<Me)-1)+c[Ce],F+=Me}var we=N[A(R,F)&$],oe=we>>>4;if(we||b(3),F+=15&we,G=h[oe],oe>3&&(Me=r[oe],G+=A(R,F)&(1<<Me)-1,F+=Me),F>J){W&&b(0);break}I&&Y(V+131072);for(var me=V+_e;V<me;V+=4)U[V]=U[V-G],U[V+1]=U[V+1-G],U[V+2]=U[V+2-G],U[V+3]=U[V+3-G];V=me}}L.l=Z,L.p=Q,L.b=V,Z&&(X=1,L.m=k,L.d=N,L.n=ne)}while(!X);return V==U.length?U:function(ve,Ae,Se){(Se==null||Se>ve.length)&&(Se=ve.length);var Ge=new(ve instanceof t?t:ve instanceof n?n:e)(Se-Ae);return Ge.set(ve.subarray(Ae,Se)),Ge}(U,0,V)},y=new e(0),C=typeof TextDecoder<"u"&&new TextDecoder;try{C.decode(y,{stream:!0})}catch{}return s.convert_streams=function(R){var U=new DataView(R),L=0;function B(){var ge=U.getUint16(L);return L+=2,ge}function I(){var ge=U.getUint32(L);return L+=4,ge}function W(ge){xe.setUint16(pe,ge),pe+=2}function H(ge){xe.setUint32(pe,ge),pe+=4}for(var Y={signature:I(),flavor:I(),length:I(),numTables:B(),reserved:B(),totalSfntSize:I(),majorVersion:B(),minorVersion:B(),metaOffset:I(),metaLength:I(),metaOrigLength:I(),privOffset:I(),privLength:I()},X=0;Math.pow(2,X)<=Y.numTables;)X++;X--;for(var F=16*Math.pow(2,X),V=16*Y.numTables-F,Z=12,N=[],k=0;k<Y.numTables;k++)N.push({tag:I(),offset:I(),compLength:I(),origLength:I(),origChecksum:I()}),Z+=16;var ne,J=new Uint8Array(12+16*N.length+N.reduce(function(ge,ue){return ge+ue.origLength+4},0)),ee=J.buffer,xe=new DataView(ee),pe=0;return H(Y.flavor),W(Y.numTables),W(F),W(X),W(V),N.forEach(function(ge){H(ge.tag),H(ge.origChecksum),H(Z),H(ge.origLength),ge.outOffset=Z,(Z+=ge.origLength)%4!=0&&(Z+=4-Z%4)}),N.forEach(function(ge){var ue,Ie=R.slice(ge.offset,ge.offset+ge.compLength);if(ge.compLength!=ge.origLength){var O=new Uint8Array(ge.origLength);ue=new Uint8Array(Ie,2),v(ue,O)}else O=new Uint8Array(Ie);J.set(O,ge.outOffset);var ze=0;(Z=ge.outOffset+ge.origLength)%4!=0&&(ze=4-Z%4),J.set(new Uint8Array(ze).buffer,ge.outOffset+ge.origLength),ne=Z+ze}),ee.slice(0,ne)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function xM(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,r=2,a=4,o=8,l=16,c=32;let u;function h(T){if(!u){const b={R:r,L:i,D:a,C:l,U:c,T:o};u=new Map;for(let v in n){let y=0;n[v].split(",").forEach(C=>{let[R,U]=C.split("+");R=parseInt(R,36),U=U?parseInt(U,36):0,u.set(y+=R,b[v]);for(let L=U;L--;)u.set(++y,b[v])})}}return u.get(T)||c}const f=1,d=2,_=3,g=4,p=[null,"isol","init","fina","medi"];function m(T){const b=new Uint8Array(T.length);let v=c,y=f,C=-1;for(let R=0;R<T.length;R++){const U=T.codePointAt(R);let L=h(U)|0,B=f;L&o||(v&(i|a|l)?L&(r|a|l)?(B=_,(y===f||y===_)&&b[C]++):L&(i|c)&&(y===d||y===g)&&b[C]--:v&(r|c)&&(y===d||y===g)&&b[C]--,y=b[R]=B,v=L,C=R,U>65535&&R++)}return b}function S(T,b){const v=[];for(let C=0;C<b.length;C++){const R=b.codePointAt(C);R>65535&&C++,v.push(s.U.codeToGlyph(T,R))}const y=T.GSUB;if(y){const{lookupList:C,featureList:R}=y;let U;const L=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,B=[];R.forEach(I=>{if(L.test(I.tag))for(let W=0;W<I.tab.length;W++){if(B[I.tab[W]])continue;B[I.tab[W]]=!0;const H=C[I.tab[W]],Y=/^(isol|init|fina|medi)$/.test(I.tag);Y&&!U&&(U=m(b));for(let X=0;X<v.length;X++)(!U||!Y||p[U[X]]===I.tag)&&s.U._applySubs(v,X,H,C)}})}return v}function M(T,b){const v=new Int16Array(b.length*3);let y=0;for(;y<b.length;y++){const L=b[y];if(L===-1)continue;v[y*3+2]=T.hmtx.aWidth[L];const B=T.GPOS;if(B){const I=B.lookupList;for(let W=0;W<I.length;W++){const H=I[W];for(let Y=0;Y<H.tabs.length;Y++){const X=H.tabs[Y];if(H.ltype===1){if(s._lctf.coverageIndex(X.coverage,L)!==-1&&X.pos){U(X.pos,y);break}}else if(H.ltype===2){let F=null,V=C();if(V!==-1){const Z=s._lctf.coverageIndex(X.coverage,b[V]);if(Z!==-1){if(X.fmt===1){const N=X.pairsets[Z];for(let k=0;k<N.length;k++)N[k].gid2===L&&(F=N[k])}else if(X.fmt===2){const N=s.U._getGlyphClass(b[V],X.classDef1),k=s.U._getGlyphClass(L,X.classDef2);F=X.matrix[N][k]}if(F){F.val1&&U(F.val1,V),F.val2&&U(F.val2,y);break}}}}else if(H.ltype===4){const F=s._lctf.coverageIndex(X.markCoverage,L);if(F!==-1){const V=C(R),Z=V===-1?-1:s._lctf.coverageIndex(X.baseCoverage,b[V]);if(Z!==-1){const N=X.markArray[F],k=X.baseArray[Z][N.markClass];v[y*3]=k.x-N.x+v[V*3]-v[V*3+2],v[y*3+1]=k.y-N.y+v[V*3+1];break}}}else if(H.ltype===6){const F=s._lctf.coverageIndex(X.mark1Coverage,L);if(F!==-1){const V=C();if(V!==-1){const Z=b[V];if(x(T,Z)===3){const N=s._lctf.coverageIndex(X.mark2Coverage,Z);if(N!==-1){const k=X.mark1Array[F],ne=X.mark2Array[N][k.markClass];v[y*3]=ne.x-k.x+v[V*3]-v[V*3+2],v[y*3+1]=ne.y-k.y+v[V*3+1];break}}}}}}}}else if(T.kern&&!T.cff){const I=C();if(I!==-1){const W=T.kern.glyph1.indexOf(b[I]);if(W!==-1){const H=T.kern.rval[W].glyph2.indexOf(L);H!==-1&&(v[I*3+2]+=T.kern.rval[W].vals[H])}}}}return v;function C(L){for(let B=y-1;B>=0;B--)if(b[B]!==-1&&(!L||L(b[B])))return B;return-1}function R(L){return x(T,L)===1}function U(L,B){for(let I=0;I<3;I++)v[B*3+I]+=L[I]||0}}function x(T,b){const v=T.GDEF&&T.GDEF.glyphClassDef;return v?s.U._getGlyphClass(b,v):0}function E(...T){for(let b=0;b<T.length;b++)if(typeof T[b]=="number")return T[b]}function A(T){const b=Object.create(null),v=T["OS/2"],y=T.hhea,C=T.head.unitsPerEm,R=E(v&&v.sTypoAscender,y&&y.ascender,C),U={unitsPerEm:C,ascender:R,descender:E(v&&v.sTypoDescender,y&&y.descender,0),capHeight:E(v&&v.sCapHeight,R),xHeight:E(v&&v.sxHeight,R),lineGap:E(v&&v.sTypoLineGap,y&&y.lineGap),supportsCodePoint(L){return s.U.codeToGlyph(T,L)>0},forEachGlyph(L,B,I,W){let H=0;const Y=1/U.unitsPerEm*B,X=S(T,L);let F=0;const V=M(T,X);return X.forEach((Z,N)=>{if(Z!==-1){let k=b[Z];if(!k){const{cmds:ne,crds:J}=s.U.glyphToPath(T,Z);let ee="",xe=0;for(let O=0,ze=ne.length;O<ze;O++){const Ce=t[ne[O]];ee+=ne[O];for(let Fe=1;Fe<=Ce;Fe++)ee+=(Fe>1?",":"")+J[xe++]}let pe,ge,ue,Ie;if(J.length){pe=ge=1/0,ue=Ie=-1/0;for(let O=0,ze=J.length;O<ze;O+=2){let Ce=J[O],Fe=J[O+1];Ce<pe&&(pe=Ce),Fe<ge&&(ge=Fe),Ce>ue&&(ue=Ce),Fe>Ie&&(Ie=Fe)}}else pe=ue=ge=Ie=0;k=b[Z]={index:Z,advanceWidth:T.hmtx.aWidth[Z],xMin:pe,yMin:ge,xMax:ue,yMax:Ie,path:ee}}W.call(null,k,H+V[N*3]*Y,V[N*3+1]*Y,F),H+=V[N*3+2]*Y,I&&(H+=I*B)}F+=L.codePointAt(F)>65535?2:1}),H}};return U}return function(b){const v=new Uint8Array(b,0,4),y=s._bin.readASCII(v,0,4);if(y==="wOFF")b=e(b);else if(y==="wOF2")throw new Error("woff2 fonts not supported");return A(s.parse(b)[0])}}const yM=Ms({name:"Typr Font Parser",dependencies:[_M,vM,xM],init(s,e,t){const n=s(),i=e();return t(n,i)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function SM(){return function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(M){var x=M>>5;this.buckets.set(x,(this.buckets.get(x)||0)|1<<(31&M))},e.prototype.has=function(M){var x=this.buckets.get(M>>5);return x!==void 0&&(x&1<<(31&M))!=0},e.prototype.serialize=function(){var M=[];return this.buckets.forEach(function(x,E){M.push((+E).toString(36)+":"+x.toString(36))}),M.join(",")},e.prototype.deserialize=function(M){var x=this;this.buckets.clear(),M.split(",").forEach(function(E){var A=E.split(":");x.buckets.set(parseInt(A[0],36),parseInt(A[1],36))})};var t=Math.pow(2,8),n=t-1,i=~n;function r(M){var x=function(A){return A&i}(M).toString(16),E=function(A){return(A&i)+t-1}(M).toString(16);return"codepoint-index/plane"+(M>>16)+"/"+x+"-"+E+".json"}function a(M,x){var E=M&n,A=x.codePointAt(E/6|0);return((A=(A||48)-48)&1<<E%6)!=0}function o(M,x){var E;(E=M,E.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(A){return A.split("-").map(function(T){return parseInt(T.trim(),16)})})).forEach(function(A){var T=A[0],b=A[1];b===void 0&&(b=T),x(T,b)})}function l(M,x){o(M,function(E,A){for(var T=E;T<=A;T++)x(T)})}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(M){var x=h.get(M);return x||(x=new e,l(M.ranges,function(E){return x.add(E)}),h.set(M,x)),x}var _,g=new Map;function p(M,x,E){return M[x]?x:M[E]?E:function(A){for(var T in A)return T}(M)}function m(M,x){var E=x;if(!M.includes(E)){E=1/0;for(var A=0;A<M.length;A++)Math.abs(M[A]-x)<Math.abs(E-x)&&(E=M[A])}return E}function S(M){return _||(_=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(x){_.add(x)})),_.has(M)}return s.CodePointSet=e,s.clearCache=function(){c={},u={}},s.getFontsForString=function(M,x){x===void 0&&(x={});var E,A=x.lang;A===void 0&&(A=new RegExp("\\p{Script=Hangul}","u").test(E=M)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(E)?"ja":"en");var T=x.category;T===void 0&&(T="sans-serif");var b=x.style;b===void 0&&(b="normal");var v=x.weight;v===void 0&&(v=400);var y=(x.dataUrl||f).replace(/\/$/g,""),C=new Map,R=new Uint8Array(M.length),U={},L={},B=new Array(M.length),I=new Map,W=!1;function H(F){var V=g.get(F);return V||(V=fetch(y+"/"+F).then(function(Z){if(!Z.ok)throw new Error(Z.statusText);return Z.json().then(function(N){if(!Array.isArray(N)||N[0]!==1)throw new Error("Incorrect schema version; need 1, got "+N[0]);return N[1]})}).catch(function(Z){if(y!==f)return W||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+y+'", trying default CDN. '+Z.message),W=!0),y=f,g.delete(F),H(F);throw Z}),g.set(F,V)),V}for(var Y=function(F){var V=M.codePointAt(F),Z=r(V);B[F]=Z,c[Z]||I.has(Z)||I.set(Z,H(Z).then(function(N){c[Z]=N})),V>65535&&(F++,X=F)},X=0;X<M.length;X++)Y(X);return Promise.all(I.values()).then(function(){I.clear();for(var F=function(Z){var N=M.codePointAt(Z),k=null,ne=c[B[Z]],J=void 0;for(var ee in ne){var xe=L[ee];if(xe===void 0&&(xe=L[ee]=new RegExp(ee).test(A||"en")),xe){for(var pe in J=ee,ne[ee])if(a(N,ne[ee][pe])){k=pe;break}break}}if(!k){e:for(var ge in ne)if(ge!==J){for(var ue in ne[ge])if(a(N,ne[ge][ue])){k=ue;break e}}}k||(console.debug("No font coverage for U+"+N.toString(16)),k="latin"),B[Z]=k,u[k]||I.has(k)||I.set(k,H("font-meta/"+k+".json").then(function(Ie){u[k]=Ie})),N>65535&&(Z++,V=Z)},V=0;V<M.length;V++)F(V);return Promise.all(I.values())}).then(function(){for(var F,V=null,Z=0;Z<M.length;Z++){var N=M.codePointAt(Z);if(V&&(S(N)||d(V).has(N)))R[Z]=R[Z-1];else{V=u[B[Z]];var k=U[V.id];if(!k){var ne=V.typeforms,J=p(ne,T,"sans-serif"),ee=p(ne[J],b,"normal"),xe=m((F=ne[J])===null||F===void 0?void 0:F[ee],v);k=U[V.id]=y+"/font-files/"+V.id+"/"+J+"."+ee+"."+xe+".woff"}var pe=C.get(k);pe==null&&(pe=C.size,C.set(k,pe)),R[Z]=pe}N>65535&&(Z++,R[Z]=R[Z-1])}return{fontUrls:Array.from(C.keys()),chars:R}})},Object.defineProperty(s,"__esModule",{value:!0}),s}({})}function MM(s,e){const t=Object.create(null),n=Object.create(null);function i(a,o){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=s(c.response);u.src=a,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(a,o){let l=t[a];l?o(l):n[a]?n[a].push(o):(n[a]=[o],i(a,c=>{c.src=a,t[a]=c,n[a].forEach(u=>u(c)),delete n[a]}))}return function(a,o,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(a.length),_=[];a.length||S();const g=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(x=>!x.lang||x.lang.test(l)).reverse(),c.length){let T=0;(function b(v=0){for(let y=v,C=a.length;y<C;y++){const R=a.codePointAt(y);if(T===1&&_[d[y-1]].supportsCodePoint(R)||y>0&&/\s/.test(a[y]))d[y]=d[y-1],T===2&&(p[p.length-1][1]=y);else for(let U=d[y],L=c.length;U<=L;U++)if(U===L){const B=T===2?p[p.length-1]:p[p.length]=[y,y];B[1]=y,T=2}else{d[y]=U;const{src:B,unicodeRange:I}=c[U];if(!I||M(R,I)){const W=t[B];if(!W){r(B,()=>{b(y)});return}if(W.supportsCodePoint(R)){let H=g.get(W);typeof H!="number"&&(H=_.length,_.push(W),g.set(W,H)),d[y]=H,T=1;break}}}R>65535&&y+1<C&&(d[y+1]=d[y],y++,T===2&&(p[p.length-1][1]=y))}m()})()}else p.push([0,a.length-1]),m();function m(){if(p.length){const x=p.map(E=>a.substring(E[0],E[1]+1)).join(`
`);e.getFontsForString(x,{lang:l||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:E,chars:A})=>{const T=_.length;let b=0;p.forEach(y=>{for(let C=0,R=y[1]-y[0];C<=R;C++)d[y[0]+C]=A[b++]+T;b++});let v=0;E.forEach((y,C)=>{r(y,R=>{_[C+T]=R,++v===E.length&&S()})})})}else S()}function S(){o({chars:d,fonts:_})}function M(x,E){for(let A=0;A<E.length;A++){const[T,b=T]=E[A];if(T<=x&&x<=b)return!0}return!1}}}const TM=Ms({name:"FontResolver",dependencies:[MM,yM,SM],init(s,e,t){return s(e,t())}});function bM(s,e){const n=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,i="[^\\S\\u00A0]",r=new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:_,lang:g,fonts:p,style:m,weight:S,preResolvedFonts:M,unicodeFontsURL:x},E){const A=({chars:T,fonts:b})=>{let v,y;const C=[];for(let R=0;R<T.length;R++)T[R]!==y?(y=T[R],C.push(v={start:R,end:R,fontObj:b[T[R]]})):v.end=R;E(C)};M?A(M):s(_,A,{lang:g,fonts:p,style:m,weight:S,unicodeFontsURL:x})}function o({text:_="",font:g,lang:p,sdfGlyphSize:m=64,fontSize:S=400,fontWeight:M=1,fontStyle:x="normal",letterSpacing:E=0,lineHeight:A="normal",maxWidth:T=1/0,direction:b,textAlign:v="left",textIndent:y=0,whiteSpace:C="normal",overflowWrap:R="normal",anchorX:U=0,anchorY:L=0,metricsOnly:B=!1,unicodeFontsURL:I,preResolvedFonts:W=null,includeCaretPositions:H=!1,chunkedBoundsSize:Y=8192,colorRanges:X=null},F){const V=h(),Z={fontLoad:0,typesetting:0};_.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),S=+S,E=+E,T=+T,A=A||"normal",y=+y,a({text:_,lang:p,style:x,weight:M,fonts:typeof g=="string"?[{src:g}]:g,unicodeFontsURL:I,preResolvedFonts:W},N=>{Z.fontLoad=h()-V;const k=isFinite(T);let ne=null,J=null,ee=null,xe=null,pe=null,ge=null,ue=null,Ie=null,O=0,ze=0,Ce=C!=="nowrap";const Fe=new Map,le=h();let Ee=y,de=0,te=new f;const Ue=[te];N.forEach($=>{const{fontObj:Q}=$,{ascender:ye,descender:_e,unitsPerEm:Me,lineGap:we,capHeight:oe,xHeight:me}=Q;let ve=Fe.get(Q);if(!ve){const fe=S/Me,ce=A==="normal"?(ye-_e+we)*fe:A*S,Le=(ce-(ye-_e)*fe)/2,he=Math.min(ce,(ye-_e)*fe),se=(ye+_e)/2*fe+he/2;ve={index:Fe.size,src:Q.src,fontObj:Q,fontSizeMult:fe,unitsPerEm:Me,ascender:ye*fe,descender:_e*fe,capHeight:oe*fe,xHeight:me*fe,lineHeight:ce,baseline:-Le-ye*fe,caretTop:se,caretBottom:se-he},Fe.set(Q,ve)}const{fontSizeMult:Ae}=ve,Se=_.slice($.start,$.end+1);let Ge,z;Q.forEachGlyph(Se,S,E,(fe,ce,Le,he)=>{ce+=de,he+=$.start,Ge=ce,z=fe;const se=_.charAt(he),Re=fe.advanceWidth*Ae,Ne=te.count;let Be;if("isEmpty"in fe||(fe.isWhitespace=!!se&&new RegExp(i).test(se),fe.canBreakAfter=!!se&&r.test(se),fe.isEmpty=fe.xMin===fe.xMax||fe.yMin===fe.yMax||n.test(se)),!fe.isWhitespace&&!fe.isEmpty&&ze++,Ce&&k&&!fe.isWhitespace&&ce+Re+Ee>T&&Ne){if(te.glyphAt(Ne-1).glyphObj.canBreakAfter)Be=new f,Ee=-ce;else for(let st=Ne;st--;)if(st===0&&R==="break-word"){Be=new f,Ee=-ce;break}else if(te.glyphAt(st).glyphObj.canBreakAfter){Be=te.splitAt(st+1);const lt=Be.glyphAt(0).x;Ee-=lt;for(let _t=Be.count;_t--;)Be.glyphAt(_t).x-=lt;break}Be&&(te.isSoftWrapped=!0,te=Be,Ue.push(te),O=T)}let We=te.glyphAt(te.count);We.glyphObj=fe,We.x=ce+Ee,We.y=Le,We.width=Re,We.charIndex=he,We.fontData=ve,se===`
`&&(te=new f,Ue.push(te),Ee=-(ce+Re+E*S)+y)}),de=Ge+z.advanceWidth*Ae+E*S});let D=0;Ue.forEach($=>{let Q=!0;for(let ye=$.count;ye--;){const _e=$.glyphAt(ye);Q&&!_e.glyphObj.isWhitespace&&($.width=_e.x+_e.width,$.width>O&&(O=$.width),Q=!1);let{lineHeight:Me,capHeight:we,xHeight:oe,baseline:me}=_e.fontData;Me>$.lineHeight&&($.lineHeight=Me);const ve=me-$.baseline;ve<0&&($.baseline+=ve,$.cap+=ve,$.ex+=ve),$.cap=Math.max($.cap,$.baseline+we),$.ex=Math.max($.ex,$.baseline+oe)}$.baseline-=D,$.cap-=D,$.ex-=D,D+=$.lineHeight});let w=0,G=0;if(U&&(typeof U=="number"?w=-U:typeof U=="string"&&(w=-O*(U==="left"?0:U==="center"?.5:U==="right"?1:c(U)))),L&&(typeof L=="number"?G=-L:typeof L=="string"&&(G=L==="top"?0:L==="top-baseline"?-Ue[0].baseline:L==="top-cap"?-Ue[0].cap:L==="top-ex"?-Ue[0].ex:L==="middle"?D/2:L==="bottom"?D:L==="bottom-baseline"?-Ue[Ue.length-1].baseline:c(L)*D)),!B){const $=e.getEmbeddingLevels(_,b);ne=new Uint16Array(ze),J=new Uint8Array(ze),ee=new Float32Array(ze*2),xe={},ue=[1/0,1/0,-1/0,-1/0],Ie=[],H&&(ge=new Float32Array(_.length*4)),X&&(pe=new Uint8Array(ze*3));let Q=0,ye=-1,_e=-1,Me,we;if(Ue.forEach((oe,me)=>{let{count:ve,width:Ae}=oe;if(ve>0){let Se=0;for(let he=ve;he--&&oe.glyphAt(he).glyphObj.isWhitespace;)Se++;let Ge=0,z=0;if(v==="center")Ge=(O-Ae)/2;else if(v==="right")Ge=O-Ae;else if(v==="justify"&&oe.isSoftWrapped){let he=0;for(let se=ve-Se;se--;)oe.glyphAt(se).glyphObj.isWhitespace&&he++;z=(O-Ae)/he}if(z||Ge){let he=0;for(let se=0;se<ve;se++){let Re=oe.glyphAt(se);const Ne=Re.glyphObj;Re.x+=Ge+he,z!==0&&Ne.isWhitespace&&se<ve-Se&&(he+=z,Re.width+=z)}}const fe=e.getReorderSegments(_,$,oe.glyphAt(0).charIndex,oe.glyphAt(oe.count-1).charIndex);for(let he=0;he<fe.length;he++){const[se,Re]=fe[he];let Ne=1/0,Be=-1/0;for(let We=0;We<ve;We++)if(oe.glyphAt(We).charIndex>=se){let st=We,lt=We;for(;lt<ve;lt++){let _t=oe.glyphAt(lt);if(_t.charIndex>Re)break;lt<ve-Se&&(Ne=Math.min(Ne,_t.x),Be=Math.max(Be,_t.x+_t.width))}for(let _t=st;_t<lt;_t++){const tn=oe.glyphAt(_t);tn.x=Be-(tn.x+tn.width-Ne)}break}}let ce;const Le=he=>ce=he;for(let he=0;he<ve;he++){const se=oe.glyphAt(he);ce=se.glyphObj;const Re=ce.index,Ne=$.levels[se.charIndex]&1;if(Ne){const Be=e.getMirroredCharacter(_[se.charIndex]);Be&&se.fontData.fontObj.forEachGlyph(Be,0,0,Le)}if(H){const{charIndex:Be,fontData:We}=se,st=se.x+w,lt=se.x+se.width+w;ge[Be*4]=Ne?lt:st,ge[Be*4+1]=Ne?st:lt,ge[Be*4+2]=oe.baseline+We.caretBottom+G,ge[Be*4+3]=oe.baseline+We.caretTop+G;const _t=Be-ye;_t>1&&u(ge,ye,_t),ye=Be}if(X){const{charIndex:Be}=se;for(;Be>_e;)_e++,X.hasOwnProperty(_e)&&(we=X[_e])}if(!ce.isWhitespace&&!ce.isEmpty){const Be=Q++,{fontSizeMult:We,src:st,index:lt}=se.fontData,_t=xe[st]||(xe[st]={});_t[Re]||(_t[Re]={path:ce.path,pathBounds:[ce.xMin,ce.yMin,ce.xMax,ce.yMax]});const tn=se.x+w,Vt=se.y+oe.baseline+G;ee[Be*2]=tn,ee[Be*2+1]=Vt;const pn=tn+ce.xMin*We,kn=Vt+ce.yMin*We,Kn=tn+ce.xMax*We,nn=Vt+ce.yMax*We;pn<ue[0]&&(ue[0]=pn),kn<ue[1]&&(ue[1]=kn),Kn>ue[2]&&(ue[2]=Kn),nn>ue[3]&&(ue[3]=nn),Be%Y===0&&(Me={start:Be,end:Be,rect:[1/0,1/0,-1/0,-1/0]},Ie.push(Me)),Me.end++;const Pt=Me.rect;if(pn<Pt[0]&&(Pt[0]=pn),kn<Pt[1]&&(Pt[1]=kn),Kn>Pt[2]&&(Pt[2]=Kn),nn>Pt[3]&&(Pt[3]=nn),ne[Be]=Re,J[Be]=lt,X){const wn=Be*3;pe[wn]=we>>16&255,pe[wn+1]=we>>8&255,pe[wn+2]=we&255}}}}}),ge){const oe=_.length-ye;oe>1&&u(ge,ye,oe)}}const ae=[];Fe.forEach(({index:$,src:Q,unitsPerEm:ye,ascender:_e,descender:Me,lineHeight:we,capHeight:oe,xHeight:me})=>{ae[$]={src:Q,unitsPerEm:ye,ascender:_e,descender:Me,lineHeight:we,capHeight:oe,xHeight:me}}),Z.typesetting=h()-le,F({glyphIds:ne,glyphFontIndices:J,glyphPositions:ee,glyphData:xe,fontData:ae,caretPositions:ge,glyphColors:pe,chunkedBounds:Ie,fontSize:S,topBaseline:G+Ue[0].baseline,blockBounds:[w,G-D,w+O,G],visibleBounds:ue,timings:Z})})}function l(_,g){o({..._,metricsOnly:!0},p=>{const[m,S,M,x]=p.blockBounds;g({width:M-m,height:x-S})})}function c(_){let g=_.match(/^([\d.]+)%$/),p=g?parseFloat(g[1]):NaN;return isNaN(p)?0:p/100}function u(_,g,p){const m=_[g*4],S=_[g*4+1],M=_[g*4+2],x=_[g*4+3],E=(S-m)/p;for(let A=0;A<p;A++){const T=(g+A)*4;_[T]=m+E*A,_[T+1]=m+E*(A+1),_[T+2]=M,_[T+3]=x}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(_){let g=f.flyweight;return g.data=this.data,g.index=_,g},splitAt(_){let g=new f;return g.data=this.data.splice(_*d.length),g}},f.flyweight=d.reduce((_,g,p,m)=>(Object.defineProperty(_,g,{get(){return this.data[this.index*d.length+p]},set(S){this.data[this.index*d.length+p]=S}}),_),{data:null,index:0}),{typeset:o,measure:l}}const xr=()=>(self.performance||Date).now(),sl=Rm();let Rd;function EM(s,e,t,n,i,r,a,o,l,c,u=!0){return u?AM(s,e,t,n,i,r,a,o,l,c).then(null,h=>(Rd||(console.warn("WebGL SDF generation failed, falling back to JS",h),Rd=!0),Pd(s,e,t,n,i,r,a,o,l,c))):Pd(s,e,t,n,i,r,a,o,l,c)}const Io=[],wM=5;let Cu=0;function Pm(){const s=xr();for(;Io.length&&xr()-s<wM;)Io.shift()();Cu=Io.length?setTimeout(Pm,0):0}const AM=(...s)=>new Promise((e,t)=>{Io.push(()=>{const n=xr();try{sl.webgl.generateIntoCanvas(...s),e({timing:xr()-n})}catch(i){t(i)}}),Cu||(Cu=setTimeout(Pm,0))}),RM=4,CM=2e3,Cd={};let PM=0;function Pd(s,e,t,n,i,r,a,o,l,c){const u="TroikaTextSDFGenerator_JS_"+PM++%RM;let h=Cd[u];return h||(h=Cd[u]={workerModule:Ms({name:u,workerId:u,dependencies:[Rm,xr],init(f,d){const _=f().javascript.generate;return function(...g){const p=d();return{textureData:_(...g),timing:d()-p}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(s,e,t,n,i,r).then(({textureData:f,timing:d})=>{const _=xr(),g=new Uint8Array(f.length*4);for(let p=0;p<f.length;p++)g[p*4+c]=f[p];return sl.webglUtils.renderImageData(a,g,o,l,s,e,1<<3-c),d+=xr()-_,--h.requests===0&&(h.idleTimer=setTimeout(()=>{oM(u)},CM)),{timing:d}})}function DM(s){s._warm||(sl.webgl.isSupported(s),s._warm=!0)}const UM=sl.webglUtils.resizeWebGLCanvasWithoutClearing,js={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},LM=new Je;function jr(){return(self.performance||Date).now()}const Dd=Object.create(null);function IM(s,e){s=NM({},s);const t=jr(),n=[];if(s.font&&n.push({label:"user",src:OM(s.font)}),s.font=n,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||js.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||js.unicodeFontsURL,s.colorRanges!=null){let f={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let _=s.colorRanges[d];typeof _!="number"&&(_=LM.set(_).getHex()),f[d]=_}s.colorRanges=f}Object.freeze(s);const{textureWidth:i,sdfExponent:r}=js,{sdfGlyphSize:a}=s,o=i/a*4;let l=Dd[a];if(!l){const f=document.createElement("canvas");f.width=i,f.height=a*256/o,l=Dd[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:f,sdfTexture:new zt(f,void 0,void 0,void 0,It,It),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,FM(l)}const{sdfTexture:c,sdfCanvas:u}=l;Lm(s).then(f=>{const{glyphIds:d,glyphFontIndices:_,fontData:g,glyphPositions:p,fontSize:m,timings:S}=f,M=[],x=new Float32Array(d.length*4);let E=0,A=0;const T=jr(),b=g.map(U=>{let L=l.glyphsByFont.get(U.src);return L||l.glyphsByFont.set(U.src,L=new Map),L});d.forEach((U,L)=>{const B=_[L],{src:I,unitsPerEm:W}=g[B];let H=b[B].get(U);if(!H){const{path:Z,pathBounds:N}=f.glyphData[I][U],k=Math.max(N[2]-N[0],N[3]-N[1])/a*(js.sdfMargin*a+.5),ne=l.glyphCount++,J=[N[0]-k,N[1]-k,N[2]+k,N[3]+k];b[B].set(U,H={path:Z,atlasIndex:ne,sdfViewBox:J}),M.push(H)}const{sdfViewBox:Y}=H,X=p[A++],F=p[A++],V=m/W;x[E++]=X+Y[0]*V,x[E++]=F+Y[1]*V,x[E++]=X+Y[2]*V,x[E++]=F+Y[3]*V,d[L]=H.atlasIndex}),S.quads=(S.quads||0)+(jr()-T);const v=jr();S.sdf={};const y=u.height,C=Math.ceil(l.glyphCount/o),R=Math.pow(2,Math.ceil(Math.log2(C*a)));R>y&&(console.info(`Increasing SDF texture size ${y}->${R}`),UM(u,i,R),c.dispose()),Promise.all(M.map(U=>Dm(U,l,s.gpuAccelerateSDF).then(({timing:L})=>{S.sdf[U.atlasIndex]=L}))).then(()=>{M.length&&!l.contextLost&&(Um(l),c.needsUpdate=!0),S.sdfTotal=jr()-v,S.total=jr()-t,e(Object.freeze({parameters:s,sdfTexture:c,sdfGlyphSize:a,sdfExponent:r,glyphBounds:x,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||DM(u)})}function Dm({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:i,contextLost:r},a){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=js,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/n)*n,f=Math.floor(u/(o/n))*n,d=e%4;return EM(n,n,s,t,c,l,i,h,f,d,a)}function FM(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const n=[];s.glyphsByFont.forEach(i=>{i.forEach(r=>{n.push(Dm(r,s,!0))})}),Promise.all(n).then(()=>{Um(s),s.sdfTexture.needsUpdate=!0})})}function NM(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let yo;function OM(s){return yo||(yo=typeof document>"u"?{}:document.createElement("a")),yo.href=s,yo.href}function Um(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:n,height:i}=e,r=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==n*i*4)&&(a=new Uint8Array(n*i*4),t.image={width:n,height:i,data:a},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,n,i,r.RGBA,r.UNSIGNED_BYTE,a)}}const BM=Ms({name:"Typesetter",dependencies:[bM,TM,cM],init(s,e,t){return s(e,t())}}),Lm=Ms({name:"Typesetter",dependencies:[BM],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}});Lm.onMainThread;const Ud={};function kM(s){let e=Ud[s];return e||(e=Ud[s]=new Qi(1,1,s,s).translate(.5,.5,0)),e}const zM="aTroikaGlyphBounds",Ld="aTroikaGlyphIndex",GM="aTroikaGlyphColor";class VM extends R_{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new _a,this.boundingBox=new br}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=kM(e);["position","normal","uv"].forEach(n=>{this.attributes[n]=t.attributes[n].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,n,i,r){this.updateAttributeData(zM,e,4),this.updateAttributeData(Ld,t,1),this.updateAttributeData(GM,r,3),this._blockBounds=n,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:n}=this;if(t){const{PI:i,floor:r,min:a,max:o,sin:l,cos:c}=Math,u=i/2,h=i*2,f=Math.abs(t),d=e[0]/f,_=e[2]/f,g=r((d+u)/h)!==r((_+u)/h)?-f:a(l(d)*f,l(_)*f),p=r((d-u)/h)!==r((_-u)/h)?f:o(l(d)*f,l(_)*f),m=r((d+i)/h)!==r((_+i)/h)?f*2:o(f-c(d)*f,f-c(_)*f);n.min.set(g,e[1],t<0?-m:0),n.max.set(p,e[3],t<0?0:m)}else n.min.set(e[0],e[1],0),n.max.set(e[2],e[3],0);n.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Ld).count,n=this._chunkedBounds;if(n)for(let i=n.length;i--;){t=n[i].end;let r=n[i].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,n){const i=this.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(this.setAttribute(e,new p_(t,n)),delete this._maxInstanceCount,this.dispose()):i&&this.deleteAttribute(e)}}const HM=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,WM=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,XM=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,qM=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function YM(s){const e=Ru(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ye},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new mt(0,0,0,0)},uTroikaClipRect:{value:new mt(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ye},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Je},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ke},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:HM,vertexTransform:WM,fragmentDefs:XM,fragmentColorTransform:qM,customRewriter({vertexShader:t,fragmentShader:n}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(n)&&(n=n.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(Cm,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const fh=new Mr({color:16777215,side:xn,transparent:!0}),Id=8421504,Fd=new St,So=new ie,Mc=new ie,Xs=[],JM=new ie,Tc="+x+y";function Nd(s){return Array.isArray(s)?s[0]:s}let Im=()=>{const s=new $t(new Qi(1,1),fh);return Im=()=>s,s},Fm=()=>{const s=new $t(new Qi(1,1,32,1),fh);return Fm=()=>s,s};const jM={type:"syncstart"},KM={type:"synccomplete"},Nm=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],ZM=Nm.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Om extends $t{constructor(){const e=new VM;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Id,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Tc,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(jM),IM({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const n=this._queuedSyncs;n&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{n.forEach(i=>i&&i())})),this.dispatchEvent(KM),e&&e()})))}onBeforeRender(e,t,n,i,r,a){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return YM(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=fh.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),this.hasOutline()){let n=e._outlineMtl;return n||(n=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),n.isTextOutlineMaterial=!0,n.depthWrite=!1,n.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),n.dispose()})),[n,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Nd(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return Nd(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,n=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:o,blockBounds:l}=i;n.uTroikaSDFTexture.value=o,n.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),n.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,n.uTroikaSDFExponent.value=i.sdfExponent,n.uTroikaTotalBounds.value.fromArray(l),n.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let c=0,u=0,h=0,f,d,_,g=0,p=0;if(t){let{outlineWidth:S,outlineOffsetX:M,outlineOffsetY:x,outlineBlur:E,outlineOpacity:A}=this;c=this._parsePercent(S)||0,u=Math.max(0,this._parsePercent(E)||0),f=A,g=this._parsePercent(M)||0,p=this._parsePercent(x)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(_=this.strokeColor,n.uTroikaStrokeColor.value.set(_??Id),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;n.uTroikaEdgeOffset.value=c,n.uTroikaPositionOffset.value.set(g,p),n.uTroikaBlurRadius.value=u,n.uTroikaStrokeWidth.value=h,n.uTroikaStrokeOpacity.value=d,n.uTroikaFillOpacity.value=f??1,n.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)n.uTroikaClipRect.value.fromArray(m);else{const S=(this.fontSize||.1)*100;n.uTroikaClipRect.value.set(l[0]-S,l[1]-S,l[2]+S,l[3]+S)}this.geometry.applyClipRect(n.uTroikaClipRect.value)}n.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Je;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let a=this.orientation||Tc;if(a!==e._orientation){let o=n.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==Tc&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;So.set(0,0,0)[u]=c==="-"?1:-1,Mc.set(0,0,0)[f]=h==="-"?-1:1,Fd.lookAt(JM,So.cross(Mc),Mc),o.setFromMatrix4(Fd)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),n=t?parseFloat(t[1]):NaN;e=(isNaN(n)?0:n/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ye){t.copy(e);const n=this.curveRadius;return n&&(t.x=Math.atan2(e.x,Math.abs(n)-Math.abs(e.z))*Math.abs(n)),t}worldPositionToTextCoords(e,t=new Ye){return So.copy(e),this.localPositionToTextCoords(this.worldToLocal(So),t)}raycast(e,t){const{textRenderInfo:n,curveRadius:i}=this;if(n){const r=n.blockBounds,a=i?Fm():Im(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let h=r[0]+c.getX(u)*(r[2]-r[0]);const f=r[1]+c.getY(u)*(r[3]-r[1]);let d=0;i&&(d=i-Math.cos(h/i)*i,h=Math.sin(h/i)*i),l.setXYZ(u,h,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,Xs.length=0,a.raycast(e,Xs);for(let u=0;u<Xs.length;u++)Xs[u].object=this,t.push(Xs[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,ZM.forEach(n=>{this[n]=e[n]}),this}clone(){return new this.constructor().copy(this)}}Nm.forEach(s=>{const e="_private_"+s;Object.defineProperty(Om.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new br;new Je;const wi=new f_;wi.background=new Je(7352986);const rs=new Un(45,window.innerWidth/window.innerHeight,.1,100);rs.position.set(0,2,35);const QM=document.querySelector(".canvas"),Ts=new fy({antialias:!0,canvas:QM,alpha:!0});Ts.setClearColor(0,0);Ts.setSize(window.innerWidth,window.innerHeight);Ts.outputEncoding=void 0;Ts.setPixelRatio(window.devicePixelRatio);new dy().load("HDRI/hdri1.hdr",s=>{s.mapping=No,wi.environment=s});const $M=new A_(16777215,5);wi.add($M);const Od=8.5,Bm=5,eT=new Gu(Od,Od,Bm,600,1,!0),km=new hp({side:xn,flatShading:!1,metalness:.5,roughness:.1}),dh=new $t(eT,km);dh.position.y=Bm/2-1;wi.add(dh);const tT=new Mr({color:16777215,side:xn});function nT(s,e){const t=new Om;return t.text=s,t.font="fonts/Anton.ttf",t.anchorX="center",t.anchorY="middle",t.textAlign="start",t.material=tT,t.letterSpacing=-.01,t.fontSize=window.innerWidth/e,t.glyphGeometryDetail=20,t.rotation.set(0,Math.PI/2*1.27,0),t.position.set(10,2,10),t}const ya=nT(`Creative Developer  
from INDIA . Expert 
in ThreeJS & WEBGL.`,1400);ya.lineHeight=1.1;ya.scale.y=0;ya.sync();wi.add(ya);const ph=new $t(new Qi(50,50),new hp({color:5308787,metalness:.1,roughness:.9}));ph.rotation.x=-Math.PI/2;ph.position.y=-1;wi.add(ph);const bs=new vy(Ts);bs.addPass(new xy(wi,rs));const Ki=new gi({renderer:Ts,scene:wi,camera:rs,width:window.innerWidth,height:window.innerHeight});Ki.opacity=.4,Ki.enableBlur=!0;Ki.blurKernelSize=30;Ki.blurSharpness=15;Ki.maxDistance=3;Ki.thickness=.3;Ki.enableDistanceAttenuation=!0;bs.addPass(Ki);const iT=new hs(new Ye(window.innerWidth,window.innerHeight),.3,.4,.85);bs.addPass(iT);const vs=document.getElementById("videoCanvas"),Bd=vs.getContext("2d"),mh=[document.getElementById("v1"),document.getElementById("v2"),document.getElementById("v3"),document.getElementById("v4")],Pu=512,zm=512;vs.width=Pu*mh.length;vs.height=zm;const Zi=new x_(vs);Zi.wrapS=Oo;Zi.wrapT=ni;Zi.minFilter=It;Zi.repeat.set(1,1);Zi.center.set(0,0);Zi.needsUpdate=!0;function Gm(){Bd.clearRect(0,0,vs.width,vs.height),mh.forEach((s,e)=>{Bd.drawImage(s,e*Pu,0,Pu,zm)}),Zi.needsUpdate=!0,km.map=Zi,requestAnimationFrame(Gm)}Gm();window.onload=()=>{mh.forEach((s,e)=>{s.muted=!0,s.loop=!0,s.play().catch(t=>console.warn(`Video ${e} error:`,t))})};ri.to("nav",{y:-100});const Vm=new QS,Sa=new wm;Sa.position.set(-5,0,50);const Ma=new Tm;Ma.add(new be(-5,0,50));Ma.add(new be(2,1,25));Ma.add(new be(21,2.5,-4));Ma.loop=!1;Sa.setRenderComponent(rs,(s,e)=>{e.position.copy(s.position),s.position.z<=15&&(ri.to(rs.rotation,{y:Math.PI/2*(15-rs.position.z)/15,duration:1}),ri.to(ya.scale,{y:1.3,delay:1,duration:1}),ri.to("nav",{delay:5,y:0,opacity:1,duration:1}))});const rT=new bm(Ma,15);Sa.steering.add(rT);Sa.maxSpeed=40;Vm.add(Sa);const sT={vertexShader:eM,fragmentShader:$S,uniforms:{tDiffuse:{value:null},uMouse:{value:new Ye(.5,.5)},uMouseDirection:{value:new Ye(0,0)},uTime:{value:0}}},Ko=new Sp(sT);bs.addPass(Ko);bs.setSize(window.innerWidth,window.innerHeight);const bc=new nM.Noise(Math.random()),al=70,Fo=new Float32Array(al*3),Hm=new Float32Array(al);for(let s=0;s<al;s++)Fo[s*3+0]=(Math.random()-.5)*40.5,Fo[s*3+1]=(Math.random()-.1)*20.5,Fo[s*3+2]=(Math.random()-.5)*40.5,Hm[s]=2.25+Math.random()*10.2;const ss=new Bn;ss.setAttribute("position",new Mn(Fo,3));ss.setAttribute("speed",new Mn(Hm,1));const aT=new wt({transparent:!0,side:xn,depthWrite:!1,uniforms:{size:{value:4},scale:{value:4},color:{value:new Je(16777215)}},vertexShader:qn.points.vertexShader,fragmentShader:`
    uniform vec3 color;
    void main() {
      vec2 xy = gl_PointCoord.xy - vec2(0.5);
      float ll = length(xy);
      float r = step(length(xy + vec2(0.01, 0.0)), 0.5);
      float g = step(ll, 0.5);
      float b = step(length(xy - vec2(0.01, 0.0)), 0.5);
      gl_FragColor = vec4(r, g, b, 1.0)*0.6 ;
    }
  `}),oT=new v_(ss,aT);wi.add(oT);function lT(){const s=Xm.getElapsedTime(),e=ss.attributes.position.array,t=ss.attributes.speed.array;for(let n=0;n<al;n++){const i=n*3,r=bc.simplex3(e[i]*.5,e[i+1]*.5,s*.2),a=bc.simplex3(e[i+1]*.5,e[i+2]*.5,s*.2),o=bc.simplex3(e[i+2]*.5,e[i]*.5,s*.2);e[i+0]+=r*.01*t[n],e[i+1]+=a*.01*t[n],e[i+2]+=o*.01*t[n]}ss.attributes.position.needsUpdate=!0}let Wm=0;const Xm=new mp,qm=()=>{requestAnimationFrame(qm),dh.rotation.y+=.001,Ko.uniforms.uTime.value=performance.now()/1e3;const s=Xm.getDelta();Vm.update(s*Wm),lT(),bs.render()};qm();let Mo={x:.5,y:.5},To={x:.5,y:.5};window.addEventListener("mousemove",s=>{let e=s.x/window.innerWidth,t=1-s.y/window.innerHeight;To.x=e,To.y=t,ri.to(Ko.uniforms.uMouseDirection.value,{x:-Math.sign(To.x-Mo.x),y:-Math.sign(To.y-Mo.y)}),Mo.x=e,Mo.y=t,ri.to(Ko.uniforms.uMouse.value,{x:e,y:t,duration:.5,ease:"power2.out"})});function cT(){const s=document.getElementById("sound");s.volume=.1,s.currentTime=0,s.play()}document.querySelectorAll(".hero .NavButton").forEach(s=>{s.addEventListener("mouseenter",()=>{ri.to(s,{backgroundColor:"#FFFFFF",color:"black",duration:.7})}),s.addEventListener("mouseleave",()=>{ri.to(s,{backgroundColor:"transparent",color:"white",duration:.7})})});document.querySelectorAll("#playSound").forEach(s=>{s.addEventListener("mouseenter",()=>{cT()})});let uT=ri.timeline();uT.to(".loadingPage .loader",{height:"40vh",duration:2,ease:"power2.in"}).to(".loadingPage",{opacity:0,duration:.5,ease:"power2.in",onComplete:()=>{document.querySelector(".loadingPage").style.display="none",Wm=1}});
