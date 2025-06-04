import { Button } from "@/components/ui/button";
import Link from "next/link";
import { kanit, k2d} from "../../fonts";

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className={`${kanit.className} text-2xl text-amber-600`}>ชื่อ</span>
          <input
            type="text"
            name="name"
            className="border border-amber-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50 placeholder:text-amber-300"
            required
            placeholder="กรอกชื่อของคุณ"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={`${kanit.variable} text-2xl`}>Email</span>
          <input
            type="email"
            name="email"
            className="border border-amber-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50 placeholder:text-amber-300"
            required
            placeholder="กรอกอีเมลของคุณ"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={`${k2d.variable} text-2xl`}>Message</span>
          <textarea
            name="message"
            rows={5}
            className="border border-amber-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50 placeholder:text-amber-300"
            required
            placeholder="กรอกข้อความของคุณ"
          />
        </label>
        <div className="justify-start flex w-full " >
        <Button variant = "outline"
          type="submit"
          className=" kanit.className  "
        >
          Send Message
        </Button>
        <div  className="justify-start flex w-full ml-75">
          <Button variant="outline" asChild>
            <Link href="/" className="justify-start flex w-full">Go to Home Page</Link>
          </Button>
        </div>
        </div>
      </form>
    </div>
  );
}
