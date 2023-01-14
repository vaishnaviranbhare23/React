import { TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import PDFPrinter from "./PDFPrinter";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "4ch",
  },
}));

const ControlPanel = (props) => {
  const { file, pageNumber, numPages, setPageNumber, scale, setScale } = props;

  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === numPages;

  const firstPageClass = isFirstPage ? "disabled" : "clickable";
  const lastPageClass = isLastPage ? "disabled" : "clickable";

  const goToFirstPage = () => {
    if (!isFirstPage) setPageNumber(1);
  };
  const goToPreviousPage = () => {
    if (!isFirstPage) setPageNumber(pageNumber - 1);
  };
  const goToNextPage = () => {
    if (!isLastPage) setPageNumber(pageNumber + 1);
  };
  const goToLastPage = () => {
    if (!isLastPage) setPageNumber(numPages);
  };

  const onPageChange = (e) => {
    const { value } = e.target;
    setPageNumber(Number(value));
  };

  const isMinZoom = scale < 0.6;
  const isMaxZoom = scale >= 2.0;

  const zoomOutClass = isMinZoom ? "disabled" : "clickable";
  const zoomInClass = isMaxZoom ? "disabled" : "clickable";

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1);
  };

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1);
  };

  const classes = useStyles();

  return (
    <div className="control-panel m-3 p-3 d-flex align-items-baseline justify-content-between">
      <div className="d-flex justify-content-between align-items-baseline">
        {/* <i
          class={`fa fa-caret-left ${firstPageClass}`}
          onClick={goToFirstPage}
        />
    
        <i
          className={`fas fa-backward mx-3 ${firstPageClass}`}
          onClick={goToPreviousPage}
        /> */}
        <span style={{ fontSize: 18 }}>
          Page{" "}
          {/* <input
            name="pageNumber"
            type="number"
            min={1}
            max={numPages || 1}
            className="p-0 pl-1 mx-2"
            value={pageNumber}
            onChange={onPageChange}
          /> */}
          <TextField
            name="pageNumber"
            id="standard-number"
            type="number"
            size="small"
            className={classes.textField}
            min={1}
            max={numPages || 1}
            value={pageNumber}
            onChange={onPageChange}
            InputLabelProps={{
              shrink: true,
            }}
          />{" "}
          of {numPages}
        </span>
        {/* <i
          className={`fas fa-forward mx-3 ${lastPageClass}`}
          onClick={goToNextPage}
        />
        <i
          className={`fas fa-fast-forward mx-3 ${lastPageClass}`}
          onClick={goToLastPage}
        /> */}
      </div>
      <div
        className="d-flex justify-content-between align-items-baseline"
        style={{ fontSize: 18 }}
      >
        <i
          class={`fa fa-search-minus mx-3 ${zoomOutClass}`}
          onClick={zoomOut}
        />
        <span>{(scale * 100).toFixed()}%</span>
        <i
          className={`fa fa-search-plus mx-3 ${zoomInClass}`}
          onClick={zoomIn}
        />
      </div>
      <div className="mx-3">
        <a href="/assets/docs/file-sample.pdf" download={true} title="download">
          <i className="fas fa-file-download clickable" />
        </a>
      </div>
      {/* <div className="mx-3">
        <PDFPrinter file={file} />
      </div> */}
    </div>
  );
};

export default ControlPanel;
