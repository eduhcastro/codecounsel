

import { Modal, Typography, IconAlertCircle, IconArrowRightCircle } from "@supabase/ui";
import { useState, useEffect } from "react";

interface SettingsProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Settings({ visible, setVisible }: SettingsProps): JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const modal = document.querySelector(".modal-animacao");

    if (visible) {
      const timeoutId = setTimeout(() => {
        modal?.classList.add("active");
      }, 500);

      return () => clearTimeout(timeoutId);
    } else {
      modal?.classList.remove("active");
    }
  }, [visible]);

  function handleCancel() {
    setVisible(false);
  }

  function handleConfirm() {
    setIsModalVisible(true);
  }

  return (
    <Modal
      size="small"
      loading={true}
      layout="vertical"
      title="How to use?"
      visible={visible}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
      icon={<IconAlertCircle background="brand" size="xlarge" />}
      className="modal-animacao"
      hideFooter
    >
      <Typography.Text style={{ textAlign: "start" }}>
        To use the tools available here, you must have a valid access key from OpenAI. Sign up for OpenAI, then go to the
        OpenAI APIs Dashboard. In the "View API keys" section, create a new access key. Remember that you have free
        credits available through OpenAI. Within a certain period, if they are not used completely, these credits will
        expire. After obtaining the access key, just insert it in the indicated field of each tool to be able to use the
        site and its respective tools.
      </Typography.Text>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "nowrap",
          textAlign: "center",
          placeSelf: "center",
          fontSize: "14px"
        }}
      >
        <div style={{ display: "flex", color: "#6161ff" }}>
          <IconArrowRightCircle size={16} />{" "}
          <a href="https://platform.openai.com/signup?launch" target="__blank">
            Create an account
          </a>
        </div>
        <div style={{ display: "flex", color: "#6161ff", marginLeft: "10px" }}>
          <IconArrowRightCircle size={16} />{" "}
          <a href="https://platform.openai.com/account/api-keys" target="__blank">
            Get the API key
          </a>
        </div>
      </div>
      <Modal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onConfirm={() => setIsModalVisible(false)}
        title="Disclaimer"
      >
        <Typography.Text style={{ textAlign: "start" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur lorem vitae odio posuere, ut
          maximus diam elementum. Donec fermentum risus eu neque blandit efficitur. Sed euismod, ex volutpat
          sollicitudin eleifend, massa velit porta turpis, quis sagittis mauris quam id enim. Mauris id sollicitudin
          mauris, sagittis molestie odio. Phasellus malesuada rutrum nisi, eu tristique libero dignissim in. Praesent
          fringilla vel erat vitae aliquam. Phasellus vitae m
        </Typography.Text>
      </Modal>
    </Modal>
  );
}

