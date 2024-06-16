import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { PageHeader } from '@widgets/page-header';
import { SkillsTable } from '@widgets/skills-table';

const Skills = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader title="Навыки">
        <Button variant="contained" onClick={() => navigate('/skills/new')}>
          Добавить
        </Button>
      </PageHeader>
      <SkillsTable />
    </>
  );
};

export default Skills;
