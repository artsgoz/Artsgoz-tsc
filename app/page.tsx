import Image from "next/image";
import Logo from "@/app/asset/image/logo-dark.png"

export default function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center">
        <Image
          src={Logo}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          className="mb-8"
        />
        <p className="text-xl mb-2">หน้านี้ยังไม่พร้อมใช้งาน</p>
        <p className="mb-8">กำลังอยู่ระหว่างการพัฒนา โปรดใช้งานเว็บไซต์หลัก</p>

        <div className="flex items-center">
          <a
            className="rounded-full border border-2 transition-colors flex items-center justify-center text-background gap-2 hover:bg-[#ccc] text-sm h-10 px-4"
            href="https://www.arts.chula.ac.th/goz"
            target="_blank"
            rel="noopener noreferrer"
          >
            กลับไปยังเว็บไซต์หลัก
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm">&copy;2024 – Artsgoz</p>
        <a className="text-sm hover:underline" href="https://github.com/artsgoz" target="_blank" rel="noopener noreferrer">GitRepo</a>
      </footer>
    </div>
  );
}
