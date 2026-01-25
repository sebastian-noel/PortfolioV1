"use client";

import { useRef, useMemo } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { heroContent } from "@/data";
import { type SkillType, type TechnicalSkill } from "@/types";

const SKILL_TYPE_ORDER: SkillType[] = [
  "Programming Languages",
  "Frameworks/Libraries",
  "Developer Tools",
];

// Flatten all skills with their index for staggered animation
function flattenSkillsWithIndex(
  groupedSkills: Map<SkillType, Map<string, TechnicalSkill[]>>
): { skill: TechnicalSkill; globalIndex: number }[] {
  const result: { skill: TechnicalSkill; globalIndex: number }[] = [];
  let index = 0;

  SKILL_TYPE_ORDER.forEach((type) => {
    const categoryMap = groupedSkills.get(type);
    if (!categoryMap) return;

    categoryMap.forEach((skills) => {
      skills.forEach((skill) => {
        result.push({ skill, globalIndex: index });
        index++;
      });
    });
  });

  return result;
}

export default function TechnicalSkills() {
  const skills = heroContent.skills;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Group skills by type, then by category within each type
  const groupedSkills = useMemo(() => {
    const byType = new Map<SkillType, Map<string, TechnicalSkill[]>>();

    skills?.forEach((skill) => {
      if (!byType.has(skill.type)) {
        byType.set(skill.type, new Map());
      }
      const typeGroup = byType.get(skill.type)!;
      const category = skill.category || "General";
      if (!typeGroup.has(category)) {
        typeGroup.set(category, []);
      }
      typeGroup.get(category)!.push(skill);
    });

    return byType;
  }, [skills]);

  // Get global indices for staggered animation
  const skillIndices = useMemo(() => {
    const flatList = flattenSkillsWithIndex(groupedSkills);
    const indexMap = new Map<string, number>();
    flatList.forEach(({ skill, globalIndex }) => {
      indexMap.set(skill.name, globalIndex);
    });
    return indexMap;
  }, [groupedSkills]);

  if (!skills?.length) return null;

  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
          duration: 0.45,
          ease: "easeOut",
        },
    },
  };

  return (
    <section className="bg-background py-10 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
          <p className="text-(--color-text)/75 max-w-2xl mx-auto">
            A collection of technologies and tools I've worked with throughout my projects and experiences.
          </p>
        </div>

        <div ref={ref} className="space-y-12">
          {SKILL_TYPE_ORDER.map((type) => {
            const categoryMap = groupedSkills.get(type);
            if (!categoryMap) return null;

            const categories = Array.from(categoryMap.entries());
            const hasCategories = categories.some(([cat]) => cat !== "General");

            return (
              <motion.div 
                key={type} 
                variants={sectionVariant}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="space-y-6"
              >
                {/* Type Header */}
                <h3 className="text-xl font-semibold text-center text-primary">
                  {type}
                </h3>

                {hasCategories ? (
                  // Render with category brackets in a flowing line
                  <div className="flex flex-wrap justify-center gap-4">
                    {categories.map(([category, categorySkills]) => (
                      <CategoryGroup
                        key={category}
                        category={category}
                        skills={categorySkills}
                        skillIndices={skillIndices}
                        isInView={isInView}
                      />
                    ))}
                  </div>
                ) : (
                  // Render without category sub-groups
                  <div className="flex flex-wrap justify-center gap-4">
                    {categories.flatMap(([, categorySkills]) =>
                      categorySkills.map((skill) => (
                        <SkillCard 
                          key={skill.name} 
                          skill={skill} 
                          index={skillIndices.get(skill.name) || 0}
                          isInView={isInView}
                        />
                      ))
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CategoryGroup({
  category,
  skills,
  skillIndices,
  isInView,
}: {
  category: string;
  skills: TechnicalSkill[];
  skillIndices: Map<string, number>;
  isInView: boolean;
}) {
  // Get the index of the first skill in this category to sync the animation
  const firstSkillIndex = skillIndices.get(skills[0]?.name) || 0;
  const baseDelay = firstSkillIndex * 0.12;

  return (
    <div className="flex flex-col items-center group/category">
      {/* Category label with bracket */}
      <div className="flex flex-col items-center mb-1 w-full">
        {/* Category title - appears first */}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.38,
            delay: baseDelay + 0.8,
            ease: "easeOut",
          }}
          className="text-xs font-medium text-accent uppercase tracking-wider px-2 transition-all duration-300 group-hover/category:text-primary group-hover/category:scale-105"
        >
          {category}
        </motion.span>
        {/* Bracket line that spans the full width - reveals from center */}
        <div className="relative w-full mt-1 h-3">
          {/* Horizontal top line - scales from center */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{
              duration: 0.45,
              delay: baseDelay + 0.9,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute top-0 left-1 right-1 h-0 border-t-2 border-accent/50 origin-center transition-colors duration-300 group-hover/category:border-primary" 
          />
          {/* Left vertical leg - fades in after horizontal */}
          <motion.div 
            initial={{ opacity: 0, scaleY: 0 }}
            animate={isInView ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
            transition={{
              duration: 0.30,
              delay: baseDelay + 1.0,
              ease: "easeOut",
            }}
            className="absolute top-0 left-1 w-0 h-full border-l-2 border-accent/50 origin-top transition-colors duration-300 group-hover/category:border-primary" 
          />
          {/* Right vertical leg - fades in after horizontal */}
          <motion.div 
            initial={{ opacity: 0, scaleY: 0 }}
            animate={isInView ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
            transition={{
              duration: 0.30,
              delay: baseDelay + 1.0,
              ease: "easeOut",
            }}
            className="absolute top-0 right-1 w-0 h-full border-r-2 border-accent/50 origin-top transition-colors duration-300 group-hover/category:border-primary" 
          />
        </div>
      </div>
      {/* Skills in this category */}
      <div className="flex flex-wrap justify-center gap-3 pt-1">
        {skills.map((skill) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            index={skillIndices.get(skill.name) || 0}
            isInView={isInView}
          />
        ))}
      </div>
    </div>
  );
}

function SkillCard({
  skill,
  index,
  isInView,
}: {
  skill: TechnicalSkill;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{
        duration: 0.36,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="flex flex-col items-center justify-center w-28 h-28 px-2 py-3 rounded-xl bg-secondary/20 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-secondary/30 cursor-pointer group"
    >
      <div className="relative w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={skill.icon}
          alt={`${skill.name} icon`}
          fill
          className="object-contain"
          sizes="48px"
        />
      </div>
      <p className="text-xs font-medium text-center text-(--color-text)/90 group-hover:text-accent transition-colors duration-300">
        {skill.name}
      </p>
    </motion.div>
  );
}
