import React from "@wordpress/element";

export function Default() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 318 80"
      style={{ margin: "0.5em" }}
    >
      <path fill="#CA1237" d="M0 0h239.94v47H0z" />
      <path fill="#4D4D4D" d="M0 64h318v16H0z" />
    </svg>
  );
}

export function CircleTop() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 331 257"
      style={{ margin: "0.5em" }}
    >
      <mask
        id="a"
        width={118}
        height={115}
        x={172}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path
          fill="#000"
          stroke="#000"
          d="M242.19 112.963c-64.4 8-73-45.334-68-72.5l37.5-38c26.666-5.167 79.4.5 77 64.5l-46.5 46Z"
        />
      </mask>
      <g stroke="#A60F2D" strokeWidth={2} mask="url(#a)">
        <path d="m186.482 98.256 83-83M224.482 128.256l83-83M211.482 118.256l83-83M200.482 106.256l83-83M174.482 87.256l83-83M161.482 77.256l83-83M149.482 67.256l83-83" />
      </g>
      <circle cx={161} cy={142} r={115} fill="#D9D9D9" />
      <path fill="#4D4D4D" d="M117 195h201v18H117zM117 223h148v18H117z" />
      <path fill="#CA1237" d="M0 67h331v64H0z" />
      <circle cx={75.5} cy={211.5} r={20.5} fill="#C4C4C4" />
      <path
        fill="#fff"
        d="m76 199 2.919 8.983h9.445l-7.642 5.551 2.92 8.983L76 216.966l-7.641 5.551 2.919-8.983-7.642-5.551h9.445L76 199Z"
      />
      <path fill="#C4C4C4" d="M27 165h188v14H27z" />
    </svg>
  );
}

export function CircleUnit() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 322 250"
      style={{ margin: "0.5em" }}
    >
      <mask
        id="a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={176}
        y={3}
        width={146}
        height={142}
      >
        <path
          d="M263.062 143.266c-80.104 9.951-90.802-56.388-84.582-90.18L225.124 5.82c33.17-6.427 98.763.622 95.777 80.228l-57.839 57.218Z"
          fill="#000"
          stroke="#000"
        />
      </mask>
      <g mask="url(#a)" stroke="#A60F2D" strokeWidth={2}>
        <path d="m193.943 125.145 103.24-103.24M241.209 162.46l74-74m-90.17 61.561 103.24-103.24m-116.922 88.314 103.24-103.24m-135.581 79.606L282.257 8.222M162.846 99.024l103.24-103.24M147.92 86.585l103.24-103.24" />
      </g>
      <circle cx={177} cy={130} r={115} fill="#D9D9D9" />
      <path fill="#CA1237" d="M16 55h189v64H16zm16 93h80v18H32z" />
      <circle cx={132.5} cy={20.5} r={20.5} fill="#C4C4C4" />
      <path
        d="m133 8 2.919 8.983h9.445l-7.641 5.551 2.918 8.983L133 25.966l-7.641 5.551 2.918-8.983-7.641-5.551h9.445L133 8Z"
        fill="#fff"
      />
      <path fill="#C4C4C4" d="M0 187h135v14H0z" />
      <path
        fill="#4D4D4D"
        d="M159 148h115v18H159zm0 28h102v18H159zm0 28h111v18H159zm0 28h91v18h-91z"
      />
    </svg>
  );
}

export function CircleBottom() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 311 230"
      style={{ margin: "0.5em" }}
    >
      <circle cx={152} cy={115} r={115} fill="#D9D9D9" />
      <path fill="#4D4D4D" d="M102 29h201v18H102zm0 28h148v18H102z" />
      <path fill="#CA1237" d="M138 139h173v64H138z" />
      <circle cx={47.5} cy={70.5} r={20.5} fill="#C4C4C4" />
      <path
        d="m48 58 2.919 8.983h9.445l-7.641 5.551 2.918 8.983L48 75.966l-7.641 5.551 2.919-8.983-7.642-5.551h9.445L48 58Z"
        fill="#fff"
      />
      <path fill="#C4C4C4" d="M128 100h161v14H128z" />
      <mask
        id="a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={109}
        width={118}
        height={115}
      >
        <path
          d="M70.19 221.963c-64.4 8-73-45.333-68-72.5l37.5-38c26.666-5.167 79.4.5 77 64.5l-46.5 46Z"
          fill="#000"
          stroke="#000"
        />
      </mask>
      <g mask="url(#a)" stroke="#A60F2D" strokeWidth={2}>
        <path d="m16.293 206.293 83-83m-45 113 83-83m-96 73 83-83m-94 71 83-83m-109 64 83-83m-96 73 83-83m-95 73 83-83" />
      </g>
    </svg>
  );
}
