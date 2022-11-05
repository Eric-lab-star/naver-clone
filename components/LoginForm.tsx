export default function LoginForm() {
  return (
    <div className=" h-[130px] bg-slate-100">
      <div className="h-[90px] border-x border-t flex justify-evenly items-center ">
        <div className="w-[60px] h-[60px] bg-slate-200  rounded-full"></div>
        <div className="w-[180px] h-[60px] bg-slate-200"></div>
        <div>
          <div>로그아웃</div>
        </div>
      </div>
      <div className="h-[40px] grid grid-cols-5 divide-x-[1px] border">
        {["블로그", "포스트", "카페", "메일", "알림"].map((item) => (
          <div
            className="flex justify-center items-center text-sm font-semibold hover:cursor-pointer"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
