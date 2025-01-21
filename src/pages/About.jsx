import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10">
        <p>About Us</p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            recusandae labore ratione qui veritatis quaerat rerum itaque,
            voluptatem delectus sequi animi ut repellendus possimus veniam! Ea
            sint ex nobis cupiditate! Laudantium accusantium ea necessitatibus
            corporis expedita sit nesciunt enim.
          </p>
          <p>
            {" "}
            Sunt quas nemo ut excepturi asperiores eveniet quaerat esse autem
            mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque debitis laboriosam officia repellendus molestiae nisi ab nemo
            beatae mollitia voluptatem voluptatibus quisquam, ut doloribus
            repellat!
          </p>{" "}
          <p>
            Provident, ex? Impedit aperiam consectetur nulla architecto officia
            obcaecati, beatae cumque doloremque rem magnam asperiores eligendi,
            aliquam placeat, quam voluptatum officiis eius fuga explicabo
            tempore?
          </p>
        </div>
      </div>

      <div className="mt-10 mb-8">
        <p className="text-xl">Why Choose Us</p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-200 cursor-pointer">
          <b>EFFICIENCY</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-200 cursor-pointer">
          <b>CONVENIENCE</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-200 cursor-pointer">
          <b>PERSONALIZATION</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
