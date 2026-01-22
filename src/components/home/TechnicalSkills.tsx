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

  if (!skills?.length) return null;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
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

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
          className="space-y-12"
        >
          {SKILL_TYPE_ORDER.map((type) => {
            const categoryMap = groupedSkills.get(type);
            if (!categoryMap) return null;

            const categories = Array.from(categoryMap.entries());
            const hasCategories = categories.some(([cat]) => cat !== "General");

            return (
              <motion.div key={type} variants={sectionVariant} className="space-y-6">
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
                        itemVariants={item}
                      />
                    ))}
                  </div>
                ) : (
                  // Render without category sub-groups
                  <motion.div
                    variants={container}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    {categories.flatMap(([, categorySkills]) =>
                      categorySkills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} variants={item} />
                      ))
                    )}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function CategoryGroup({
  category,
  skills,
  itemVariants,
}: {
  category: string;
  skills: TechnicalSkill[];
  itemVariants: { hidden: { opacity: number; y: number }; show: { opacity: number; y: number } };
}) {
  return (
    <div className="flex flex-col items-center group/category">
      {/* Category label with bracket */}
      <div className="flex flex-col items-center mb-1 w-full">
        <span className="text-xs font-medium text-accent uppercase tracking-wider px-2 transition-all duration-300 group-hover/category:text-primary group-hover/category:scale-105">
          {category}
        </span>
        {/* Bracket line that spans the full width */}
        <div className="relative w-full mt-1 h-2">
          {/* Horizontal top line */}
          <div className="absolute top-0 left-2 right-2 h-0 border-t-2 border-accent/50 transition-all duration-300 group-hover/category:border-primary" />
          {/* Left vertical leg */}
          <div className="absolute top-0 left-2 w-0 h-full border-l-2 border-accent/50 transition-all duration-300 group-hover/category:border-primary" />
          {/* Right vertical leg */}
          <div className="absolute top-0 right-2 w-0 h-full border-r-2 border-accent/50 transition-all duration-300 group-hover/category:border-primary" />
        </div>
      </div>
      {/* Skills in this category */}
      <div className="flex flex-wrap justify-center gap-3 pt-1">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} variants={itemVariants} />
        ))}
      </div>
    </div>
  );
}

function SkillCard({
  skill,
  variants,
}: {
  skill: TechnicalSkill;
  variants: { hidden: { opacity: number; y: number }; show: { opacity: number; y: number } };
}) {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col items-center justify-center w-24 p-4 rounded-xl bg-secondary/20 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-secondary/30 cursor-pointer group"
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
