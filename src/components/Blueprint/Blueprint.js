import React, { useRef, useState, useEffect } from "react";
import "./Blueprint.css";

import {
  Tab,
  type TabId,
  TabPanel,
  Tabs,
  TabsExpander,
  Alert,
  Button,
  H5,
  Intent,
  OverlayToaster,
  Switch,
  Card,
  Classes,
  Code,
  Divider,
  FormGroup,
  Icon,
  InputGroup,
  Tooltip,
} from "@blueprintjs/core";

import { Example, type ExampleProps, handleBooleanChange } from "@blueprintjs/docs-theme";

// import { IntentSelect } from "./common/intentSelect";

function Dashboard() {
  const FileErrorAlert: React.FC<AlertExampleProps> = ({
    canEscapeKeyCancel,
    canOutsideClickCancel,
    themeName,
    willLoad,
}) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = React.useCallback(() => setIsOpen(true), []);

    const handleClose = React.useCallback(() => {
        const close = () => {
            setIsOpen(false);
            setIsLoading(false);
        };
        if (willLoad) {
            setIsLoading(true);
            setTimeout(close, 2000);
        } else {
            close();
        }
    }, [willLoad]);

    return (
        <>
            <Button onClick={handleClick} text="Open file error alert" />
            <Alert
                canEscapeKeyCancel={canEscapeKeyCancel}
                canOutsideClickCancel={canOutsideClickCancel}
                className={themeName}
                confirmButtonText="Okay"
                isOpen={isOpen}
                loading={isLoading}
                onClose={handleClose}
            >
                <p>
                    Couldn't create the file because the containing folder doesn't exist anymore. You will be redirected
                    to your user folder.
                </p>
            </Alert>
        </>
    );
};


const FileErrorAlert1: React.FC<AlertExampleProps> = props => {
  const [disabled, setDisabled] = React.useState(false);
    const [helperText, setHelperText] = React.useState(false);
    const [fill, setFill] = React.useState(false);
    const [inline, setInline] = React.useState(false);
    // const [intent, setIntent] = React.useState<Intent>(Intent.NONE);
    const [label, setLabel] = React.useState(true);
    const [requiredLabel, setRequiredLabel] = React.useState(true);
    const [subLabel, setSubLabel] = React.useState(false);

    const options = (
      <>
          <H5>Props</H5>
          <Switch label="Disabled" checked={disabled} onChange={handleBooleanChange(setDisabled)} />
          <Switch label="Fill" checked={fill} onChange={handleBooleanChange(setFill)} />
          <Switch label="Inline" checked={inline} onChange={handleBooleanChange(setInline)} />
          <Switch label="Show helper text" checked={helperText} onChange={handleBooleanChange(setHelperText)} />
          <Switch label="Show label" checked={label} onChange={handleBooleanChange(setLabel)} />
          <Switch label="Show label info" checked={requiredLabel} onChange={handleBooleanChange(setRequiredLabel)} />
          <Switch label="Show sub label" checked={subLabel} onChange={handleBooleanChange(setSubLabel)} />
          <Divider />
          {/* <IntentSelect intent={intent} label={intentLabelInfo} onChange={setIntent} showClearButton={true} /> */}
      </>
  );

  return (
    <Card  options={options} {...props} style={{ width: fill ? "100%" : undefined }}>
        <FormGroup
            {...{ disabled, fill, inline }}
            helperText={helperText && "Helper text with details..."}
            label={label && "Label"}
            labelFor="text-input"
            labelInfo={requiredLabel && "(required)"}
            subLabel={subLabel && "Label helper text with details..."}
        >
            <InputGroup id="text-input" placeholder="Placeholder text" disabled={disabled}  />
        </FormGroup>
        <FormGroup
            {...{ disabled, fill, inline}}
            helperText={helperText && "Helper text with details..."}
            label={label && "Label"}
            labelInfo={requiredLabel && "(required)"}
        >
            <Switch label="Engage the hyperdrive" disabled={disabled} />
            <Switch label="Initiate thrusters" disabled={disabled} />
        </FormGroup>
    </Card>
  );
};
  return (
    <div className="App ">
      <div className="grid">
        <div className="col-6 col-offset-3  ">
          <div className=" flex justify-content-center mb-4  ">
            <h2>Blueprint</h2>
          </div>
          {/* Demo Tabs */}
          <Tabs id="TabsExample">
            <Tab id="rx" title="Alert" panel={<FileErrorAlert />} />
            <Tab id="rx1" title="React" panel={<FileErrorAlert1 />} />

            <TabsExpander />
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
