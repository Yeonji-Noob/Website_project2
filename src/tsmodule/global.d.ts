/* './sass/_main.scss' 모듈 또는 해당 형식 선언을 찾을 수 없습니다.ts(2307) 
error 때문에 추가한 파일 */

declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module 'react-heart' {
  const Heart: any;
  export default Heart;
}