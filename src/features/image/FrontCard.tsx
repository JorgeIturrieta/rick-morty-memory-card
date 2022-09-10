const FrontCard = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      version='1.0'
      width='400'
      height='400'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 400 400'
      {...props}
    >
      <path
        d='m98 2-2 11c0 9-3 17-7 25l-3 6-9-4-24-8c-8-2-10-1-6 5l3 5 1 3 3 7 2 9c3 6 3 9 0 9l-16 2-29 2-5 1c-1 1 3 6 9 12 11 10 19 22 19 25l-19 14-5 3-5 4c-5 3-6 4-5 5l5 2c7 1 15 4 21 7 2 1 10 8 12 12l2 2-7 5c-7 6-17 16-17 18l4 2 6 2 14 5 6 2-5 20-1 5h25l1 3 2 7c0 6 0 7 3 7s9-3 9-4-1-5-4-7l-8-19-2-3-1-4c-2-3-4-9-4-16l-2-8v-12c1-3 1-2 2 6 2 13 6 26 10 39 0 2 6 14 10 19 5 6 11 10 18 12l10 6v5l-3 2-6 3-16 4-19 6c-4 1-8 4-9 8l-4 17-3 8-12 35c13 14 29 26 46 36 2 2 8 1 19-2 7-2 9-2 19-2l16 2c10 1 17 4 20 5l6 3c4 1 18 16 18 19 0 2 4 5 6 5l3-30 2-2 16-1 17 1 12 12c18 18 16 17 21 17l9-2c11-3 10-1 10-13l1-11c1-3 4-4 20-4s19 1 19 4l1 5c1 1 1 1 2-1 1-3 5-9 8-11l12 1c2 1 2 1 8-3l6-5 1-1 7-3 4-4c2 0 1-6-2-11l-2-6-4-6-3-5 7-8c4-2 9-7 12-10 6-7 9-11 15-13 7-3 11-10 11-16 0-3-2-8-4-10s-2-2-1-5l1-6 1-6v-19l-1-13c0-9 0-9-6-21-8-14-18-27-31-37l-18-7c-11-5-17-7-32-7-12-1-25 0-37 4l-14 5c-10 4-19 12-29 24-16 16-18 21-19 32l-5 17-3 12c0 3 6 17 9 20 2 1 1 6-1 9-5 4-6 10-2 17 3 5 6 8 12 8 3 0 4 0 3-3l-2-5v-3c1-1 1-1 2 1l2 3 2 5c2 4 10 15 15 19a115 115 0 0 0 42 19l6 2 10 1h8c0 2-10 2-16 0h-10l-6-1-7-3-9-2c-3-2-3-2-6-1l-8 14-8 20c-1 3-3 5-8 5-3 0-4 0-5-3l-2-6-2-6-3-9-6-21-1-4-2-9-5-17-3-8c-4-12-5-13-15-14l-23-7-6-1c-5 0-7-3-7-8 1-4 1-4 7-6 6-3 8-5 13-10l11-7 7-3h4c3 0 2-2-3-8-6-8-5-9 4-10l9-3c2 0 1-2-1-7-3-9-3-10-2-11s3-3 5-3c9-2 19-7 20-9 0-2-1-3-12-8l-13-9c-1-2 0-3 5-4 14-5 27-11 39-18 1-2 0-2-5-5l-12-3-15-8 24-23 6-6-15-3-26-5 12-21 3-4 3-4 2-4c4-5 4-6 1-7l-4 1-4 2-3 1-4 1-8 3c-14 5-14 5-15 4-3-2-6-26-6-38V4c-2-1-3-1-7 2-13 6-20 11-29 20-6 6-9 8-10 7l-9-10c-9-11-21-23-23-23l-1 2Zm7 106c4 1 10 5 11 8 3 5 5 11 3 17-1 5-3 5-9 4-5-2-22-2-28 0-6 1-8 0-8-6-2-10 2-18 14-23 3-2 13-3 17 0Zm58 9c7 3 11 4 13 7 2 2 2 2 2 7 0 7-1 7-11 5l-26-3h-8l-1-6c0-6 3-10 7-11 5-1 21 0 24 1Zm130 106c8 9 8 20 1 31-1 3-10 10-13 10l-3 2h-11c-8 0-8 0-14-2-7-4-12-8-14-14-3-5-4-12-2-14l8-1c10 0 27-3 34-7 3-1 7-5 7-7 0-4 3-3 7 2Zm32-1c2 3 3 5 7 6 6 4 21 6 33 7l9 1c2 0 1 8-1 12-2 5-9 12-14 14l-10 3h-11c-10-2-15-5-20-12-6-7-7-15-4-24 1-4 6-10 7-10l4 3Zm-159 48 5 9 14 25 3 5 1 4 2 4v10l-8 8-9 9 3 5 4 4 1 1 3 2 5 3 1 1c0 2-3 1-5 0l-7-6-9-9 9-11c10-8 10-8 10-12l-1-5-3-5c-7-17-15-33-24-48l5 6Zm152 111-1 7c0 6 1 8 4 8 1 0 4-2 5-6 0-1 0-2-3-5l-3-4h-2Z'
        fill={props.fill}
      />
    </svg>
  )
}

export default FrontCard
