import { ReactNode, useRef } from "react";

interface Props {
  title: string;
  desc: string;
  icon: string;
  tags?: string[];
  children?: ReactNode;
}
export default function ProjectCard({
  title,
  desc,
  icon,
  tags,
  children,
}: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  return (
    <>
      <div
        className="card card-compact border border-base-100"
        onClick={() => {
          modal.current?.showModal();
        }}
      >
        <figure className="h-36 bg-indigo-100">
          <div className="m-auto text-4xl">{icon}</div>
        </figure>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="mb-2">{desc}</p>
          <div className="flex gap-1">
            {(tags ?? []).map((tag) => (
              <div key={tag} className="badge badge-primary text-white">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      <dialog ref={modal} className="modal">
        <form method="dialog" className="modal-box p-8 bg-white">
          <h4 className="text-2xl font-semibold">{title}</h4>
          <div className="mb-4 text-sm text-base-300">{desc}</div>
          <div className="mb-4 flex gap-1">
            {(tags ?? []).map((tag) => (
              <div key={tag} className="badge badge-primary text-white">
                {tag}
              </div>
            ))}
          </div>
          {children}
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
}
