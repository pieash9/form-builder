import { GetFormById } from "@/actions/form";
import FormLinkShare from "@/components/FormLinkShare";
import VisitBtn from "@/components/VisitBtn";
import { StatsCard } from "../../page";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";

const FormDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const form = await GetFormById(Number(id));

  if (!form) {
    throw new Error("Form not found");
  }

  const { visits, submissions } = form;

  let submissionRate = 0;
  let bounceRate = 0;

  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }

  if (submissionRate > 0) {
    bounceRate = 100 - submissionRate;
  }

  return (
    <>
      <div className="py-10 border-t border-b border-muted">
        <div className="container flex items-center justify-between">
          <h1 className="text-4xl truncate font-bold">{form.name}</h1>
          <VisitBtn shareUrl={form.shareUrl} />
        </div>
      </div>
      <div className="py-4 border-b border-muted">
        <div className="container flex items-center justify-between gap-2">
          <FormLinkShare shareUrl={form.shareUrl} />
        </div>
      </div>
      <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container">
        <StatsCard
          title="Total visits"
          icons={<LuView className="text-blue-600" />}
          helperText="All time form visits"
          value={visits.toLocaleString() || ""}
          loading={false}
          className="shadow-md shadow-blue-600"
        />

        <StatsCard
          title="Total submissions"
          icons={<FaWpforms className="text-yellow-600" />}
          helperText="All time form submissions"
          value={submissions.toLocaleString() || ""}
          loading={false}
          className="shadow-md shadow-yellow-600"
        />

        <StatsCard
          title="Submission rate"
          icons={<HiCursorClick className="text-green-600" />}
          helperText="Visit that result in form submission"
          value={submissionRate.toLocaleString() + "%" || ""}
          loading={false}
          className="shadow-md shadow-green-600"
        />

        <StatsCard
          title="Bounce rate"
          icons={<TbArrowBounce className="text-red-600" />}
          helperText="Visit that leaves without interacting"
          value={bounceRate.toLocaleString() + "%" || ""}
          loading={false}
          className="shadow-md shadow-red-600"
        />
      </div>
      <div className="container pt-10">
        <SubmissionsTable id={form.id} />
      </div>
    </>
  );
};

export default FormDetailsPage;

function SubmissionsTable({ id }: { id: number }) {
  return (
    <>
      <h1 className="text-2xl font-bold my-4">Submissions</h1>
    </>
  );
}
