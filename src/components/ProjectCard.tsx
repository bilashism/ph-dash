import { Project } from "@/types/globals";
import { DeleteOutlined, EditOutlined, EyeFilled } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;

const ProjectCard = ({ payload }: { payload: Project }) => {
  const { id, name, description } = payload;
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <Image
          width={300}
          height={200}
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <Link href={`/projects/${id}`} key="view">
          <EyeFilled />
        </Link>,
        <EditOutlined key="edit" />,
        <DeleteOutlined key="delete" />
      ]}>
      <Meta
        avatar={
          <Avatar
            src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${Number(id)}`}
          />
        }
        title={<Link href={`/projects/${id}`}>{name}</Link>}
        description={description}
      />
    </Card>
  );
};

export default ProjectCard;
