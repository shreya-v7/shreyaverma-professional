import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Shreya Verma"
          className="rounded-full block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <div className="mb-8 font-medium">
       <span className="text-2xl">Deep Learning!</span> <span className="text-2sm">shallow humor :)</span>
      </div>

      <div className="prose prose-neutral dark:prose-invert text-justify">
        <p>
        Hello, I’m Shreya—a dedicated science fiction enthusiast and unapologetic geek, diving deep into the captivating worlds of machine learning and deep learning. 
        </p>
        <p>
        With a strong academic background and experience at Morgan Stanley, I embrace challenges to push boundaries, deepen my expertise, and advance sustainable technology.
        </p>
        <p>
        Fueled by insatiable curiosity, I’m on a mission to explore how technology and finance intertwine, unraveling the mysteries of innovative financial models and risk analytics while questioning the “how” and “why” behind these advancements.
        </p>
      </div>
    </section>
  );
}
