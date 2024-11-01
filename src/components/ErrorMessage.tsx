interface ErrorMessageProp {
  textError: string;
};

export default function ErrorMessage({ textError }: ErrorMessageProp) {
  return (
    <div className="text-red-600">{textError}
    </div>
  );
}
