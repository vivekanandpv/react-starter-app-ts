import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { httpClient } from "../http.client";

interface CustomerForm {
  fullName: string;
  age: number;
  newsletter: boolean;
  language: string;
  rating: string;
  comments: string;
}

const SampleForm = () => {
  const { register, control, handleSubmit, reset, formState } =
    useForm<CustomerForm>({
      defaultValues: {
        fullName: "",
        age: 18,
        newsletter: false,
        language: "en",
        rating: "good",
        comments: "",
      },
      mode: "onSubmit",
    });

  const {
    isSubmitSuccessful,
    isSubmitting,
    isSubmitted,
    errors,
    dirtyFields,
    touchedFields,
  } = formState;

  const submit = (data: CustomerForm) => {
    console.log("form submitted", data);
  };

  const submissionError = (errors: any) => {
    console.log("submission errors", errors);
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <>
      <h4>Sample Registration Form</h4>
      <form noValidate onSubmit={handleSubmit(submit, submissionError)}>
        <div className="from-group mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            {...register("fullName", {
              required: "Full name of the user is required",
              validate: {
                lettersOnly: (fv) => {
                  const regex = /^[A-Za-z ]*$/;
                  return regex.test(fv) || "Full name should only be letters";
                },
              },
            })}
          />
          <p className="text-danger form-text">{errors.fullName?.message}</p>
        </div>

        <div className="from-group mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            step="1"
            {...register("age", {
              required: "Age of the user is required",
              validate: {
                numbersOnly: (fv: number) => {
                  const regex = /^[1-9][0-9]?$|^100$/;
                  return (
                    regex.test(fv.toString()) || "Age should be numbers (1-100)"
                  );
                },
              },
            })}
          />
          <p className="text-danger form-text">{errors.age?.message}</p>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="newsletter"
            {...register("newsletter")}
          />
          <label className="form-check-label" htmlFor="newsletter">
            {" "}
            Newsletter{" "}
          </label>
        </div>

        <div className="from-group mb-3">
          <label htmlFor="language" className="form-label">
            Language
          </label>
          <select
            className="form-select"
            id="language"
            {...register("language")}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>

        <div className="from-group mb-3">
          <label className="form-label">Rating</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="good"
              value="good"
              {...register("rating")}
            />
            <label className="form-check-label" htmlFor="good">
              {" "}
              Good{" "}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="okay"
              value="okay"
              {...register("rating")}
            />
            <label className="form-check-label" htmlFor="okay">
              {" "}
              Okay{" "}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="should-improve"
              value="should-improve"
              {...register("rating")}
            />
            <label className="form-check-label" htmlFor="should-improve">
              Should improve
            </label>
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="comments" className="form-label">
            Comments
          </label>
          <textarea
            className="form-control"
            id="comments"
            rows={3}
            {...register("comments", {
              required: "Comment is required",
              maxLength: 100,
              minLength: 5,
              validate: {
                serverValidation: async (fv) => {
                  const response = await httpClient
                    .get("comments/5")
                    .then((r) => r.data);

                  return (
                    response.email === fv ||
                    `This comment is not allowed. Should be: ${response.email}`
                  );
                },
              },
            })}
          ></textarea>
          <p className="text-danger form-text">{errors.comments?.message}</p>
        </div>

        <button className="btn btn-primary btn-sm">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default SampleForm;
