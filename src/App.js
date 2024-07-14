export default function App() {
  return (
    <div className="container bg-Green(lighter) mx-auto mt-10 p-12">
      <Form />
    </div>
  );
}

function Form() {
  return (
    <form className="bg-white min-h-screen rounded-2xl p-10">
      <h1 className="text-6xl text-Grey(darker) font-karla font-bold tracking-tighter mb-10">
        Contact Us
      </h1>
      <div className="flex flex-col gap-4 mb-8">
        <label className="text-3xl font-karla  text-Grey(darker) ">
          First Name <span className="text-Green(medium) p-4">*</span>
        </label>
        <input
          type="text"
          required
          className="border-2 rounded-2xl w-full p-6 border-gray-300 focus: outline-none hover:border-Green(lighter)"
        />
      </div>
      <div className="flex flex-col gap-4 mb-8">
        <label className="text-3xl font-karla  text-Grey(darker)">
          Last Name <span className="text-Green(medium) p-4">*</span>
        </label>

        <input
          type="text"
          required
          className="border-2 rounded-2xl w-full p-6 border-gray-300 focus: outline-none hover:border-Green(lighter)"
        />
      </div>
      <div className="flex flex-col gap-4 mb-8">
        <label className="text-3xl font-karla text-Grey(darker)">
          Email Address <span className="text-Green(medium) p-4">*</span>
        </label>
        <input
          type="text"
          required
          className="border-2 rounded-2xl w-full p-6 border-gray-300 focus: outline-none hover:border-Green(lighter)"
        />
      </div>
      <div className="flex flex-col gap-4 mb-8">
        <label className="text-3xl font-karla text-Grey(darker)">
          Query Type <span className="text-Green(medium) p-4">*</span>
        </label>
        <div className="w-full border-2 p-4 rounded-2xl">
          <label className="inline-flex relative items-center gap-8 text-3xl text-Grey(darker)">
            <input type="radio" checked className="inline-block" />
            General Enqury
          </label>
        </div>
        <div className="w-full border-2 p-4 rounded-2xl">
          <label className="inline-flex relative items-center gap-6 text-3xl text-Grey(darker) ">
            <input type="radio" className="inline-block" />
            Support Request
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-8">
        <label className="text-3xl font-karla  text-Grey(darker)">
          Messages <span className="text-Green(medium) p-4">*</span>
        </label>
        <textarea
          rows="1"
          cols="20"
          type="text"
          className="border-2 rounded-md w-full p-2 border-gray-300 focus: outline-none hover:border-Green(lighter)"
        ></textarea>
      </div>

      <div className="flex gap-6 mb-6">
        <input type="checkbox" />
        <label className="text-2xl text-Grey(darker) tracking-tight leading-6">
          I consent to being contacted by the team
        </label>
      </div>
      <button
        type="submit"
        className="inline-block w-full text-white text-2xl bg-Green(medium) p-4 rounded-2xl"
      >
        Submit
      </button>
    </form>
  );
}
