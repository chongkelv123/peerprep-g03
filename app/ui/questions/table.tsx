import Image from 'next/image';
import { UpdateQuestion, DeleteQuestion, ReadQuestion } from '@/app/ui/questions/buttons';
// import InvoiceStatus from '@/app/ui/invoices/status';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { questionShowTitleComplexity } from '@/app/lib/placeholder-data.js';

export default async function QuestionsTable() {
  const questions = questionShowTitleComplexity;

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {questions?.map((question) => (
              <div
                key={question.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">                      
                      <p>{question.title}</p>
                    </div>
                    <p className="text-sm text-gray-500">{question.complexity}</p>
                  </div>
                  {/*<InvoiceStatus status={question.status} />*/}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    {/*
                    <p className="text-xl font-medium">
                      {formatCurrency(question.amount)}
                    </p>
                    <p>{formatDateToLocal(question.date)}</p>
                  */}
                  </div>
                  <div className="flex justify-end gap-2">
                    <ReadQuestion id={question.id} />
                    <UpdateQuestion id={question.id} />
                    <DeleteQuestion id={question.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Title
                </th>
                {/*<th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>*/}
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {questions?.map((question) => (
                <tr
                  key={question.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">                      
                      <p>{question.title}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {question.complexity}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/*{formatCurrency(question.amount)}*/}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/*{formatDateToLocal(question.date)}*/}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/*<InvoiceStatus status={question.status} />*/}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                    <ReadQuestion id={question.id} />
                    <UpdateQuestion id={question.id} />
                    <DeleteQuestion id={question.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}