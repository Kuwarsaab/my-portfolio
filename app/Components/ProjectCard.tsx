'use client;';
import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Indicator,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FullProjectModal from './FullProjectModal';

const ProjectCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div data-aos="fade-up" data-aos-duration="8000">
      {' '}
      <Card
        onClick={open}
        className="!bg-bgColor hover:!scale-[1.03] hover:!shadow-[0_0_10px_1px_#64FFDA] transition-transform duration-300 ease-in-out cursor-pointer !border-2 !border-primaryColor mb-5"
        w="390px"
        shadow="lg"
        padding="sm"
        radius="lg"
        withBorder
      >
        <Card.Section className="p-3">
          <Image
            className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA]"
            src={props.image}
            alt={props.image}
          />
        </Card.Section>

        <Group justify="space-between" mt="xs" mb="xs">
          <Text className="!text-2xl !font-bold !text-white flex items-center gap-3">
            {props.title}
            {props.live === true && (
              <Badge
                variant="outline"
                color="pink"
                rightSection={
                  <Indicator
                    color="pink"
                    position="middle-end"
                    size={7}
                    processing
                  ></Indicator>
                }
              >
                Live
              </Badge>
            )}
          </Text>
        </Group>

        <Group mb="xs">
          {props.technologies.map(
            (tech: string, index: number) =>
              index < 3 && (
                <Badge key={index} variant="light" size="lg" color="#64FFDA">
                  {tech}
                </Badge>
              )
          )}
        </Group>
        <Text className="!text-justify" lineClamp={4} size="sm" c="dimmed">
          {props.desc}
        </Text>

        <Button
          onClick={open}
          className="!bg-primaryColor !text-bgColor !hover:!bg-[#64FFDA] !hover:!text-primaryColor"
          fullWidth
          mt="md"
          radius="md"
        >
          Show More
        </Button>
      </Card>
      <FullProjectModal
        opened={opened}
        close={close}
        title={props.title}
        desc={props.desc}
        image={props.image}
        live={props.live}
        link={props.link}
        github={props.github}
        technologies={props.technologies}
      />
    </div>
  );
};

export default ProjectCard;
