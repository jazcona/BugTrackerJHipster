package com.mycompany.bugtracker.domain;

import static com.mycompany.bugtracker.domain.ProjectTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.bugtracker.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ProjectTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Project.class);
        Project project1 = getProjectSample1();
        Project project2 = new Project();
        assertThat(project1).isNotEqualTo(project2);

        project2.setId(project1.getId());
        assertThat(project1).isEqualTo(project2);

        project2 = getProjectSample2();
        assertThat(project1).isNotEqualTo(project2);
    }
}
