/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',  // Just-in-Time 모드 (JIT 모드 활성화)
  content: ["./src/**/*.{html,js}"], // Tailwind가 스타일을 적용할 파일 경로
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {// 기본 테마를 확장하거나 덮어쓰기 위해 사용하는 섹션
      colors: {
        'black' : '#171717',
        'gray' : '#F8FAFC',
        'beige' : '#E6DACE',
        'light-beige' : '#F4ECE6'
      },
    },
  },
  variants: {
    extend: {
      textColor: ['hover'],
    },  // 다양한 상태에 따른 스타일 확장 (hover, active 등)

  },
  plugins: ['@tailwindcss/forms',
  ] // 플러그인 추가하는 곳 (예: Tailwind Forms 등)
}