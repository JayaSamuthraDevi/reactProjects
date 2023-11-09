import React from "react";
import "./Document_Section.scss";
import Icons from "../../assets/icons/Icons";
import DisplayFiles from "./Display_Doc";

function Document_Section() {
  return (
    <>
      <div className="doc_container  p-0">
        <h1 className="p-4 text-center">PDFChatBot</h1>
        <div className="doc-header text-center ">
          <p>
            PDFChatBot is a software tool or service that enables conversational
            interactions with PDF documents, simplifying the extraction of
            information through natural language conversations.
          </p>
        </div>

        <div className="upload-box d-flex flex-column">
          <div className=" upload-area m-4 row align-items-center">
            <img
              src={Icons.upload_cloud_icon}
              alt="upload-file-icon"
              className="col-auto p-0"
            />
            <div className=" upload-file-placeholderText col d-flex flex-column">
              <h6 className="m-0">Select a file or drag and drop here</h6>
              <p className="m-0">
                PDF, TXT or DOCX file, size no more than 10MB
              </p>
            </div>

            <div className="file-input col-auto ">
              <label htmlFor="file">
                <h5>SELECT FILE</h5>
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept=".doc,.docx,.pdf"
                multiple
                onChange={(e) => {
                  let file = e.target.files[0];
                  if (file) {
                    DisplayFiles(
                      e.target.files[0]["name"],
                      e.target.files[0]["size"]
                    );
                  }
                }}
              />
            </div>
          </div>

          <div id="upload-file"></div>
        </div>
      </div>
    </>
  );
}

export default Document_Section;
